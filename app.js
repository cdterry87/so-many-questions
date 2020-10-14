// Define an array of responses here


// Handle the form submission
// - Prevent page reload on submit
// - Validate form
// - Create an object for the response with the following properties: { question, answer, liked, date }
// - Save to local storage (call)
// - Render list of responses function (call)


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
function dateFromat(date) 
{
    let a = new Date(Date.now()).toLocaleString();
    console.log(`Current timestamp: ${a}.`);
}

function dateSort(date)
{
    const sortedDate = date
    sortedDate.sort();
    console.log(sortedDate);
}
// Hint: Use template strings to format result

