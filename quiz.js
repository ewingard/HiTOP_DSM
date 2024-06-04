// quiz.js
function submitQuiz() {
    const form = document.getElementById('quizForm')
    const resultDiv = document.getElementById('result')
    const formData = new FormData(form)

    let result = 'Your choices are:\n'
    for (let [name, value] of formData.entries()) {
        result += `${name}: ${value}\n`
    }

    resultDiv.textContent = result
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => generateQuiz(data))
        .catch(error => console.error('Error fetching questions:', error))
})

function generateQuiz(questions) {
    const form = document.getElementById('quizForm')

    questions.forEach(question => {
        const questionDiv = document.createElement('div')
        const questionTitle = document.createElement('h2')
        questionTitle.textContent = question.question
        questionDiv.appendChild(questionTitle)

        question.options.forEach(option => {
            const label = document.createElement('label')
            const input = document.createElement('input')
            input.type = 'radio'
            input.name = question.name
            input.value = option
            label.appendChild(input)
            label.appendChild(document.createTextNode(option))
            questionDiv.appendChild(label)
            questionDiv.appendChild(document.createElement('br'))
        })

        form.insertBefore(questionDiv, form.querySelector('button'))
    })
}

function submitQuiz() {
    const form = document.getElementById('quizForm')
    const resultDiv = document.getElementById('result')
    const formData = new FormData(form)

    let result = 'Your choices are:\n'
    for (let [name, value] of formData.entries()) {
        result += `${name}: ${value}\n`
    }

    resultDiv.textContent = result
}
