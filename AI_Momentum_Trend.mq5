//+------------------------------------------------------------------+
//|                                          AI_Momentum_Trend.mq5   |
//|   Momentum / Trend-Following Expert Advisor for MT5              |
//|   Strategy:  EMA fast/slow crossover                             |
//|            + MACD histogram confirmation (trend momentum)        |
//|            + RSI filter (avoid chasing overbought/oversold)      |
//|   Reads your broker's REAL live data on the active chart.        |
//|   Works on any timeframe. Signals are BUY / SELL.                |
//|                                                                    |
//|   NOT FINANCIAL ADVICE. No strategy is guaranteed. Trade at      |
//|   your own risk. Test on a demo account first.                   |
//+------------------------------------------------------------------+
#property copyright "AI Signal Engine"
#property version   "1.00"
#property strict
#include <Trade\Trade.mqh>

//+------------------------------------------------------------------+
//| INPUTS                                                            |
//+------------------------------------------------------------------+
input group "===== Trade Settings ====="
input long   InpMagicNumber   = 20260801;   // Magic number
input double InpLots          = 0.01;       // Lot size
input double InpSLPips        = 30.0;       // Stop loss (pips)
input double InpTPPips        = 60.0;       // Take profit (pips)
input double InpMaxSpread     = 30.0;       // Max allowed spread (points)
input int    InpMaxTrades     = 1;          // Max concurrent positions

input group "===== Strategy Settings ====="
input int    InpEmaFast       = 9;          // EMA fast period
input int    InpEmaSlow       = 21;         // EMA slow period
input bool   InpUseRsi        = true;       // Use RSI filter
input int    InpRsiPeriod     = 14;         // RSI period
input double InpRsiBuyLimit   = 58.0;       // RSI max for BUY (avoid overbought)
input double InpRsiSellLimit  = 42.0;       // RSI min for SELL (avoid oversold)
input int    InpMacdFast      = 12;         // MACD fast
input int    InpMacdSlow      = 26;         // MACD slow
input int    InpMacdSignal    = 9;          // MACD signal
input double InpMinMomentum   = 0.0;        // Min |MACD hist| to filter (points)

input group "===== Execution ====="
input bool   InpAutoTrade     = false;      // Auto trade (false = signals + arrows only)
input bool   InpAlerts        = true;       // Popup alert on new signal
input bool   InpCloseOpposite = true;       // Close opposite position on new signal

//+------------------------------------------------------------------+
//| Global objects                                                    |
//+------------------------------------------------------------------+
CTrade   trade;
int      hEmaFast=INVALID_HANDLE, hEmaSlow=INVALID_HANDLE;
int      hRsi=INVALID_HANDLE, hMacdMain=INVALID_HANDLE, hMacdSig=INVALID_HANDLE;
datetime lastBarTime=0;
ulong    sigCount=0;

//+------------------------------------------------------------------+
//| Expert initialization                                             |
//+------------------------------------------------------------------+
int OnInit()
{
   //--- create indicator handles
   hEmaFast = iMA(_Symbol,_Period,InpEmaFast,0,MODE_EMA,PRICE_CLOSE);
   hEmaSlow = iMA(_Symbol,_Period,InpEmaSlow,0,MODE_EMA,PRICE_CLOSE);
   hRsi     = iRSI(_Symbol,_Period,InpRsiPeriod,PRICE_CLOSE);
   hMacdMain= iMACD(_Symbol,_Period,InpMacdFast,InpMacdSlow,InpMacdSignal,PRICE_CLOSE);
   hMacdSig = hMacdMain; // signal line is buffer 1 of same handle

   if(hEmaFast==INVALID_HANDLE || hEmaSlow==INVALID_HANDLE || hRsi==INVALID_HANDLE || hMacdMain==INVALID_HANDLE)
   {
      Print("Failed to create indicator handles");
      return(INIT_FAILED);
   }

   trade.SetExpertMagicNumber(InpMagicNumber);
   trade.SetDeviationInPoints(20);
   Print("AI Momentum Trend EA initialized on ", _Symbol, " ", EnumToString(_Period));
   return(INIT_SUCCEEDED);
}

