const quizData = [
    {
        question: "Which of the following is a type of malware designed to replicate itself and spread to other computers?",
        a: "Virus",
        b: "Firewall",
        c: "Trojan",
        d: "worm",
        correct: "a",
    },
    {
        question: "What does the term phishing refer to in cybersecurity?",
        a: "A type of software that scans for viruses",
        b: "The act of tricking people into revealing sensitive information",
        c: "The process of encrypting data",
        d: "A security measure for prevernting unauthorized access",
        correct: "b",
    },
    {
        question: "Which of the following is the best way to prevent brute force attacks on passwords?",
        a: "Use short and simple passwords",
        b: "Impplement multi-factor authentication (MFA)",
        c: "Use only numeric passwords",
        d: "Disable all firewalls",
        correct: "b",
    },
    {
        question: "What is firewall used for in cybersecurity",
        a: "To scan for malware",
        b: "To prevent unauthorized access to or from a private network",
        c: "To speed up the internet conncection",
        d: "To recover lost files",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})