# AI Trade Signal Engine

A self-contained, client-side **technical-analysis signal engine** with a
Pocket-Option-style trading dashboard. Runs 100% in the browser — no backend,
no build step, no dependencies. One file to deploy.

## Live URL

Hosted on **GitHub Pages** — always up to date with the latest push:

**https://Umerkhan12474746.github.io/my-first-project/**

(Also deployed on Netlify via drag-and-drop if you prefer.)

## What it does

- **Live crypto feed** — BTC, ETH, SOL, BNB, ADA, DOGE, LTC, XRP, LINK, AVAX,
  MATIC, DOT pull **real prices** from Binance's free public API (tries
  `data-api.binance.vision`, `api.binance.com`, then `fapi.binance.com` in order
  so it works even if one is geo-blocked). FX/OTC pairs and any offline moment
  fall back to demo data — a **LIVE / DEMO** badge shows which one is active.
- Generates a real-time **candlestick chart** (canvas) with EMA 9 / EMA 21 and
  Bollinger Bands.
- Computes real indicators on the candle history: **RSI(14), EMA crossover,
  MACD, Bollinger breakout, support/resistance, candlestick patterns**.
- Fires **UP / DOWN / AWAIT** signals with a confidence % and shows the
  per-strategy verdicts that produced them.
- Full dashboard: pair picker (OTC + LIVE), timeframe (3s–15m), risk level,
  market-strength gauge, market scanner, recent-signals feed, expiry countdown.

## Files

- `index.html` — the entire app (HTML + CSS + JS inline).
- `download.html` — a small page to download `index.html` on a phone.
- `netlify.toml` — Netlify static deploy config (no build step).
- `src/`, `public/`, `package.json`, etc. — leftover Next.js scaffold, unused.

## Deploy & keep it always live

**GitHub Pages (recommended — auto-updates on every push):**
1. Push this repo to GitHub.
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → branch
   `arena/01a05460-my-first-project` / `/ (root)` → Save.
3. Done. Every time you edit `index.html` and push, the live site updates itself.

**Netlify (drag & drop):** go to <https://app.netlify.com/drop> and drag the
folder in. To make Netlify rebuild on every push, connect the GitHub repo instead.

## ⚠️ Honest disclaimer

This is an **educational signal engine**. Crypto pairs use real live prices, but
the app does **not** connect to Pocket Option, place trades, or auto-execute
anything. Signals are probability-style suggestions from technical indicators.
**No signal is guaranteed**, and options/binary trading is high risk — you can
lose your deposit. Trade at your own risk. Not financial advice.
