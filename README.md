# AI Signal Tools — MT5 Forex EA + Browser Signal Pages

Three tools, one repo:

1. **`AI_Momentum_Trend.mq5`** — a real **MT5 Expert Advisor** (forex). Reads your
   broker's **live** market data, runs a Momentum/Trend strategy, draws BUY/SELL
   arrows, alerts, and can auto-trade.
2. **`forex.html`** — browser/phone forex signal page (real **daily** ECB data).
3. **`index.html`** — live crypto signal bot (Binance/OKX/Gate real-time).

## 🤖 MT5 Expert Advisor (`AI_Momentum_Trend.mq5`)

**Strategy — Momentum / Trend-Following:**
- EMA fast/slow crossover (default 9/21) → direction.
- MACD histogram confirmation → momentum is backing the move.
- RSI filter → avoids buying overbought / selling oversold.

**Install:**
1. Copy `AI_Momentum_Trend.mq5` into your MT5 data folder:
   `MetaTrader 5 > MQL5 > Experts`.
2. Open MT5 → **Navigator** panel → refresh (right-click → Refresh) → find the EA.
3. Drag it onto your forex chart, pick a timeframe, **enable Algo Trading**.
4. Default **AutoTrade = OFF** → it only draws arrows + alerts. Turn it ON only
   after backtesting and on a demo account.

**Settings you can change** (on the EA's Inputs tab): lot size, SL/TP in pips,
EMA periods, RSI period & limits, MACD periods, max spread, max trades, alerts.

> ⚠️ Test on a **demo account** first. No strategy is guaranteed.

## 💹 Browser Forex Page (`forex.html`)
Real **daily** ECB reference rates for ~16 major pairs. Runs the same momentum
strategy on D1 data and shows a BUY/SELL/WAIT signal + verdicts + chart. Signals
are **daily-style**, not live intraday — use the MT5 EA for live trading.
Deployable on GitHub Pages or Netlify (static).

## 🪙 Live Crypto Bot (`index.html`)
20 coins, real-time multi-exchange feed (Binance → OKX → Gate.io), full dashboard.

## Live URL
**https://Umerkhan12474746.github.io/my-first-project/** (GitHub Pages —
publish branch `arena/01a05460-my-first-project`, root).

## ⚠️ Disclaimer
Educational tools. They do not connect to your broker to auto-trade unless you
enable it in the EA, and they never guarantee results. Forex & crypto trading is
high risk; you can lose money. Not financial advice. Trade at your own risk.
