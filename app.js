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
// - Validate form
// - Create an object for the response with the following properties: { question, answer, liked, date }
// - Save to local storage (call)
// - Render list of responses function (call)
var form = document.getElementById("questions");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// Validate form input
// - Input cannot be blank, must contain at least 3 words, and must end with a ?
// - Return true or false if submit was valid or not
function validate() {
    const buttonElement = document.getElementById('submit');
    var questionElement = document.getElementById('submitData').value;
    errorMsg = "Please type a valid question below, and don't forget the '?' at the end!"

    buttonElement.addEventListener('click', function(event) {
        if (questionElement.length < 3) {
            // add error for value less that 3.
            console.log('value is less than 3');
            document.getElementById("error").innerHTML = errorMsg;
            return false;
        }else if (questionElement.value == "") {
            // add error for blank data.
            console.log('value is empty');
            document.getElementById("error").innerHTML = errorMsg;
            return false;
        } else if (questionElement.endsWith("?") == false) {
            // add error for questions not ending with question mark.
            console.log('value is not a question.');
            document.getElementById("error").innerHTML = errorMsg;
            return false;
        }
        return true;
    });
}


// Get a random answer
// - Define your random array of answers in this function and return the random answer
function randomAnswer() {
    document.getElementById("userQuestion").innerHTML = document.getElementById("submitData").value;
    document.getElementById("submitData").value = "";
    var randomResponse = responses[Math.floor(Math.random() * responses.length)];
    var response = document.getElementById("answer").innerText = randomResponse;

    return response;
}

// Render answer below the form


// Save responses in localstorage


// Get responses from localstorage


// Render list of responses


// Toggle like


// Delete response


// Format date
// - Format: YYYY-MM-DD @ HH:MM 
// Hint: Use template strings to format result