//+------------------------------------------------------------------+
//| Deinitialization                                                  |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{
   if(hEmaFast!=INVALID_HANDLE)  IndicatorRelease(hEmaFast);
   if(hEmaSlow!=INVALID_HANDLE)  IndicatorRelease(hEmaSlow);
   if(hRsi!=INVALID_HANDLE)      IndicatorRelease(hRsi);
   if(hMacdMain!=INVALID_HANDLE) IndicatorRelease(hMacdMain);
   Comment("");
}

//+------------------------------------------------------------------+
//| Detect a new bar                                                  |
//+------------------------------------------------------------------+
bool IsNewBar()
{
   MqlRates r[1];
   if(CopyRates(_Symbol,_Period,0,1,r)!=1) return(false);
   if(r[0].time==lastBarTime) return(false);
   lastBarTime=r[0].time;
   return(true);
}

//+------------------------------------------------------------------+
//| Read latest indicator buffers (bar = index of completed bar)     |
//+------------------------------------------------------------------+
double BufVal(int handle,int buffer,int start_pos)
{
   double b[2];
   ArraySetAsSeries(b,true);
   if(CopyBuffer(handle,buffer,start_pos,2,b)<2) return(0.0);
   return(b[0]);
}

//+------------------------------------------------------------------+
//| Compute momentum/trend signal. Returns +1 (BUY), -1 (SELL), 0     |
//+------------------------------------------------------------------+
int GetSignal()
{
   // Completed bar index 1 (avoids repainting on the forming bar)
   const int B=1;

   double f0=BufVal(hEmaFast,0,B),   f1=BufVal(hEmaFast,0,B+1);
   double s0=BufVal(hEmaSlow,0,B),   s1=BufVal(hEmaSlow,0,B+1);
   double m0=BufVal(hMacdMain,0,B),  m1=BufVal(hMacdMain,0,B+1);
   double sg0=BufVal(hMacdSig,1,B),  sg1=BufVal(hMacdSig,1,B+1);
   double rsi0=BufVal(hRsi,0,B);

   double hist0=m0-sg0;   // current MACD histogram
   double hist1=m1-sg1;   // previous MACD histogram

   bool emaBull = f0>s0;
   bool emaBear = f0<s0;
   // recent crossover (confirm trend switch)
   bool crossUp = emaBull && (f1<=s1);
   bool crossDn = emaBear && (f1>=s1);

   // MACD momentum rising in the direction of trend
   bool macdBull = hist0>0 && hist0>hist1;
   bool macdBear = hist0<0 && hist0<hist1;

   // RSI filter
   bool rsiOKbuy=true, rsiOKsell=true;
   if(InpUseRsi)
   {
      rsiOKbuy  = rsi0 < InpRsiBuyLimit;   // not overbought
      rsiOKsell = rsi0 > InpRsiSellLimit;  // not oversold
   }

   // Min momentum filter (points)
   double pipPoint = _Point*10.0;
   bool momOK = MathAbs(hist0) >= InpMinMomentum*pipPoint;

   int sig=0;
   if(emaBull && macdBull && rsiOKbuy && momOK) sig=1;      // BUY
   else if(emaBear && macdBear && rsiOKsell && momOK) sig=-1; // SELL

   return(sig);
}

//+------------------------------------------------------------------+
//| Manage open positions                                             |
//+------------------------------------------------------------------+
int CountPositions()
{
   int c=0;
   for(int i=PositionsTotal()-1;i>=0;i--)
   {
      ulong tk=PositionGetTicket(i);
      if(tk==0) continue;
      if(PositionGetString(POSITION_SYMBOL)==_Symbol && PositionGetInteger(POSITION_MAGIC)==InpMagicNumber)
         c++;
   }
   return(c);
}

void CloseOpposite(long type)
{
   if(!InpCloseOpposite) return;
   for(int i=PositionsTotal()-1;i>=0;i--)
   {
      ulong tk=PositionGetTicket(i);
      if(tk==0) continue;
      if(PositionGetString(POSITION_SYMBOL)!=_Symbol) continue;
      if(PositionGetInteger(POSITION_MAGIC)!=InpMagicNumber) continue;
      long posType=PositionGetInteger(POSITION_TYPE);
      if(posType!=type)
      {
         trade.PositionClose(tk);
      }
   }
}

