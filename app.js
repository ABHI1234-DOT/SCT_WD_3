/**
 * QuizCraft - Premium Interactive Trivia Platform
 * Core Application Logic & State Controller
 */

// ==========================================================================
// QUESTION BANK (NO AI REFERENCE IN LABELS OR QUESTIONS)
// ==========================================================================
const QUESTION_DATABASE = [
    // --- Category: Web Technology (web-dev) ---
    {
        category: "web-dev",
        difficulty: "easy",
        type: "single-select",
        question: "What does HTML stand for?",
        choices: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTransfer Markup Language",
            "HyperText Markdown Language"
        ],
        correct: 0,
        hint: "It defines the semantic structure of web pages.",
        explanation: "HTML stands for HyperText Markup Language. It is the standard markup language used to create the structure of web pages."
    },
    {
        category: "web-dev",
        difficulty: "easy",
        type: "fill-in-the-blank",
        question: "Which CSS property is used to change the text color of an HTML element?",
        correct: "color",
        hint: "It is a short 5-letter word, not 'text-color'.",
        explanation: "In CSS, the 'color' property is used to set the foreground color of text. The 'background-color' property sets the background color."
    },
    {
        category: "web-dev",
        difficulty: "medium",
        type: "single-select",
        question: "Which HTTP status code represents a resource 'Not Found' on a server?",
        choices: [
            "200 OK",
            "403 Forbidden",
            "404 Not Found",
            "500 Internal Server Error"
        ],
        correct: 2,
        hint: "It is one of the most famous error codes on the internet.",
        explanation: "HTTP 404 Not Found indicates that the server cannot find the requested resource. Other common codes are 200 (Success), 403 (Forbidden), and 500 (Server Error)."
    },
    {
        category: "web-dev",
        difficulty: "medium",
        type: "multi-select",
        question: "Which of the following are valid values for the CSS 'display' property?",
        choices: [
            "block",
            "flex",
            "relative",
            "grid",
            "absolute"
        ],
        correct: [0, 1, 3], // block, flex, grid
        hint: "Two of the incorrect options are CSS positioning (position) values.",
        explanation: "The values 'block', 'flex', and 'grid' specify the display behavior of an element. 'relative' and 'absolute' are values for the 'position' property."
    },
    {
        category: "web-dev",
        difficulty: "medium",
        type: "fill-in-the-blank",
        question: "What is the name of the built-in JavaScript method used to parse a JSON string into an object?",
        correct: "json.parse",
        hint: "It belongs to the global JSON object and starts with 'P'.",
        explanation: "JSON.parse() is a standard method that deserializes a JSON string into a JavaScript value or object. JSON.stringify() goes the opposite way."
    },
    {
        category: "web-dev",
        difficulty: "hard",
        type: "single-select",
        question: "How does the 'defer' attribute behave when loading a script tag?",
        choices: [
            "It loads the script asynchronously and executes it immediately when fetched.",
            "It blocks HTML parsing until the script is fully downloaded and run.",
            "It downloads the script in parallel and executes it only after the HTML document is fully parsed.",
            "It runs the script before any styles or DOM nodes are compiled."
        ],
        correct: 2,
        hint: "It maintains document order and waits for the DOM to be ready.",
        explanation: "The 'defer' attribute instructs the browser to download the script in parallel with HTML parsing, but delays execution until the HTML parsing is complete. It also guarantees order of execution."
    },
    {
        category: "web-dev",
        difficulty: "hard",
        type: "multi-select",
        question: "Which of the following are primitive (immutable) data types in JavaScript?",
        choices: [
            "Symbol",
            "BigInt",
            "Array",
            "Undefined",
            "Object"
        ],
        correct: [0, 1, 3], // Symbol, BigInt, Undefined
        hint: "Arrays and Objects are composite, mutable references.",
        explanation: "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Objects and Arrays are mutable reference types."
    },

    // --- Category: General Science (science) ---
    {
        category: "science",
        difficulty: "easy",
        type: "single-select",
        question: "What is the chemical symbol for gold?",
        choices: [
            "Ag",
            "Fe",
            "Au",
            "Gd"
        ],
        correct: 2,
        hint: "It originates from the Latin word 'Aurum', meaning shining dawn.",
        explanation: "The chemical symbol for Gold is Au. Ag represents silver, Fe represents iron, and Gd is gadolinium."
    },
    {
        category: "science",
        difficulty: "easy",
        type: "fill-in-the-blank",
        question: "What is the name of the pigment that gives plants their green color and absorbs light for photosynthesis?",
        correct: "chlorophyll",
        hint: "It starts with 'chloro' and ends with 'phyll'.",
        explanation: "Chlorophyll is the green pigment located within the chloroplasts of plants, algae, and cyanobacteria. It absorbs light energy to drive photosynthesis."
    },
    {
        category: "science",
        difficulty: "medium",
        type: "single-select",
        question: "Which organ in the human body consumes the highest percentage of the body's energy?",
        choices: [
            "The Heart",
            "The Liver",
            "The Brain",
            "The Kidneys"
        ],
        correct: 2,
        hint: "It contains roughly 86 billion neurons and controls consciousness.",
        explanation: "The brain, representing only about 2% of total body weight, consumes about 20% of the body's resting energy budget."
    },
    {
        category: "science",
        difficulty: "medium",
        type: "multi-select",
        question: "Which of the following are categorized as noble gases in the Periodic Table?",
        choices: [
            "Nitrogen",
            "Neon",
            "Helium",
            "Oxygen",
            "Argon"
        ],
        correct: [1, 2, 4], // Neon, Helium, Argon
        hint: "They belong to Group 18 of the periodic table and are highly unreactive.",
        explanation: "Noble gases reside in Group 18 and include Helium, Neon, Argon, Krypton, Xenon, and Radon. Nitrogen and Oxygen are reactive gases in different groups."
    },
    {
        category: "science",
        difficulty: "medium",
        type: "fill-in-the-blank",
        question: "What chemical element is the primary component of diamond and graphite?",
        correct: "carbon",
        hint: "This element has atomic number 6.",
        explanation: "Both diamond and graphite are allotropes of Carbon. They consist entirely of carbon atoms arranged in different crystal structures."
    },
    {
        category: "science",
        difficulty: "hard",
        type: "single-select",
        question: "What is the primary product of the process called nuclear fusion occurring inside the Sun?",
        choices: [
            "Carbon",
            "Oxygen",
            "Helium",
            "Iron"
        ],
        correct: 2,
        hint: "Hydrogen isotopes fuse together to create this second-lightest element.",
        explanation: "Inside the Sun's core, hydrogen atoms fuse under immense temperature and pressure to form Helium, releasing massive amounts of energy in the process."
    },
    {
        category: "science",
        difficulty: "hard",
        type: "multi-select",
        question: "Which of the following laws are formulated by Isaac Newton?",
        choices: [
            "Law of Inertia",
            "Law of Universal Gravitation",
            "Law of Conservation of Energy",
            "Law of Action and Reaction",
            "Law of General Relativity"
        ],
        correct: [0, 1, 3], // Inertia, Gravitation, Action/Reaction
        hint: "Energy conservation is thermodynamic; Relativity was formulated by Albert Einstein.",
        explanation: "Newton's laws include the three laws of motion (Inertia, F=ma, Action/Reaction) and the Law of Universal Gravitation. Einstein discovered relativity."
    },

    // --- Category: Space & Cosmos (space) ---
    {
        category: "space",
        difficulty: "easy",
        type: "single-select",
        question: "Which planet in our solar system is famous for its prominent, wide ring system?",
        choices: [
            "Mars",
            "Saturn",
            "Neptune",
            "Venus"
        ],
        correct: 1,
        hint: "It is the second-largest planet and has a low average density.",
        explanation: "Saturn is known for its beautiful, extensive rings, which are made up of trillions of ice particles, rocky debris, and dust."
    },
    {
        category: "space",
        difficulty: "easy",
        type: "fill-in-the-blank",
        question: "What is the name of the closest planet to the Sun in our Solar System?",
        correct: "mercury",
        hint: "Named after the swift Roman messenger god.",
        explanation: "Mercury is the closest planet to the Sun. It orbits the Sun in just 88 Earth days, making it the fastest planet in our solar system."
    },
    {
        category: "space",
        difficulty: "medium",
        type: "single-select",
        question: "Approximately how long does it take for light emitted from the Sun to travel to Earth?",
        choices: [
            "8 seconds",
            "8 minutes",
            "8 hours",
            "8 days"
        ],
        correct: 1,
        hint: "The distance is about 93 million miles (150 million km). Divide that by the speed of light.",
        explanation: "Sunlight takes about 8 minutes and 20 seconds to reach the Earth, traveling across the astronomical unit of distance at the speed of light."
    },
    {
        category: "space",
        difficulty: "medium",
        type: "multi-select",
        question: "Which of the following planets in our solar system are classified as Gas Giants?",
        choices: [
            "Jupiter",
            "Mars",
            "Saturn",
            "Uranus",
            "Venus"
        ],
        correct: [0, 2], // Jupiter, Saturn (Note: Uranus and Neptune are Ice Giants, but historically grouped. Let's stick to true classic Gas Giants)
        hint: "Uranus/Neptune are technically ice giants, Mars/Venus are terrestrial. Choose the two largest planets.",
        explanation: "Jupiter and Saturn are the Gas Giants, composed mostly of hydrogen and helium. Uranus and Neptune are Ice Giants containing heavier elements."
    },
    {
        category: "space",
        difficulty: "medium",
        type: "fill-in-the-blank",
        question: "What is the name of the largest moon orbiting Saturn, which features a dense nitrogen atmosphere?",
        correct: "titan",
        hint: "Its name shares a root with the ancient giant deities of Greek myth.",
        explanation: "Titan is Saturn's largest moon. It is the only known moon with a dense atmosphere and liquid hydrocarbon lakes on its surface."
    },
    {
        category: "space",
        difficulty: "hard",
        type: "single-select",
        question: "What is the scientific term for the boundary around a black hole beyond which the escape velocity exceeds the speed of light?",
        choices: [
            "The Singularity",
            "The Event Horizon",
            "The Accretion Disk",
            "The Schwarzschild Radius"
        ],
        correct: 1,
        hint: "It represents the 'point of no return' in coordinate space.",
        explanation: "The Event Horizon is the boundary of a black hole where gravitational forces make escape impossible, even for light. The Singularity is the central point of infinite density."
    },
    {
        category: "space",
        difficulty: "hard",
        type: "multi-select",
        question: "Which of the following galaxies belong to our Local Group of galaxies?",
        choices: [
            "Milky Way",
            "Andromeda",
            "Triangulum",
            "Sombrero",
            "Whirlpool"
        ],
        correct: [0, 1, 2], // Milky Way, Andromeda, Triangulum
        hint: "Whirlpool (M51) and Sombrero (M104) are much further away in separate galaxy groups.",
        explanation: "The Local Group consists of over 50 galaxies, with the Milky Way, Andromeda (M31), and Triangulum (M33) being the three main spiral members."
    },

    // --- Category: History & Literature (history) ---
    {
        category: "history",
        difficulty: "easy",
        type: "single-select",
        question: "Who wrote the classic tragedy play 'Romeo and Juliet'?",
        choices: [
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
            "Mark Twain"
        ],
        correct: 1,
        hint: "He is often referred to as the 'Bard of Avon'.",
        explanation: "Romeo and Juliet was written by William Shakespeare, an English playwright and poet who wrote it early in his career."
    },
    {
        category: "history",
        difficulty: "easy",
        type: "fill-in-the-blank",
        question: "In what year did World War II officially end?",
        correct: "1945",
        hint: "It happened in the mid-1940s, shortly after the capture of Berlin.",
        explanation: "World War II officially ended in September 1945, when Japan signed the instrument of surrender, following Germany's surrender in May."
    },
    {
        category: "history",
        difficulty: "medium",
        type: "single-select",
        question: "Which historical document was signed by King John of England in 1215, limiting royal power?",
        choices: [
            "The Declaration of Independence",
            "The Bill of Rights",
            "The Magna Carta",
            "The Constitution"
        ],
        correct: 2,
        hint: "Latin translation is 'Great Charter'.",
        explanation: "The Magna Carta (Great Charter) was signed in 1215 at Runnymede. It established the principle that everyone, including the king, is subject to the law."
    },
    {
        category: "history",
        difficulty: "medium",
        type: "multi-select",
        question: "Which of the following works were written by ancient Greek philosopher Plato?",
        choices: [
            "The Republic",
            "The Odyssey",
            "Symposium",
            "Apology",
            "Poetics"
        ],
        correct: [0, 2, 3], // The Republic, Symposium, Apology
        hint: "Odyssey is an epic poem by Homer; Poetics is by Plato's student, Aristotle.",
        explanation: "Plato wrote dialogs including 'The Republic', 'Symposium', and 'Apology'. 'The Odyssey' is credited to Homer, and 'Poetics' is by Aristotle."
    },
    {
        category: "history",
        difficulty: "medium",
        type: "fill-in-the-blank",
        question: "What was the real name of the author who wrote under the pen name 'Mark Twain'?",
        correct: "samuel clemens",
        hint: "First name is Samuel, last name starts with 'C'.",
        explanation: "Mark Twain was the pen name of Samuel Langhorne Clemens, the American writer famous for Adventures of Tom Sawyer and Huckleberry Finn."
    },
    {
        category: "history",
        difficulty: "hard",
        type: "single-select",
        question: "Which Roman general was assassinated on the Ides of March in 44 BC?",
        choices: [
            "Mark Antony",
            "Augustus Caesar",
            "Julius Caesar",
            "Pompey the Great"
        ],
        correct: 2,
        hint: "Famous for crossing the Rubicon and receiving the warning 'Et tu, Brute?'.",
        explanation: "Julius Caesar was assassinated by a group of rebellious Roman senators on March 15 (the Ides of March), 44 BC."
    },
    {
        category: "history",
        difficulty: "hard",
        type: "multi-select",
        question: "Which of the following civilizations were located in Mesoamerica prior to Spanish colonization?",
        choices: [
            "Maya",
            "Inca",
            "Aztec",
            "Olmec",
            "Roman"
        ],
        correct: [0, 2, 3], // Maya, Aztec, Olmec
        hint: "Inca civilization was based in the Andes mountains of South America, not Mesoamerica.",
        explanation: "The Olmecs, Mayas, and Aztecs were all located in Mesoamerica (present-day Mexico and Central America). The Incas lived in South America (Andean region)."
    }
];

