<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Accessibility-WAI--ARIA-blueviolet?style=for-the-badge&logo=w3c" alt="Accessibility" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

# 🎈 The Popover — Modern Accessible Popover Component

> A lightweight, zero-dependency, fully accessible popover component built with semantic HTML5, modern CSS3, and vanilla JavaScript. Features dynamic placements, light-dismiss, keyboard accessibility, and directional arrow pointers.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Accessibility & Keyboard Shortcuts](#-accessibility--keyboard-shortcuts)
- [Getting Started](#-getting-started)
- [Automated Unit Testing](#-automated-unit-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The Popover is an intuitive UI component designed for contextual tooltips, floating dialogs, card previews, and user action menus. It delivers a fluid user experience with smooth scale-and-fade animations while ensuring complete accessibility conformance.

Unlike heavy third-party UI libraries, The Popover operates with zero dependencies, requiring only standard web browser technologies.

---

## ✨ Key Features

- **Light-Dismiss Interaction** — Automatically closes when the user clicks anywhere outside the popover card.
- **Escape Key Dismissal** — Immediately closes on `Escape` keypress and returns focus to the trigger button.
- **Multi-Directional Placements** — Configurable placement modes (Top and Bottom) with dynamic CSS arrow pointers.
- **WAI-ARIA Accessibility** — Built with `aria-haspopup="dialog"`, dynamic `aria-expanded` toggles, and `role="dialog"`.
- **Toggle State Management** — Click trigger to open or close, with automated focus tracking.
- **Smooth Micro-Animations** — Hardware-accelerated CSS opacity and scale transitions.
- **Zero Dependencies** — No external runtime libraries required; runs natively in all modern web browsers.

---

## 🛠️ Tech Stack

| Technology | Role | Purpose |
|------------|------|---------|
| HTML5 | Markup | Semantic structure, dialog roles, and ARIA attributes |
| CSS3 | Styling & Motion | Responsive card layout, custom arrows, and entrance transitions |
| JavaScript (ES6+) | State Logic | Click-outside listener, keyboard event handling, and DOM manipulation |
| Node.js | Testing | Headless execution of Popover state machine unit tests |

---

## 🏗️ System Architecture

```
                            User Event
               (Click Trigger / Click Outside / ESC)
                               │
                               ▼
                ┌───────────────────────────────┐
                │       Event Dispatcher        │
                │         (script.js)           │
                └──────────────┬────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
Trigger Click             Click Outside             ESC Key
┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│Toggle active │          │Remove active │          │Remove active │
│Update aria   │          │Update aria   │          │Return focus  │
└──────┬───────┘          └──────┬───────┘          └──────┬───────┘
       │                         │                         │
       └─────────────────────────┼─────────────────────────┘
                                 │
                                 ▼
                ┌───────────────────────────────┐
                │          DOM Update           │
                │ .popover.active (Opacity & UI)│
                └───────────────────────────────┘
```

---

## 📁 Project Structure

```
project Number7/
├── index.html                 
├── style.css                 
├── script.js                
├── tests/
│   └── test_popover.js       
├── .gitignore                 
└── README.md                  
```

---

## ⌨️ Accessibility & Keyboard Shortcuts

| Key / Action | Target | Behavior |
|--------------|--------|----------|
| `Click` | `#myBtn` | Toggles popover visibility and updates `aria-expanded` |
| `Click` | `#closeBtn` | Closes the popover and refocuses the trigger button |
| `Click Outside` | Document | Dismisses the popover when clicking anywhere outside |
| `Escape` | Window | Dismisses active popover and returns focus to trigger button |
| `Tab` | Elements | Cycles focus between interactive elements in order |

---

## 🚀 Getting Started

### Option 1: Direct Browser Launch

1. Clone the repository:
   ```bash
   git clone https://github.com/Kumar44developer/The-PopOver.git
   cd The-PopOver
   ```

2. Open `index.html` in your web browser:
   - On Windows: Double-click `index.html` or run `start index.html`
   - On macOS: `open index.html`
   - On Linux: `xdg-open index.html`

### Option 2: Local Static Server

Using Python:
```bash
python -m http.server 8080
```

Using Node.js:
```bash
npx serve .
```

Open `http://localhost:8080` in your web browser.

---

## 🧪 Automated Unit Testing

The repository contains an automated test suite verifying the state controller, placement updates, keyboard dismissals, and boundary click listeners:

```bash
node tests/test_popover.js
```

### Test Output

```
Running Popover Unit Tests...

PASS: Popover initial state is closed
PASS: Popover opens correctly
PASS: Popover closes correctly
PASS: Popover toggle opens when closed
PASS: Popover toggle closes when open
PASS: Escape key closes active popover
PASS: Clicking outside closes active popover
PASS: Clicking inside popover retains open state
PASS: Placement updates to valid value (top)
PASS: Invalid placement is rejected

All 8 Popover unit tests passed successfully!
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/SmoothAnimation`)
3. Commit your changes (`git commit -m "Add smooth scale transition"`)
4. Push to the branch (`git push origin feature/SmoothAnimation`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
