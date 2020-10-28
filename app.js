// Possible Answers
const answers = [
    'Yes, absolutely!',
    'Most definitely not!',
    'It is unlikely.',
    'It seems likely.',
    'Not sure.',
    'Try again later.'
];

// Error Handler
const populateError = (message) => {
    let errorOutput = document.getElementById('errorOutput');
    errorOutput.innerText = message;
};

// Answer Handler
const populateAnswer = (question) => {
    // Getting Random Answer
    let answer = answers[Math.floor(Math.random() * answers.length)];

    // Injecting text content into the DOM
    document.getElementById('questionResponse').innerText = question.value;
    document.getElementById('answerResponse').innerText = answer;

    return answer;
};

// Adding to Local Storage Handler
const storeUserData = (question, answer) => {
    let responses = getUserData();

    responses.push({
        question: question,
        answer: answer,
        liked: false,
        date: Date.now()
    });

    localStorage.setItem('userData', JSON.stringify(responses));
};

// Getting from Local Storage Handler
const getUserData = () => {
    let responses = localStorage.getItem('userData');

    if (responses === null) {
        return [];
    }

    return JSON.parse(responses);
};

const renderPreviousQuestions = () => {
    let prevRespDiv = document.getElementById('previousResponses');
    let responses = getUserData();

    prevRespDiv.innerHTML = '';

    if (responses.length == 0) {
        prevRespDiv.innerText = 'Your previous responses will appear here!';
        return;
    }

    let previousResponses = document.createElement('div');
    previousResponses.classList.add('columns', 'is-multiline');

    let renderedResponses = '';
    for(i = 0; i < responses.length; i++) {
        previousResponses.insertAdjacentHTML('beforeend', createQuestionCard(responses[i]));
    }

    prevRespDiv.appendChild(previousResponses);
};

const createQuestionCard = (data) => {
    return `
    <div class="column is-one-third">
        <div class="card">
            <div class="card-content">
            <p>${data.question}</p>
            <p class="is-size-3">${data.answer}</p>
            </div>
            <footer class="card-footer">
            <p class="card-footer-item">
                <button class="button has-text-info is-fullwidth">
                    Like
                </button>
            </p>
            <p class="card-footer-item">
                <button class="button has-text-danger is-fullwidth">
                    Delete
                </button>
            </p>
            </footer>
        </div>
    </div>
    `;
};

// Initial App Setup
window.addEventListener('load', (event) => {
    renderPreviousQuestions();

    document.getElementById('questionForm').addEventListener('submit', (event) => {
        event.preventDefault();

        // Clearing any previous error output
        document.getElementById('errorOutput').innerText = '';

        // Grabbing Inital Input Value
        let question = document.getElementById('question');

        // Validating against blank questions
        if (question.value.trim() == '') {
            populateError('No question was entered.');
            return;
        }

        // Getting a mostly santized list of words
        let words = question.value.trim().split(' ').filter((el) => {
            return el != '';
        });

        // Validating against short questions
        if (words.length < 3) {
            populateError('You must have at least 3 words in your question.');
            return;
        }

        // Getting Last Character of the typed question
        let lastCharacter = question.value.trim().slice(-1);

        // Validating that the last character is a question mark
        if (lastCharacter != '?') {
            populateError('Your question must end with a question mark.');
            return;
        }

        let answer = populateAnswer(question);
        storeUserData(question.value, answer);

        // Clearing the question field
        question.value = '';

        // Rendering new element
        renderPreviousQuestions();
    });
});


// Toggle like


// Delete response


// Format date
// - Format: YYYY-MM-DD @ HH:MM 
// Hint: Use template strings to format result