//+------------------------------------------------------------------+
//| Execute a trade                                                   |
//+------------------------------------------------------------------+
void ExecuteSignal(int sig)
{
   double sl=0.0, tp=0.0;
   double ask=SymbolInfoDouble(_Symbol,SYMBOL_ASK);
   double bid=SymbolInfoDouble(_Symbol,SYMBOL_BID);
   double slPts=InpSLPips*10.0*_Point;
   double tpPts=InpTPPips*10.0*_Point;

   if(sig>0)
   {
      CloseOpposite(POSITION_TYPE_BUY);
      if(CountPositions()<InpMaxTrades)
      {
         if(InpSLPips>0) sl=ask-slPts;
         if(InpTPPips>0) tp=ask+tpPts;
         trade.Buy(InpLots,_Symbol,0,sl,tp,"AI-Momentum BUY");
      }
   }
   else if(sig<0)
   {
      CloseOpposite(POSITION_TYPE_SELL);
      if(CountPositions()<InpMaxTrades)
      {
         if(InpSLPips>0) sl=bid+slPts;
         if(InpTPPips>0) tp=bid-tpPts;
         trade.Sell(InpLots,_Symbol,0,sl,tp,"AI-Momentum SELL");
      }
   }
}

//+------------------------------------------------------------------+
//| Draw signal arrow on the chart                                    |
//+------------------------------------------------------------------+
void DrawArrow(int sig)
{
   MqlRates r[1];
   if(CopyRates(_Symbol,_Period,1,1,r)!=1) return;
   string name="AISig_"+(string)(TimeCurrent())+"_"+(string)(sigCount++);
   ENUM_OBJECT obj=(sig>0)?OBJ_ARROW_BUY:OBJ_ARROW_SELL;
   double price=(sig>0)?r[0].low:r[0].high;
   if(ObjectCreate(0,name,obj,0,r[0].time,price))
   {
      ObjectSetInteger(0,name,OBJPROP_COLOR,(sig>0)?clrLimeGreen:clrOrangeRed);
      ObjectSetInteger(0,name,OBJPROP_WIDTH,2);
      ObjectSetInteger(0,name,OBJPROP_ANCHOR,(sig>0)?ANCHOR_TOP:ANCHOR_BOTTOM);
      ObjectSetInteger(0,name,OBJPROP_BACK,false);
   }
}

//+------------------------------------------------------------------+
//| Alert on new signal                                               |
//+------------------------------------------------------------------+
void SignalAlert(int sig)
{
   if(!InpAlerts) return;
   string dir=(sig>0)?"BUY":"SELL";
   double ask=SymbolInfoDouble(_Symbol,SYMBOL_ASK);
   Alert("AI Momentum Trend signal: ",dir," ",_Symbol," @ ",DoubleToString(ask,_Digits));
   SendNotification("AI Momentum Trend: "+dir+" "+_Symbol+" @ "+DoubleToString(ask,_Digits));
   Print("Signal: ",dir," on ",_Symbol," @ ",DoubleToString(ask,_Digits));
}

//+------------------------------------------------------------------+
//| Expert tick function                                              |
//+------------------------------------------------------------------+
void OnTick()
{
   // Spread filter
   long spread=SymbolInfoInteger(_Symbol,SYMBOL_SPREAD);
   if(spread>InpMaxSpread) return;

   if(!IsNewBar()) return;

   int sig=GetSignal();

   // Show status panel
   double rsi0=BufVal(hRsi,0,1);
   double m0 =BufVal(hMacdMain,0,1);
   double sg0=BufVal(hMacdSig,1,1);
   Comment("AI Momentum Trend EA\n",
           "Symbol: ",_Symbol,"   TF: ",EnumToString(_Period),"\n",
           "EMA ",InpEmaFast,"/",InpEmaSlow,"  RSI(",InpRsiPeriod,")=",DoubleToString(rsi0,1),"\n",
           "MACD hist: ",DoubleToString(m0-sg0,_Digits),"\n",
           "Last signal: ",(sig>0?"BUY":(sig<0?"SELL":"WAIT")),"\n",
           "Open positions: ",CountPositions(),"\n",
           "AutoTrade: ",(InpAutoTrade?"ON":"OFF (signals only)"));

   if(sig==0) return;

   DrawArrow(sig);
   SignalAlert(sig);

   if(InpAutoTrade) ExecuteSignal(sig);
}
//+------------------------------------------------------------------+
