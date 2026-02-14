// === Game State ===
let currentQuestion = 0;
let score = 0;
let totalQuestions = 10;
let selectedWords = [];
let results = [];
let currentWordData = null;
let isAnswered = false;
let firstAttempt = true;

// === DOM Elements ===
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const summaryScreen = document.getElementById('summary-screen');
const wordImage = document.getElementById('word-image');
const imageContainer = document.getElementById('image-container');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackContent = document.getElementById('feedback-content');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const soundBtn = document.getElementById('sound-btn');

// === Initialize Speed Lines ===
function createSpeedLines() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'speed-line';
        line.style.top = Math.random() * 100 + '%';
        line.style.width = (80 + Math.random() * 200) + 'px';
        line.style.animationDelay = Math.random() * 3 + 's';
        line.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        container.appendChild(line);
    }
}

// === Speech (Web Speech API — uses native Google TTS on Android) ===
let hebrewVoice = null;

function loadHebrewVoice() {
    const voices = speechSynthesis.getVoices();
    // Prefer Google Hebrew voice on Android
    hebrewVoice = voices.find(v => v.lang.startsWith('he') && v.name.includes('Google'))
        || voices.find(v => v.lang.startsWith('he'))
        || null;
}

speechSynthesis.addEventListener('voiceschanged', loadHebrewVoice);
loadHebrewVoice();

function stripNikud(text) {
    return text.replace(/[\u0591-\u05C7]/g, '');
}

function speak(text, onEnd) {
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'he-IL';
    utter.rate = 0.85;
    if (hebrewVoice) utter.voice = hebrewVoice;

    soundBtn.classList.add('speaking');
    utter.onend = () => {
        soundBtn.classList.remove('speaking');
        if (onEnd) onEnd();
    };
    utter.onerror = () => {
        soundBtn.classList.remove('speaking');
        if (onEnd) onEnd();
    };
    speechSynthesis.speak(utter);
}

function speakCurrentWord() {
    if (!currentWordData) return;
    const text = currentWordData.speech || stripNikud(currentWordData.word);
    speak(text);
}

function preloadWordAudio() {
    // No preloading needed for Web Speech API
}

// === Screen Management ===
function showScreen(screen) {
    [startScreen, gameScreen, summaryScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// === Shuffle Array ===
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// === Start Game ===
function startGame() {
    currentQuestion = 0;
    score = 0;
    results = [];
    isAnswered = false;

    // Select random words for this round
    const shuffled = shuffle(WORD_BANK);
    selectedWords = shuffled.slice(0, totalQuestions);

    // Filter out any word where the correct word appears in distractors (data integrity)
    selectedWords = selectedWords.filter(w => {
        const validDistractors = w.distractors.filter(d => d !== w.word);
        if (validDistractors.length < 3) return false;
        w.distractors = validDistractors.slice(0, 3);
        return true;
    });

    // If we filtered too many, fill from remaining
    if (selectedWords.length < totalQuestions) {
        const remaining = shuffled.slice(totalQuestions).filter(w => {
            const validDistractors = w.distractors.filter(d => d !== w.word);
            if (validDistractors.length < 3) return false;
            w.distractors = validDistractors.slice(0, 3);
            return true;
        });
        selectedWords = selectedWords.concat(remaining).slice(0, totalQuestions);
    }

    totalQuestions = selectedWords.length;
    updateUI();
    showScreen(gameScreen);
    loadQuestion();
}

// === Update UI ===
function updateUI() {
    progressBar.style.width = ((currentQuestion + 1) / totalQuestions * 100) + '%';
    questionCounter.textContent = `${currentQuestion + 1} / ${totalQuestions}`;
    scoreDisplay.textContent = score;
}

// === Load Question ===
function loadQuestion() {
    if (currentQuestion >= totalQuestions) {
        showSummary();
        return;
    }

    isAnswered = false;
    firstAttempt = true;
    currentWordData = selectedWords[currentQuestion];
    feedbackContainer.classList.add('hidden');
    feedbackContainer.className = 'feedback-container hidden';

    // Set image
    wordImage.src = currentWordData.image;
    wordImage.alt = currentWordData.word;

    // Fallback: show emoji if image fails to load
    wordImage.onerror = () => {
        const emoji = currentWordData.emoji || '🖼️';
        wordImage.onerror = null;
        wordImage.src = 'data:image/svg+xml,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">' +
            '<rect width="400" height="400" rx="20" fill="#122040"/>' +
            '<text x="200" y="210" text-anchor="middle" dominant-baseline="central" ' +
            'font-size="180">' + emoji + '</text></svg>'
        );
    };

    // Create options
    const allOptions = shuffle([currentWordData.word, ...currentWordData.distractors]);
    optionsContainer.innerHTML = '';

    allOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => handleAnswer(btn, option));
        optionsContainer.appendChild(btn);
    });

    updateUI();

    // Speak the word after a short delay (let image load)
    setTimeout(() => {
        speakCurrentWord();
    }, 600);

    // Preload next question's audio
    if (currentQuestion + 1 < totalQuestions) {
        preloadWordAudio(selectedWords[currentQuestion + 1]);
    }
}

