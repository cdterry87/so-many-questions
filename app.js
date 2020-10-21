// Define an array of responses here
let responses = [
    'Yes, absolutely!',
    'Most definitely not!', 
    'It is unlikely.',
    'It seems likely.',
    'Not sure. Try again later.',
];

// Handle the form submission
// - Prevent page reload on submit
var form = document.getElementById("questions");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// - Validate form
const submit = document.getElementById("submit");
submit.addEventListener('click', function(event) {
    if ( validate() ) {
        randomAnswer();
    }
    document.forms[0].reset();
});

// - Create an object for the response with the following properties: { question, answer, liked, date }
let questionBlock = {
    question: question,
    answer: response,
    liked: "liked",
    date: Date.now()
};

// - Save to local storage (call)
questions.push(questionBlock);
localStorage.setItem('ListOfQuestions', JSON.stringify(questions) );

// - Render list of responses function (call)


// Validate form input
// - Input cannot be blank, must contain at least 3 words, and must end with a ?
// - Return true or false if submit was valid or not
function validate() 
{
    var question = document.getElementById('submitData').value;
    document.getElementById("error").innerText = "";
    errorMsg = "Please type a valid question below, and don't forget the '?' at the end!"

    if (question == "") {
        // - Add error for blank data.
        document.getElementById("error").innerText = errorMsg;
        return false;
    } else if (question.length < 3) {
        // - Add error for value less that 3.
        document.getElementById("error").innerText = errorMsg;
        return false;
    }else if (question.endsWith("?") == false) {
        // - Add error for questions not ending with question mark.
        document.getElementById("error").innerText = errorMsg;
        return false;
    }

    return true;

}

// Get a random answer
// - Define your random array of answers in this function and return the random answer
let questions = [];
function randomAnswer() 
{
    var question = document.getElementById("submitData").value;
    var randomResponse = responses[Math.floor(Math.random() * responses.length)];
    var response = document.getElementById("answer").innerText = randomResponse;

    // Render answer below the form
    document.getElementById("userQuestion").innerHTML = question;

    return response;
}


// Save responses in localstorage

// Get responses from localstorage

// Render list of responses

// Toggle like

// Delete response

// Format date
// - Format: YYYY-MM-DD @ HH:MM 
// Hint: Use template strings to format result