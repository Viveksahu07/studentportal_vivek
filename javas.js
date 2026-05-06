// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Reset quiz if switching from quiz
    if (currentQuestion > 1) {
        resetQuiz();
    }
}

// Profile management
function saveProfile() {
    const fullName = document.getElementById('fullName').value;
    const message = document.createElement('div');
    message.style.cssText = 'background: #4ade80; color: white; padding: 1rem; border-radius: 10px; margin-top: 1rem; text-align: center;';
    message.textContent = `✅ Profile saved for ${fullName}!`;
    
    const form = document.getElementById('profileForm');
    form.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Quiz functionality
let currentQuestion = 1;
let score = 0;
const totalQuestions = 5;
const correctAnswers = {
    1: '42',
    2: '64',
    3: '9',
    4: '180',
    5: '3.14'
};

const questions = [
    { q: "What is 15 + 27?", options: ["42", "40", "44", "38"] },
    { q: "What is 8 × 8?", options: ["64", "72", "56", "68"] },
    { q: "What is √81?", options: ["9", "8", "10", "7"] },
    { q: "What is 15% of 1200?", options: ["180", "150", "200", "120"] },
    { q: "What is the value of π (approx)?", options: ["3.14", "22/7", "3", "3.14159"] }
];

function loadQuestion(qNum) {
    const container = document.getElementById('question1');
    container.innerHTML = `
        <h3>Question ${qNum}/${totalQuestions}</h3>
        <p id="questionText">${questions[qNum-1].q}</p>
        <div class="options">
            ${questions[qNum-1].options.map((opt, index) => 
                `<label><input type="radio" name="q${qNum}" value="${opt}"> ${opt}</label><br>`
            ).join('')}
        </div>
        ${qNum < totalQuestions ? 
            `<button onclick="nextQuestion(${qNum})" class="next-btn">Next →</button>` : 
            `<button onclick="showResults()" class="next-btn">Show Results →</button>`
        }
    `;
}

function nextQuestion(current) {
    // Check answer
    const selected = document.querySelector(`input[name="q${current}"]:checked`);
    if (selected && selected.value === correctAnswers[current]) {
        score++;
    }
    
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
        loadQuestion(currentQuestion);
    }
}

function showResults() {
    // Check final answer
    const selected = document.querySelector(`input[name="q${totalQuestions}"]:checked`);
    if (selected && selected.value === correctAnswers[totalQuestions]) {
        score++;
    }
    
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
}

function resetQuiz() {
    currentQuestion = 1;
    score = 0;
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    loadQuestion(1);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion(1);
    
    // Set active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.style.background = '');
            this.style.background = '#667eea';
            this.style.color = 'white';
        });
    });
});
