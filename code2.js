const quizData = [
    {
        question: "CSS stands for -",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        a: "padding-left",
        b: "padding",
        c: "padding-right",
        d: "All of the above",
        correct: "b",
    },
    {
        question: " The CSS property used to make the text bold is -",
        a: "font-weight : bold",
        b: "weight: bold",
        c: "font: bold",
        d: "style: bold",
        correct: "a",
    },
    {
        question: " The property in CSS used to change the background color of an element is -",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "none of the above",
        correct: "c",
    },
    {
        question: " The CSS property used to specify the transparency of an element is -",
        a: "opacity",
        b: "filter",
        c: "visibility",
        d: "overlay",
        correct: "a" 

    }
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