// ==========================================================================
// AUDIO SYNTH CONTROLLER (WEB AUDIO API - NO EXTERNAL ASSETS)
// ==========================================================================
const SoundController = {
    ctx: null,
    enabled: true,

    init() {
        // Initialize AudioContext on first user interaction to comply with browser policies
        if (!this.ctx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.ctx = new AudioContextClass();
            }
        }
    },

    toggle() {
        this.enabled = !this.enabled;
        const onIcon = document.querySelector('.icon-volume-on');
        const offIcon = document.querySelector('.icon-volume-off');
        if (this.enabled) {
            onIcon.classList.remove('hidden');
            offIcon.classList.add('hidden');
            this.init();
        } else {
            onIcon.classList.add('hidden');
            offIcon.classList.remove('hidden');
        }
        localStorage.setItem('quizcraft_sound', this.enabled ? 'true' : 'false');
    },

    createOscillator(type, freq, duration, gainStart, gainEnd = 0.001) {
        if (!this.enabled || !this.ctx) return;
        
        // Resume context if suspended
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        try {
            const osc = this.ctx.createOscillator();
            const gainNode = this.ctx.createGain();
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            
            gainNode.gain.setValueAtTime(gainStart, this.ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(gainEnd, this.ctx.currentTime + duration);
            
            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            // Audio context failed quietly
        }
    },

    playClick() {
        this.createOscillator('triangle', 650, 0.08, 0.15);
    },

    playSuccess() {
        if (!this.enabled || !this.ctx) return;
        this.createOscillator('sine', 523.25, 0.15, 0.2); // C5
        setTimeout(() => {
            this.createOscillator('sine', 659.25, 0.25, 0.2); // E5
        }, 120);
    },

    playFailure() {
        if (!this.enabled || !this.ctx) return;
        this.createOscillator('triangle', 220, 0.2, 0.25); // A3
        setTimeout(() => {
            this.createOscillator('sawtooth', 147.14, 0.35, 0.2); // D3
        }, 150);
    },

    playTick() {
        this.createOscillator('sine', 880, 0.03, 0.05); // High subtle tick
    },

    playWin() {
        if (!this.enabled || !this.ctx) return;
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        notes.forEach((freq, index) => {
            setTimeout(() => {
                this.createOscillator('sine', freq, 0.25, 0.2);
            }, index * 150);
        });
    }
};

