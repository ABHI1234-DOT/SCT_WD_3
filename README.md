# QuizCraft - Premium Interactive Trivia Platform

QuizCraft is a high-fidelity, highly interactive vanilla web application featuring a beautiful dark-mode layout, dynamic gameplay mechanics, and rich animations. It is built strictly using raw vanilla technologies (HTML, CSS, JavaScript) and adheres to a specific premium color palette.

---

## 🏆 Key Features

- **Multi-Format Questions**:
  1. *Single Choice*: Classic multiple-choice questions with 4 options.
  2. *Multiple Selection*: Select all answers that apply before submitting.
  3. *Fill in the Blanks*: Enter the correct word or value directly inside sentence blocks.
- **Tactical Lifelines**:
  - `50:50`: Instantly eliminates two incorrect answers (available for Single Choice).
  - `+15s Time`: Adds 15 extra seconds to solve the current question.
  - `Reveal Hint`: Gives a contextual clue (but reduces the maximum potential score for that question by 50%).
- **Web Audio API Synth Engine**: 
  - Synthesizes premium chimes, ticking clocks, success triggers, and error tones dynamically inside the browser. No external media files are required!
- **Dynamic Circular Timer**: 
  - An animated SVG circular progress ring indicating the remaining time. Colors shift dynamically from gold to red as time runs out.
- **End-of-Session Analytics**:
  - SVG radial accuracy gauge showing success percentage.
  - Performance badge system matching your final accuracy level.
  - Metrics detailing average speed, lifelines triggered, and total score.
  - Review panel detailing each question, your answer, correct answer, and explanation.
- **Persistent Leaderboard**: 
  - Stores past attempts, dates, and categories in the browser's `localStorage` for visual high-score logs.
- **Efficiency Keyboard Bindings**: 
  - Key combinations allow swift answering without utilizing the mouse pointer.

---

## 🎨 Color Palette Specifications

This project strictly adheres to the following color tokens:
- **Primary Accent/Red**: `#A63242`
- **Primary Text/Minty White**: `#F4F9F5`
- **Highlight/Gold**: `#F2AB27`
- **Background/Black**: `#000000`
- **Secondary Text/Beige**: `#E2E0D8`
- **Dark Surface/Card Background**: `#0D0D0D`
- **Interaction/Hover Background**: `#161616`

---

## ⌨️ Keyboard Shortcuts

Speed up your gameplay with the following integrated keyboard shortcuts:

| Key | Action |
|---|---|
| `1` - `4` | Select matching option on Single Choice cards |
| `Enter` | Submit checkbox selection / Text input, or advance past the feedback card |
| `Escape` | Close the Help Guide or High Scores modals |

---

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5
- **Style**: Custom responsive CSS3 Grid and Flexbox
- **Logic**: Vanilla ES6+ Javascript
- **Sound**: Native Browser Web Audio API
- **Fonts**: Outfit (headings) & Inter (body) via Google Fonts

---

## 🚀 How to Run Locally

Since this is a client-side vanilla web application, it does not require an installation or build phase. 

### Method 1: Local HTTP Server (Recommended)
Running through an HTTP server ensures correct behavior of all browser APIs (e.g., local storage and window controls).

1. Open your terminal in the project root directory.
2. Launch a simple python server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Method 2: Direct Execution
Simply double-click the `index.html` file in your system's file browser to launch it directly in your default web browser.
