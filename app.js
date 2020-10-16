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

    // Clearing the question field
    question.value = '';
}

// Handle the form submission
// - Create an object for the response with the following properties: { question, answer, liked, date }
// - Save to local storage (call)
// - Render list of responses function (call)
window.addEventListener('load', (event) => {
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

        populateAnswer(question);
    });
});


// Validate form input
// - Input cannot be blank, must contain at least 3 words, and must end with a ?
// - Return true or false if submit was valid or not


// Get a random answer
// - Define your random array of answers in this function and return the random answer


// Render answer below the form


// Save responses in localstorage


// Get responses from localstorage


// Render list of responses


// Toggle like


// Delete response


// Format date
// - Format: YYYY-MM-DD @ HH:MM 
// Hint: Use template strings to format result

