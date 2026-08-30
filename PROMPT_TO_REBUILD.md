# Rebuild Prompt — AI Trading Signal Bot

Copy everything below the line into Claude or Perplexity to rebuild the bot.

---

You are a senior full-stack web developer. Build me a **complete, working AI trading
signal bot as a single self-contained HTML file** that I can open in any browser
and also host free on GitHub Pages or Netlify. No build step, no dependencies, no
backend — everything (HTML, CSS, JavaScript) must be in ONE `index.html` file.
It must run 100% in the browser and work on both desktop and phone.

## IMPORTANT HONESTY RULES
- The app is a **signal generator / manual-trading helper**, NOT a guarantee of profit.
- It must NEVER claim guaranteed wins or fake "99% accuracy".
- Show a clear disclaimer: educational only, not auto-trading, not financial advice,
  trading is high risk, test on demo, no signal is guaranteed.
- Crypto must use REAL live prices. Forex can use REAL daily rates (free APIs),
  clearly labeled as daily-style signals.
- It does NOT connect to MT5 or Pocket Option and does NOT auto-trade. It shows
  signals the user executes manually.

## THE STRATEGY (Momentum / Trend-Following)
Use these indicators together and explain each in a "verdict" panel:
1. **EMA fast/slow crossover** (default 9 / 21) → direction of trend.
2. **MACD histogram** → momentum backing the move (rising/falling).
3. **RSI (14)** → filter: avoid buying when overbought, avoid selling when oversold.
Combine them into a weighted score. Output a clear signal:
- **BUY** (forex) / **UP** (crypto) when score is strongly positive.
- **SELL** (forex) / **DOWN** (crypto) when score is strongly negative.
- **WAIT** when the trend is weak/neutral.
Show a confidence % (realistic range ~50-90%), and a list of per-indicator verdicts.

## TWO MODES (toggle at top)
### Mode 1: Forex (for MT5) — 16 major pairs: EUR/USD, GBP/USD, USD/JPY, USD/CHF,
USD/CAD, AUD/USD, NZD/USD, EUR/GBP, EUR/JPY, GBP/JPY, AUD/JPY, EUR/CHF, CAD/JPY,
CHF/JPY, AUD/CAD, GBP/CHF. Use real **daily** data from the free ECB/Frankfurter API:
`https://api.frankfurter.dev/v1/{start}..{end}?from={BASE}&to={QUOTE}`
timeframes 1D / 1W. Output BUY / SELL / WAIT.

### Mode 2: Crypto (for Pocket Option) — 12 coins: BTC, ETH, SOL, BNB, ADA, DOGE,
LTC, XRP, LINK, AVAX, MATIC, DOT. Use REAL-TIME 1-minute candles from free public
crypto exchange APIs with **fallback**: try Binance
`https://data-api.binance.vision/api/v3/klines?symbol={SYM}USDT&interval={tf}&limit=150`,
then OKX `https://www.okx.com/api/v5/market/candles?instId={SYM}-USDT&bar={tf}&limit=150`
(OKX `data` array is newest-first — reverse it; 1h bar = `1H`),
then Gate.io `https://api.gateio.ws/api/v4/spot/candlesticks?currency_pair={SYM}_USDT&interval={tf}&limit=150`
(Gate array is oldest-first). Always sort candles by timestamp ascending before analyzing.
Timeframes: 1m, 5m, 15m, 1h. Output UP / DOWN / WAIT.

## UI / FEATURES
- Dark professional trading-dashboard theme (dark blue/black, green/red accents).
- Mode toggle buttons at the top (Forex / Crypto).
- Pair dropdown + timeframe buttons + an "Analyze" button.
- A big signal display (BUY/SELL/UP/DOWN/WAIT) with confidence %.
- A live candlestick chart (HTML5 canvas) drawing the candles with EMA 9 and EMA 21
  overlaid. No external chart library — draw it yourself with canvas.
- A "Strategy verdicts" panel listing each indicator and its result (BULLISH/BEARISH etc.).
- A "How to trade it manually" panel that changes per mode (BUY=open Long in MT5,
  UP=place Call in Pocket Option, etc.).
- A "Signal history" log that records each signal with pair, direction, confidence,
  and timestamp.
- A data-source badge showing whether the feed is LIVE (exchange name) or DAILY (ECB).
- Make it responsive and mobile-friendly.

## TECHNICAL
- Pure HTML/CSS/JS, no frameworks, no external CDN scripts.
- Indicator implementations: EMA (exponential moving average), MACD, RSI, SMA.
  Implement them from scratch — do not rely on any library.
- Fetch real data with `fetch`; handle errors gracefully (show "offline" fallback).
- Keep code well-organized and commented.

## DELIVERABLE
Return the **complete `index.html` file** ready to copy. Also explain in 3 short
bullet points: (1) how the signal is computed, (2) how to deploy it free on GitHub
Pages, (3) the honest disclaimer about why no tool guarantees profits.

---