// ==========================================================================
// STATE MANAGEMENT & CONTROLLER OBJECT
// ==========================================================================
const QuizApp = {
    // Current Configuration
    config: {
        category: 'web-dev',
        difficulty: 'medium',
        totalQuestions: 10,
        questionTimer: 30, // 30 seconds default
        lifelinesEnabled: true
    },

    // Session State
    state: {
        activeQuestions: [],
        currentIndex: 0,
        score: 0,
        answersLog: [], // items: { questionText, type, userSelection, correctSelection, isCorrect, timeTaken, scoreAwarded, explanation }
        timerInterval: null,
        timeLeft: 30,
        currentQuestionStartTime: 0,
        lifelinesUsed: {
            fiftyFifty: false,
            extraTime: false,
            hint: false
        },
        hintRevealedForCurrent: false,
        selectedOptions: [] // for multi-select tracking
    },

    // High Score Logs
    scoresLog: [],

    init() {
        // Load saved settings
        const soundPref = localStorage.getItem('quizcraft_sound');
        if (soundPref === 'false') {
            SoundController.enabled = false;
            document.querySelector('.icon-volume-on').classList.add('hidden');
            document.querySelector('.icon-volume-off').classList.remove('hidden');
        }

        this.loadScores();
        this.bindEvents();
    },

    loadScores() {
        const rawScores = localStorage.getItem('quizcraft_scores');
        if (rawScores) {
            try {
                this.scoresLog = JSON.parse(rawScores);
            } catch (e) {
                this.scoresLog = [];
            }
        }
    },

    saveScore(scoreRecord) {
        this.scoresLog.unshift(scoreRecord);
        // Cap leaderboard records at 30 items
        if (this.scoresLog.length > 30) {
            this.scoresLog.pop();
        }
        localStorage.setItem('quizcraft_scores', JSON.stringify(this.scoresLog));
    },

    clearScores() {
        this.scoresLog = [];
        localStorage.removeItem('quizcraft_scores');
        this.renderLeaderboard();
    },

    bindEvents() {
        // Header Toggles
        document.getElementById('audio-toggle-btn').addEventListener('click', () => {
            SoundController.toggle();
        });

        // Modals opening
        document.getElementById('stats-modal-btn').addEventListener('click', () => {
            SoundController.playClick();
            this.renderLeaderboard();
            this.toggleModal('stats-modal', true);
        });
        document.getElementById('help-modal-btn').addEventListener('click', () => {
            SoundController.playClick();
            this.toggleModal('help-modal', true);
        });

        // Modals closing
        document.getElementById('stats-modal-close').addEventListener('click', () => {
            SoundController.playClick();
            this.toggleModal('stats-modal', false);
        });
        document.getElementById('help-modal-close').addEventListener('click', () => {
            SoundController.playClick();
            this.toggleModal('help-modal', false);
        });
        
        // Close modals on clicking overlay
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    SoundController.playClick();
                    this.toggleModal(overlay.id, false);
                }
            });
        });

        // Category selections
        document.querySelectorAll('#category-selector-grid .category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                SoundController.playClick();
                document.querySelectorAll('#category-selector-grid .category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.config.category = btn.getAttribute('data-category');
            });
        });

        // Standard select selectors
        document.getElementById('difficulty-select').addEventListener('change', (e) => {
            this.config.difficulty = e.target.value;
        });
        document.getElementById('question-count-select').addEventListener('change', (e) => {
            this.config.totalQuestions = parseInt(e.target.value);
        });
        document.getElementById('timer-select').addEventListener('change', (e) => {
            this.config.questionTimer = parseInt(e.target.value);
        });

        // Start button triggering
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            SoundController.init();
            SoundController.playClick();
            this.startQuiz();
        });

        // Submission panel action
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.submitActiveQuestion();
        });

        // Lifelines listeners
        document.getElementById('lifeline-50-50').addEventListener('click', () => {
            this.triggerFiftyFifty();
        });
        document.getElementById('lifeline-time').addEventListener('click', () => {
            this.triggerExtraTime();
        });
        document.getElementById('lifeline-hint').addEventListener('click', () => {
            this.triggerHint();
        });

        // Feedback overlay continue
        document.getElementById('feedback-continue-btn').addEventListener('click', () => {
            SoundController.playClick();
            this.hideFeedbackAndContinue();
        });

        // Results screen actions
        document.getElementById('retry-quiz-btn').addEventListener('click', () => {
            SoundController.playClick();
            this.switchScreen('start-screen');
        });
        document.getElementById('direct-replay-btn').addEventListener('click', () => {
            SoundController.playClick();
            this.startQuiz();
        });

        // Leaderboard clear button
        document.getElementById('clear-scores-btn').addEventListener('click', () => {
            SoundController.playClick();
            this.clearScores();
        });

        // Keyboard navigation bindings
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });
    },

    toggleModal(id, open) {
        const modal = document.getElementById(id);
        if (open) {
            modal.classList.remove('hidden');
        } else {
            modal.classList.add('hidden');
        }
    },

    switchScreen(screenId) {
        document.querySelectorAll('.screen-section').forEach(sec => {
            sec.classList.remove('active');
        });
        const target = document.getElementById(screenId);
        target.classList.add('active');
    },

    // ==========================================================================
    // LEADERBOARD RENDERER
    // ==========================================================================
    renderLeaderboard() {
        const tbody = document.getElementById('leaderboard-tbody');
        tbody.innerHTML = '';

        if (this.scoresLog.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; opacity: 0.5; padding: 2rem;">No challenges completed yet. Start your first quiz!</td></tr>`;
            return;
        }

        const categoryMap = {
            'web-dev': '💻 Web Tech',
            'science': '🧬 Science',
            'space': '🌌 Space',
            'history': '📜 History'
        };

        this.scoresLog.forEach((row, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${index + 1}</strong></td>
                <td>${categoryMap[row.category] || row.category}</td>
                <td><span style="text-transform: uppercase; font-size: 0.8rem; font-weight: 700;">${row.difficulty}</span></td>
                <td>${row.accuracy}%</td>
                <td class="highlight-text" style="font-weight: 700;">${row.score}</td>
                <td style="font-size: 0.8rem; opacity: 0.6;">${row.date}</td>
            `;
            tbody.appendChild(tr);
        });
    },

    // ==========================================================================
    // QUIZ INITIATION & SETUP LOOP
    // ==========================================================================
    startQuiz() {
        // Filter questions matching settings
        let pool = QUESTION_DATABASE.filter(q => q.category === this.config.category && q.difficulty === this.config.difficulty);
        
        // Fallback: If not enough questions in this difficulty, pull from any difficulty of the same category
        if (pool.length < this.config.totalQuestions) {
            pool = QUESTION_DATABASE.filter(q => q.category === this.config.category);
        }

        // Shuffle question pool
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        
        // Pick requested size
        this.state.activeQuestions = shuffled.slice(0, Math.min(this.config.totalQuestions, shuffled.length));
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.answersLog = [];
        
        // Reset Lifelines usage
        this.state.lifelinesUsed.fiftyFifty = false;
        this.state.lifelinesUsed.extraTime = false;
        this.state.lifelinesUsed.hint = false;

        // Switch to Quiz view
        this.switchScreen('quiz-screen');

        // Render first card
        this.loadQuestionCard();
    },

    loadQuestionCard() {
        const qData = this.state.activeQuestions[this.state.currentIndex];
        
        // Reset hint status for current question
        this.state.hintRevealedForCurrent = false;

        // Reset selected options for checkbox tracking
        this.state.selectedOptions = [];

        // Remove old hint display elements if present
        const oldHint = document.getElementById('active-hint-display');
        if (oldHint) oldHint.remove();

        // Update Text / Details
        const categoryMap = {
            'web-dev': '💻 Web Tech',
            'science': '🧬 Science',
            'space': '🌌 Space',
            'history': '📜 History & Lit'
        };

        document.getElementById('current-category-display').textContent = categoryMap[qData.category] || qData.category;
        document.getElementById('question-progress-text').textContent = `Question ${this.state.currentIndex + 1} of ${this.state.activeQuestions.length}`;
        document.getElementById('current-score-display').textContent = this.state.score;

        // Progress Bar update
        const progressPercentage = ((this.state.currentIndex) / this.state.activeQuestions.length) * 100;
        document.getElementById('quiz-progress-bar').style.width = `${progressPercentage}%`;

        // Badge tag
        const badge = document.getElementById('question-type-badge');
        if (qData.type === 'single-select') {
            badge.textContent = 'Single Select';
            badge.style.color = '#F2AB27';
            badge.style.borderColor = 'rgba(242, 171, 39, 0.2)';
            badge.style.backgroundColor = 'rgba(242, 171, 39, 0.1)';
        } else if (qData.type === 'multi-select') {
            badge.textContent = 'Multi Select';
            badge.style.color = '#F4F9F5';
            badge.style.borderColor = 'rgba(244, 249, 245, 0.2)';
            badge.style.backgroundColor = 'rgba(244, 249, 245, 0.08)';
        } else {
            badge.textContent = 'Fill In The Blank';
            badge.style.color = '#A63242';
            badge.style.borderColor = 'rgba(166, 50, 66, 0.2)';
            badge.style.backgroundColor = 'rgba(166, 50, 66, 0.1)';
        }

        // Question Statement
        document.getElementById('question-text').textContent = qData.question;

        // Render Input Options
        const optContainer = document.getElementById('quiz-options-container');
        optContainer.innerHTML = '';

        const submitPanel = document.getElementById('manual-submit-panel');
        submitPanel.classList.add('hidden');

        if (qData.type === 'single-select') {
            qData.choices.forEach((choice, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-choice-btn';
                btn.setAttribute('data-index', index);
                btn.innerHTML = `
                    <span class="opt-index">${index + 1}</span>
                    <span class="opt-text">${choice}</span>
                `;
                btn.addEventListener('click', () => {
                    this.selectSingleOption(index);
                });
                optContainer.appendChild(btn);
            });
        } else if (qData.type === 'multi-select') {
            submitPanel.classList.remove('hidden');
            qData.choices.forEach((choice, index) => {
                const div = document.createElement('div');
                div.className = 'option-checkbox-row';
                div.setAttribute('data-index', index);
                div.innerHTML = `
                    <div class="custom-checkbox"></div>
                    <span class="opt-text">${choice}</span>
                `;
                div.addEventListener('click', () => {
                    this.toggleMultiOption(index);
                });
                optContainer.appendChild(div);
            });
        } else if (qData.type === 'fill-in-the-blank') {
            submitPanel.classList.remove('hidden');
            
            const wrapper = document.createElement('div');
            wrapper.className = 'blank-input-wrapper';
            
            // Sentence representation replacing blank indicator
            const sentenceDiv = document.createElement('div');
            sentenceDiv.className = 'blank-sentence-display';
            sentenceDiv.innerHTML = qData.question.replace('__________', '<span class="blank-span-fill">_____</span>');
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'styled-text-input';
            input.placeholder = 'Type your answer here...';
            input.id = 'fill-blank-text-input';
            input.autocomplete = 'off';
            input.autofocus = true;
            
            // Allow press Enter inside input to submit
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.submitActiveQuestion();
                }
            });

            wrapper.appendChild(input);
            optContainer.appendChild(wrapper);

            // Force Focus
            setTimeout(() => input.focus(), 50);
        }

        // Configure Lifeline Panel states
        this.updateLifelineButtonUI();

        // Start countdown timer
        this.resetAndStartTimer();
    },

    updateLifelineButtonUI() {
        const btn50 = document.getElementById('lifeline-50-50');
        const btnTime = document.getElementById('lifeline-time');
        const btnHint = document.getElementById('lifeline-hint');

        const qData = this.state.activeQuestions[this.state.currentIndex];

        // 50:50 only works on single select
        btn50.disabled = this.state.lifelinesUsed.fiftyFifty || qData.type !== 'single-select';
        btnTime.disabled = this.state.lifelinesUsed.extraTime || this.config.questionTimer === 0;
        btnHint.disabled = this.state.lifelinesUsed.hint;
    },

    // ==========================================================================
    // TIMER UTILITY LOOP
    // ==========================================================================
    resetAndStartTimer() {
        clearInterval(this.state.timerInterval);
        
        const widget = document.getElementById('timer-widget-box');
        if (this.config.questionTimer === 0) {
            widget.style.display = 'none';
            this.state.timeLeft = 999;
            this.state.currentQuestionStartTime = Date.now();
            return;
        }

        widget.style.display = 'flex';
        this.state.timeLeft = this.config.questionTimer;
        this.state.currentQuestionStartTime = Date.now();
        
        document.getElementById('timer-text').textContent = this.state.timeLeft;
        this.updateTimerSVG(1); // Full offset at start

        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft--;
            
            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timerInterval);
                document.getElementById('timer-text').textContent = 0;
                this.updateTimerSVG(0);
                this.handleTimeout();
            } else {
                document.getElementById('timer-text').textContent = this.state.timeLeft;
                
                // Play warning tick on last 5 seconds
                if (this.state.timeLeft <= 5) {
                    SoundController.playTick();
                    document.getElementById('timer-text').style.color = '#A63242';
                } else {
                    document.getElementById('timer-text').style.color = '';
                }

                const ratio = this.state.timeLeft / this.config.questionTimer;
                this.updateTimerSVG(ratio);
            }
        }, 1000);
    },

    updateTimerSVG(ratio) {
        const circle = document.getElementById('timer-circle-fill');
        const radius = 52;
        const circumference = 2 * Math.PI * radius;
        
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference * (1 - ratio);

        // Transition color to warning red if time is low
        if (ratio < 0.25) {
            circle.style.stroke = '#A63242';
        } else {
            circle.style.stroke = '#F2AB27';
        }
    },

    // ==========================================================================
    // INPUT HANDLERS (CLICK & KEYBOARD)
    // ==========================================================================
    selectSingleOption(index) {
        SoundController.playClick();
        
        const btns = document.querySelectorAll('#quiz-options-container .option-choice-btn');
        btns.forEach(b => b.classList.remove('selected'));
        
        const selectedBtn = document.querySelector(`.option-choice-btn[data-index="${index}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        }

        // Automatic submission after short delay for user experience
        setTimeout(() => {
            this.submitActiveQuestion();
        }, 250);
    },

    toggleMultiOption(index) {
        SoundController.playClick();
        
        const row = document.querySelector(`.option-checkbox-row[data-index="${index}"]`);
        if (!row) return;

        if (this.state.selectedOptions.includes(index)) {
            this.state.selectedOptions = this.state.selectedOptions.filter(i => i !== index);
            row.classList.remove('selected');
        } else {
            this.state.selectedOptions.push(index);
            row.classList.add('selected');
        }
    },

    // ==========================================================================
    // TACTICAL LIFELINES IMPLEMENTATION
    // ==========================================================================
    triggerFiftyFifty() {
        if (this.state.lifelinesUsed.fiftyFifty) return;
        
        const qData = this.state.activeQuestions[this.state.currentIndex];
        if (qData.type !== 'single-select') return;

        SoundController.playClick();
        this.state.lifelinesUsed.fiftyFifty = true;

        const correctIdx = qData.correct;
        const totalOptions = qData.choices.length;
        
        // Find all incorrect indexes
        let incorrectIndexes = [];
        for (let i = 0; i < totalOptions; i++) {
            if (i !== correctIdx) {
                incorrectIndexes.push(i);
            }
        }

        // Shuffle incorrect indexes and pick 2 to hide
        incorrectIndexes.sort(() => 0.5 - Math.random());
        const toHide = incorrectIndexes.slice(0, 2);

        // Apply disabled / hidden state in DOM
        toHide.forEach(idx => {
            const btn = document.querySelector(`.option-choice-btn[data-index="${idx}"]`);
            if (btn) {
                btn.classList.add('disabled');
                btn.style.opacity = '0.15';
                btn.style.cursor = 'not-allowed';
                btn.style.borderStyle = 'dashed';
                btn.style.transform = 'scale(0.95)';
            }
        });

        this.updateLifelineButtonUI();
    },

    triggerExtraTime() {
        if (this.state.lifelinesUsed.extraTime || this.config.questionTimer === 0) return;

        SoundController.playClick();
        this.state.lifelinesUsed.extraTime = true;
        
        // Add 15 seconds to remaining time
        this.state.timeLeft += 15;
        document.getElementById('timer-text').textContent = this.state.timeLeft;
        document.getElementById('timer-text').style.color = '';
        
        // Recalculate ratios
        const ratio = Math.min(1, this.state.timeLeft / this.config.questionTimer);
        this.updateTimerSVG(ratio);

        this.updateLifelineButtonUI();
    },

    triggerHint() {
        if (this.state.lifelinesUsed.hint) return;

        const qData = this.state.activeQuestions[this.state.currentIndex];
        if (!qData.hint) return;

        SoundController.playClick();
        this.state.lifelinesUsed.hint = true;
        this.state.hintRevealedForCurrent = true;

        // Render Hint Box in Question Card
        const board = document.getElementById('active-question-card');
        
        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint-display-box';
        hintDiv.id = 'active-hint-display';
        hintDiv.innerHTML = `
            <span>💡 <strong>Hint clue:</strong> ${qData.hint} <span style="font-size: 0.75rem; opacity:0.8;">(Maximum points halved)</span></span>
        `;
        
        board.appendChild(hintDiv);
        this.updateLifelineButtonUI();
    },

    // ==========================================================================
    // QUESTION SUBMISSION & EVALUATION
    // ==========================================================================
    submitActiveQuestion() {
        clearInterval(this.state.timerInterval);

        const qData = this.state.activeQuestions[this.state.currentIndex];
        let userSelection = null;
        let isCorrect = false;
        
        const timeTakenMs = Date.now() - this.state.currentQuestionStartTime;
        const timeTakenSec = Math.min(this.config.questionTimer || 999, parseFloat((timeTakenMs / 1000).toFixed(1)));

        if (qData.type === 'single-select') {
            const selectedBtn = document.querySelector('#quiz-options-container .option-choice-btn.selected');
            if (selectedBtn) {
                userSelection = parseInt(selectedBtn.getAttribute('data-index'));
                isCorrect = userSelection === qData.correct;
            } else {
                // No option selected - treat as incorrect / skipped
                userSelection = null;
                isCorrect = false;
            }
        } else if (qData.type === 'multi-select') {
            // Read checkboxes
            userSelection = [...this.state.selectedOptions].sort();
            const correctSorted = [...qData.correct].sort();
            
            isCorrect = JSON.stringify(userSelection) === JSON.stringify(correctSorted);
        } else if (qData.type === 'fill-in-the-blank') {
            const inputField = document.getElementById('fill-blank-text-input');
            if (inputField) {
                userSelection = inputField.value.trim();
                const cleanUser = userSelection.toLowerCase();
                const cleanCorrect = qData.correct.toLowerCase();
                
                isCorrect = cleanUser === cleanCorrect;
            }
        }

        this.processAnswerResult(isCorrect, userSelection, timeTakenSec);
    },

    handleTimeout() {
        clearInterval(this.state.timerInterval);
        this.processAnswerResult(false, "TIMEOUT", this.config.questionTimer);
    },

    processAnswerResult(isCorrect, userSelection, timeTakenSec) {
        const qData = this.state.activeQuestions[this.state.currentIndex];
        
        // Calculate points based on difficulty and speed
        let scoreAwarded = 0;
        if (isCorrect) {
            let basePoints = 100;
            if (qData.difficulty === 'medium') basePoints = 200;
            if (qData.difficulty === 'hard') basePoints = 300;

            if (this.config.questionTimer > 0 && userSelection !== "TIMEOUT") {
                // Speed run bonus: faster responses get higher scores
                const timeRatio = 1 - (timeTakenSec / this.config.questionTimer);
                // Minimum score multiplier floor of 0.4 for correct answers
                const multiplier = 0.4 + (0.6 * timeRatio);
                scoreAwarded = Math.round(basePoints * multiplier);
            } else {
                // Flat points for untimed mode
                scoreAwarded = basePoints;
            }

            // Apply hint penalty if revealed
            if (this.state.hintRevealedForCurrent) {
                scoreAwarded = Math.round(scoreAwarded * 0.5);
            }

            this.state.score += scoreAwarded;
            SoundController.playSuccess();
        } else {
            SoundController.playFailure();
        }

        // Log results
        this.state.answersLog.push({
            questionText: qData.question,
            type: qData.type,
            userSelection: userSelection,
            correctSelection: qData.correct,
            isCorrect: isCorrect,
            timeTaken: timeTakenSec,
            scoreAwarded: scoreAwarded,
            choices: qData.choices || null,
            explanation: qData.explanation
        });

        // Show Feedback Modal Frame overlay
        this.displayFeedbackPanel(isCorrect, qData, userSelection);
    },

    displayFeedbackPanel(isCorrect, qData, userSelection) {
        const overlay = document.getElementById('feedback-overlay');
        const iconBox = document.getElementById('feedback-icon-box');
        const title = document.getElementById('feedback-status-title');
        const subtext = document.getElementById('feedback-subtext');
        const revealBox = document.getElementById('correct-answer-reveal-box');
        const revealText = document.getElementById('correct-answer-text');
        const explanation = document.getElementById('explanation-text');

        // Toggle Icons
        iconBox.innerHTML = '';
        if (userSelection === "TIMEOUT") {
            iconBox.className = 'feedback-status-icon icon-error';
            iconBox.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            `;
            title.textContent = 'Time Expired!';
            subtext.textContent = 'You ran out of time to solve this challenge.';
        } else if (isCorrect) {
            iconBox.className = 'feedback-status-icon icon-success';
            iconBox.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            title.textContent = 'Correct Answer!';
            subtext.textContent = `Awarded +${this.state.answersLog[this.state.answersLog.length - 1].scoreAwarded} points.`;
        } else {
            iconBox.className = 'feedback-status-icon icon-error';
            iconBox.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            `;
            title.textContent = 'Incorrect Submission';
            subtext.textContent = 'Better luck on the next question!';
        }

        // Map correct answer display
        let correctDisplay = '';
        if (qData.type === 'single-select') {
            correctDisplay = qData.choices[qData.correct];
        } else if (qData.type === 'multi-select') {
            correctDisplay = qData.correct.map(idx => qData.choices[idx]).join(', ');
        } else {
            correctDisplay = qData.correct;
        }
        revealText.textContent = correctDisplay;
        
        // Explanation
        explanation.textContent = qData.explanation;

        // Show Overlay
        overlay.classList.remove('hidden');

        // Focus continue button so spacebar / enter advances
        setTimeout(() => {
            document.getElementById('feedback-continue-btn').focus();
        }, 100);
    },

    hideFeedbackAndContinue() {
        document.getElementById('feedback-overlay').classList.add('hidden');
        
        this.state.currentIndex++;
        
        if (this.state.currentIndex < this.state.activeQuestions.length) {
            this.loadQuestionCard();
        } else {
            this.endQuizSession();
        }
    },

    // ==========================================================================
    // END OF SESSION - RESULTS ANALYSIS
    // ==========================================================================
    endQuizSession() {
        this.switchScreen('results-screen');
        SoundController.playWin();

        const totalQ = this.state.activeQuestions.length;
        const correctCount = this.state.answersLog.filter(item => item.isCorrect).length;
        const accuracy = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;

        // Radial Ring Animation
        const radialFill = document.getElementById('score-radial-fill');
        const radius = 70;
        const circumference = 2 * Math.PI * radius;
        radialFill.style.strokeDasharray = circumference;
        
        // Start empty then animate to value
        radialFill.style.strokeDashoffset = circumference;
        setTimeout(() => {
            radialFill.style.strokeDashoffset = circumference * (1 - accuracy / 100);
        }, 150);

        // Scores Display
        document.getElementById('final-percentage-text').textContent = `${accuracy}%`;
        document.getElementById('final-fraction-text').textContent = `${correctCount}/${totalQ}`;

        // Badge Mapping
        const badgeIcon = document.getElementById('badge-icon-display');
        const badgeTitle = document.getElementById('badge-title-display');
        const badgeDesc = document.getElementById('badge-desc-display');

        if (accuracy === 100) {
            badgeIcon.textContent = '👑';
            badgeTitle.textContent = 'Cosmic Grandmaster';
            badgeDesc.textContent = 'Flawless performance. You possess exceptional knowledge!';
        } else if (accuracy >= 80) {
            badgeIcon.textContent = '🎓';
            badgeTitle.textContent = 'Star Scholar';
            badgeDesc.textContent = 'Outstanding competence! Your grasp of the subject is remarkable.';
        } else if (accuracy >= 50) {
            badgeIcon.textContent = '🧭';
            badgeTitle.textContent = 'Curious Explorer';
            badgeDesc.textContent = 'Solid baseline. Keep practicing to reach the ranks of master.';
        } else {
            badgeIcon.textContent = '🛡️';
            badgeTitle.textContent = 'Apprentice Trainee';
            badgeDesc.textContent = 'Practice makes perfect. Review the explanations and retry!';
        }

        // Stats grid elements
        document.getElementById('stats-total-score').textContent = this.state.score;
        document.getElementById('stats-accuracy-lbl').textContent = `${accuracy}%`;
        
        // Calculate average time
        const sumTime = this.state.answersLog.reduce((acc, curr) => acc + curr.timeTaken, 0);
        const avgTime = totalQ > 0 ? (sumTime / totalQ).toFixed(1) : 0;
        document.getElementById('stats-avg-time').textContent = `${avgTime}s`;

        // Calculate lifelines used count
        let countLifelines = 0;
        if (this.state.lifelinesUsed.fiftyFifty) countLifelines++;
        if (this.state.lifelinesUsed.extraTime) countLifelines++;
        if (this.state.lifelinesUsed.hint) countLifelines++;
        document.getElementById('stats-lifelines-used').textContent = countLifelines;

        // Render breakdown panel list
        this.renderQuestionReviewList();

        // Save to Leaderboard Logs
        const now = new Date();
        const dateString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.saveScore({
            category: this.config.category,
            difficulty: this.config.difficulty,
            accuracy: accuracy,
            score: this.state.score,
            date: dateString
        });
    },

    renderQuestionReviewList() {
        const listContainer = document.getElementById('review-questions-list');
        listContainer.innerHTML = '';

        this.state.answersLog.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = `review-item ${item.isCorrect ? 'correct-item' : 'incorrect-item'}`;
            
            // Format options preview
            let userAnsString = '';
            if (item.userSelection === 'TIMEOUT') {
                userAnsString = '<span style="color: var(--clr-red);">⏰ Time Out</span>';
            } else if (item.type === 'single-select') {
                userAnsString = item.userSelection !== null ? item.choices[item.userSelection] : 'Skipped';
            } else if (item.type === 'multi-select') {
                userAnsString = item.userSelection && item.userSelection.length > 0
                    ? item.userSelection.map(idx => item.choices[idx]).join(', ')
                    : 'No selections';
            } else {
                userAnsString = item.userSelection || 'Empty';
            }

            let correctAnsString = '';
            if (item.type === 'single-select') {
                correctAnsString = item.choices[item.correctSelection];
            } else if (item.type === 'multi-select') {
                correctAnsString = item.correctSelection.map(idx => item.choices[idx]).join(', ');
            } else {
                correctAnsString = item.correctSelection;
            }

            div.innerHTML = `
                <div class="review-q-title">Question ${index + 1}: ${item.questionText}</div>
                <div class="review-choices">
                    <div class="review-choice-badge ${item.isCorrect ? 'badge-correct-choice' : 'badge-incorrect-choice'}">
                        <strong>Your answer:</strong> ${userAnsString}
                    </div>
                    ${!item.isCorrect ? `
                    <div class="review-choice-badge badge-correct-choice">
                        <strong>Correct answer:</strong> ${correctAnsString}
                    </div>
                    ` : ''}
                </div>
                <div class="review-exp">
                    <strong>Topic Concept:</strong> ${item.explanation}
                </div>
            `;
            listContainer.appendChild(div);
        });
    },

    // ==========================================================================
    // KEYBOARD BINDS LISTENER & UTILS
    // ==========================================================================
    handleKeyboard(e) {
        // Modal ESC close action
        if (e.key === 'Escape') {
            this.toggleModal('stats-modal', false);
            this.toggleModal('help-modal', false);
            return;
        }

        const isQuizScreen = document.getElementById('quiz-screen').classList.contains('active');
        const feedbackVisible = !document.getElementById('feedback-overlay').classList.contains('hidden');

        if (isQuizScreen) {
            if (feedbackVisible) {
                // If feedback overlay is open, hitting Enter closes it and advances
                if (e.key === 'Enter') {
                    e.preventDefault();
                    SoundController.playClick();
                    this.hideFeedbackAndContinue();
                }
            } else {
                const qData = this.state.activeQuestions[this.state.currentIndex];
                
                // Allow selections for numeric keys on Single Choice
                if (qData.type === 'single-select' && ['1', '2', '3', '4'].includes(e.key)) {
                    const optionIdx = parseInt(e.key) - 1;
                    if (optionIdx < qData.choices.length) {
                        const btn = document.querySelector(`.option-choice-btn[data-index="${optionIdx}"]`);
                        if (btn && !btn.classList.contains('disabled')) {
                            this.selectSingleOption(optionIdx);
                        }
                    }
                }

                // Hitting Enter on Multi Select or Fill in the Blank triggers submission
                if (e.key === 'Enter') {
                    // Check if current focused element is NOT text area or text input, or if it is, allow submission
                    if (qData.type === 'multi-select') {
                        e.preventDefault();
                        this.submitActiveQuestion();
                    }
                }
            }
        }
    }
};

// Start application when DOM loads
window.addEventListener('DOMContentLoaded', () => {
    QuizApp.init();
});
