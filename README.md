# Trackly — Focus & Study Tracker

> Track your focus. Build the habit.

Trackly is a minimal, distraction-free study tracker that runs entirely in the browser. Time your sessions with a stopwatch or countdown, take breaks, plan goals for every day of the week, and watch your progress build up in a weekly chart. Past days are archived automatically.

**Live demo:** [furkaneneskum.github.io/trackly](https://furkaneneskum.github.io/trackly/)

![Trackly dashboard](docs/screenshots/dashboard.png)

---

## Features

### Stopwatch and countdown

Switch between a **stopwatch** for open-ended sessions and a **countdown** with a custom duration (hours and minutes). Label a session with what you are studying (for example *Calculus*), then save it to today's log with one click. A short tone plays when a countdown finishes.

<p align="center">
  <img src="docs/screenshots/countdown.png" alt="Countdown mode" width="620">
</p>

### One-tap breaks

Breaks are a single button: **Mola Başlat** (Start Break) starts a break that counts up. The timer turns amber, and the same button becomes **Molayı Bitir** (End Break). Breaks longer than a minute are saved to the log, separately from study time, so they never inflate your totals.

<p align="center">
  <img src="docs/screenshots/break.png" alt="Break in progress" width="620">
</p>

### Weekly goals planner

Plan goals for each day from Monday to Sunday. Every day is a collapsible panel showing its progress (for example *1/3 done*). Today opens automatically. You can add, check off and delete goals inside each day.

### Weekly progress chart

A bar chart (built with Chart.js) shows how many minutes you studied on each day of the current week. Today is highlighted, and a breakdown by day is listed below the chart.

<p align="center">
  <img src="docs/screenshots/weekly-goals.png" alt="Weekly goals planner" height="440">
  &nbsp;&nbsp;
  <img src="docs/screenshots/weekly-chart.png" alt="Weekly progress chart" height="440">
</p>

### Archive library

At midnight, each day is moved into the archive with its sessions, breaks and goals. Every archived day appears as a card with totals for study time, sessions, breaks and goal completion. You can delete a day and undo the deletion from the toast notification.

![Archive library](docs/screenshots/archive.png)

### Focus sounds

A small floating player offers ambient sounds (light rain, heavy rain, fireplace, lo-fi) with a volume slider to help you get into flow.

### Responsive design

Trackly uses a three-column layout on desktop, a stacked two-column layout on tablets and a single column on phones, with no horizontal scrolling.

<p align="center">
  <img src="docs/screenshots/mobile.png" alt="Mobile layout" width="280">
</p>

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 with ARIA roles and labels |
| Styling | Plain CSS (custom properties, Grid and Flexbox, media queries), Inter font |
| Logic | Vanilla JavaScript (ES2020+), no framework and no build step |
| Charts | [Chart.js 4](https://www.chartjs.org/) via CDN |
| Storage | Browser `localStorage` |
| Hosting | GitHub Pages |

## How it works

- **No backend and no account.** All data stays in your browser's `localStorage`, so nothing leaves your device.
- **Survives reloads.** Timer state is saved continuously, so a running stopwatch, countdown or break is restored after a page refresh and keeps accurate time while the tab is in the background.
- **Automatic day rollover.** When the date changes, today's sessions and goals are archived and a fresh day begins.
- **Storage keys:**
  - `studyTrackerData`: today's sessions, the active timer state and the archive
  - `studyTracker_goals_YYYY-MM-DD`: goals for a given date
  - `calismaTakipcisi_settings`: timer mode and countdown duration

> Clearing your browser's site data erases your history. Data is stored per browser and per device.

## Getting started

Trackly is a static site, so any local web server works:

```bash
git clone https://github.com/furkaneneskum/trackly.git
cd trackly
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Project structure

```
├── index.html          # Layout and markup
├── style.css           # Design system and responsive styles
├── script.js           # Timer, breaks, goals, chart, archive and sound player
├── audio/              # Ambient focus sounds
└── docs/screenshots/   # Images used in this README
```

## Note on language

The interface is currently in Turkish. For example, *Kronometre* means Stopwatch, *Geri sayım* means Countdown, *Haftalık Hedefler* means Weekly Goals and *Arşiv Kütüphanesi* means Archive Library.

---

Built by **Furkan Enes Kum**.
