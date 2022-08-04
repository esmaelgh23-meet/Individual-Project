const quizData = [
    {
        question: "who is the football best player in the history?",
        a: "Ronaldo",
        b: "CR7",
        c: "Maradona",
        d: "Messi",
        correct: "d",
    },

    {
        question: "2+2=?",
        a: "4",
        b: "44",
        c: "22",
        d: "3",
        correct: "a",
    },

    {
        question: "Which former country defiend herself as an atheist state?",
        a: "USSR",
        b: "USA",
        c: "Czechoslovakia",
        d: "Nazi Germany",
        correct: "a",
    },

    {
        question: "who came first the chicken or the egg?",
        a: "chicken",
        b: "egg",
        c: "IDK",
        d: "none of the above",
        correct: "c",
    },

    {
        question: "What is the best place in the world to see rainbows?",
        a: "North Pole",
        b: "Australia",
        c: "Hawaii",
        d: "none of the above",
        correct: "c",
    },

    {
        question: "You have ten plants, but you forgot to water them so all but three die. How many plants do you have left??",
        a: "7",
        b: "10",
        c: "0",
        d: "none of the above",
        correct: "a",
    },

    {
        question: "Science is...",
        a: "Hard",
        b: "Easy",
        c: "Fun",
        d: "a word",
        correct: "d",
    },

    {
        question: "Which weighs more, a pound of quarters or a pound of kittens?",
        a: "a pound of quarters",
        b: "a pound of kittens",
        c: "neither",
        d: "IDK",

        correct: "c",
    },

    {
        question: "Who is the son of Noah?",
        a: "Japheth",
        b: "Ḥam ",
        c: "Shem",
        d: "all of the above",
        correct: "d",
    },

    {
        question: "which year was netflix founded",
        a: "1996",
        b: "1995",
        c: "1997",
        d: "2003",
        correct: "c",
    },
];

const quiz= document.getElementById('quiz')
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