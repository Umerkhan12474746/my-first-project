# AI Live Crypto Signal Bot

A self-contained, **fully live** crypto signal bot that runs 100% in the browser —
no backend, no build step, no dependencies. One file to deploy.

## Live URL (GitHub Pages)

**https://Umerkhan12474746.github.io/my-first-project/**

## What it does

- **Real live crypto prices** pulled from free public exchange APIs in your
  browser. It tries **Binance** → **OKX** → **Gate.io** in order and picks the
  first that works, so it stays live even if one exchange is geo-blocked or down.
- 20 live coins: BTC, ETH, SOL, BNB, ADA, DOGE, LTC, XRP, LINK, AVAX, MATIC,
  DOT, TRX, TON, SHIB, UNI, ATOM, NEAR, AAVE, ARB.
- Real-time **candlestick chart** (canvas) with EMA 9 / EMA 21 and Bollinger Bands.
- Real technical analysis on the live candles: **RSI(14), EMA crossover, MACD,
  Bollinger breakout, support/resistance, candlestick patterns**.
- Fires **UP / DOWN / AWAIT** signals with a confidence % and per-strategy verdicts.
- Pair list shows **real % change** per coin. Data source badge shows the live
  exchange (Binance/OKX/Gate) — or DEMO only if your device is fully offline.
- Timeframes 3s–15m, risk level, market-strength gauge, market scanner,
  recent-signals feed, expiry countdown.

## Files
- `index.html` — the entire app (HTML + CSS + JS inline).
- `download.html` — download `index.html` on a phone.
- `netlify.toml` — Netlify static deploy config (no build step).

## Deploy & keep it always live
**GitHub Pages (auto-updates on every push):** repo → Settings → Pages →
Source "Deploy from a branch" → branch `arena/01a05460-my-first-project` → `/ (root)`
→ Save. Each push goes live automatically.

**Netlify drag & drop:** `app.netlify.com/drop` → upload the folder.

## ⚠️ Honest disclaimer
Educational signal engine only. It does **not** connect to Pocket Option, place
trades, or auto-execute anything. Signals are probability-style suggestions from
technical indicators on real live crypto data. **No signal is guaranteed** — crypto
& options trading is high risk and you can lose your deposit. Trade at your own
risk. Not financial advice.
