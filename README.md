# AI Trade Signal Engine

A self-contained, client-side **technical-analysis signal generator** with a
Pocket-Option-style trading dashboard. Runs 100% in the browser — no backend,
no build step, no dependencies. One file to deploy.

## What it does

- Generates live candlesticks and a real-time chart (canvas) with EMA 9 / EMA 21
  and Bollinger Bands.
- Computes real indicators on the candle history: **RSI(14), EMA crossover,
  MACD, Bollinger breakout, support/resistance, candlestick patterns**.
- Fires **UP / DOWN / AWAIT** signals with a confidence % and shows the per-strategy
  verdicts that produced them.
- Full dashboard: pair picker (OTC + LIVE), timeframe (3s–15m), risk level,
  market-strength gauge, market scanner, recent-signals feed, expiry countdown.

## Files

- `index.html` — the entire app (HTML + CSS + JS inline).
- `netlify.toml` — tells Netlify to serve it as a static site (no build).
- `src/`, `public/`, `package.json`, etc. — leftover Next.js scaffold, unused.

## Deploy to Netlify (2 ways)

**Drag & drop:** go to <https://app.netlify.com/drop> and drag this folder in.
That's it — it serves `index.html` immediately.

**Git:** push this repo to GitHub, then on Netlify "Add new site → Import an
existing project", pick the repo. The included `netlify.toml` disables the build,
so it just publishes the static site. No env vars needed.

## ⚠️ Honest disclaimer

This is an **educational simulator**. It does **not** connect to Pocket Option,
does **not** place trades, and does **not** auto-execute anything. Signals are
probability-style suggestions from technical indicators run on **simulated**
market data. No signal is guaranteed, and options/binary trading is high risk —
you can lose your deposit. To use real live prices, wire the app to a licensed
market-data/broker API (out of scope here). Not financial advice. Trade at your
own risk.