// === Handle Answer ===
function handleAnswer(btn, selectedOption) {
    if (isAnswered) return;

    const isCorrect = selectedOption === currentWordData.word;

    if (isCorrect) {
        isAnswered = true;
        btn.classList.add('correct');

        // Disable all buttons
        document.querySelectorAll('.option-btn').forEach(b => b.classList.add('disabled'));

        // Show feedback
        showFeedback(true);

        // Only count score if answered correctly on first attempt
        if (firstAttempt) {
            score++;
            scoreDisplay.textContent = score;
            spawnRingCollect(btn);
        }

        // Record result
        results.push({ word: currentWordData.word, correct: firstAttempt });

        // Speak congratulation
        const congrats = ['!כל הכבוד', '!מעולה', '!יופי', '!נכון', '!אלוף'];
        const msg = congrats[Math.floor(Math.random() * congrats.length)];
        setTimeout(() => speak(msg), 300);

        // Next question after delay
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
        }, 2200);
    } else {
        btn.classList.add('wrong');
        firstAttempt = false;

        // Show feedback
        showFeedback(false);

        // Speak "try again"
        speak('נסה שוב');

        // Keep wrong button disabled after animation
        setTimeout(() => {
            btn.classList.remove('wrong');
            btn.classList.add('disabled');
        }, 600);
    }
}

// === Show Feedback ===
function showFeedback(isCorrect) {
    feedbackContainer.classList.remove('hidden', 'feedback-correct', 'feedback-wrong');

    if (isCorrect) {
        feedbackContainer.classList.add('feedback-correct');
        feedbackContent.innerHTML = `<div class="feedback-text">🌟 !כל הכבוד 🌟</div>`;
    } else {
        feedbackContainer.classList.add('feedback-wrong');
        feedbackContent.innerHTML = `<div class="feedback-text">!נסה שוב 🔄</div>`;
    }
}

// === Ring Collect Animation ===
function spawnRingCollect(fromElement) {
    const rect = fromElement.getBoundingClientRect();
    const ring = document.createElement('div');
    ring.className = 'ring-collect';
    ring.textContent = '💍';
    ring.style.left = (rect.left + rect.width / 2 - 16) + 'px';
    ring.style.top = (rect.top + rect.height / 2 - 16) + 'px';
    document.body.appendChild(ring);

    setTimeout(() => ring.remove(), 1000);
}

// === Show Summary ===
function showSummary() {
    showScreen(summaryScreen);

    const percentage = Math.round((score / totalQuestions) * 100);
    const summaryTitle = document.getElementById('summary-title');
    const summaryScore = document.getElementById('summary-score');
    const summaryRings = document.getElementById('summary-rings');
    const summaryMessage = document.getElementById('summary-message');
    const summaryDetails = document.getElementById('summary-details');

    // Title & score
    summaryScore.textContent = `${score} / ${totalQuestions}`;

    // Rings display
    summaryRings.innerHTML = '';
    for (let i = 0; i < totalQuestions; i++) {
        const ring = document.createElement('span');
        ring.className = 'summary-ring';
        ring.textContent = '💍';
        ring.classList.add(i < score ? 'earned' : 'missed');
        ring.style.animationDelay = (i * 0.1) + 's';
        summaryRings.appendChild(ring);
    }

    // Message based on score
    if (percentage === 100) {
        summaryTitle.textContent = '!מושלם! אתה סוניק אמיתי';
        summaryMessage.textContent = '!ענית נכון על כל השאלות! אתה אלוף קריאה';
        spawnConfetti();
    } else if (percentage >= 80) {
        summaryTitle.textContent = '!כל הכבוד';
        summaryMessage.textContent = '!עבודה מצוינת! כמעט מושלם';
        spawnConfetti();
    } else if (percentage >= 60) {
        summaryTitle.textContent = '!יופי';
        summaryMessage.textContent = '!טוב מאוד! בוא ננסה שוב ונשתפר';
    } else if (percentage >= 40) {
        summaryTitle.textContent = '!לא רע';
        summaryMessage.textContent = '!בוא נתאמן עוד קצת ונשתפר';
    } else {
        summaryTitle.textContent = '!בוא ננסה שוב';
        summaryMessage.textContent = '!תרגול עושה מושלם! בוא נשחק עוד פעם';
    }

    // Detailed results
    summaryDetails.innerHTML = '';
    results.forEach((r, i) => {
        const item = document.createElement('div');
        item.className = 'summary-item';
        item.innerHTML = `
            <span class="summary-item-word">${r.word}</span>
            <span class="summary-item-result">${r.correct ? '✅' : '❌'}</span>
        `;
        summaryDetails.appendChild(item);
    });

    // Speak summary
    setTimeout(() => {
        if (percentage >= 80) {
            speak('כל הכבוד! היית מעולה!');
        } else if (percentage >= 50) {
            speak('יופי! בוא ננסה שוב');
        } else {
            speak('בוא נתאמן עוד קצת');
        }
    }, 500);
}

// === Confetti ===
function spawnConfetti() {
    const emojis = ['⭐', '🌟', '💍', '✨', '🎉', '💎', '⚡'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
            confetti.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }, i * 80);
    }
}

// === Init ===
createSpeedLines();
