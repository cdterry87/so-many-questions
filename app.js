// Define an array of responses here
let responses = ['Yes, Most Definitely!', 'Not Sure, Ask Again Later.', 'Probably Not.', 'Maybe For Five Bucks!', 'Yes, Without A Doubt!', 'No Way!', 'Don\'t Count On It!', 'I Don\'t Think So.', 'Oh Yeah, For Sure!', 'Results Inconclusive!', 'Maybe Later.', 'Yes, But Not For Long.', 'Not A Chance!', 'More Than Likely No.', 'More Than Likely Yes.'];


// - Create an object for the response with the following properties: { question, answer, liked, date }
// - Save to local storage (call)
// - Render list of responses function (call)

// on page load
document.addEventListener("DOMContentLoaded", function(){

  // when clicking the "Send" button
  document.getElementById("sendBtn").addEventListener("click", function() {

    // hide the error message element
    document.getElementById("error-message").style.display = "none";

    // call the validate form function
    let validatedForm = validateForm();

    // switch on the returned value from the validate form function
    switch (validatedForm) {

      case "A":

        // grab a random answer from the array
        // populate the answer in the question container
        // generate a timestamp
        // write question, answer, timestamp to local storage
        // populate the previous responses container

      break;

      case "B":

        // form is either blank, doesn't have enough words, or doesn't have a question mark
        document.getElementById("error-message").style.display = "block";

      break;

    }// end of switch (validatedForm) {

  });// end of click event for the "Send" button

  function validateForm() {

    // This function will return one of two values:
    // A = passed validations
    // B = didn't pass validations

    // get the value of the input field
    let questionText = document.getElementById("userQuestion").value;

    // check to see if it is blank
    if (questionText == "") {
      return "B";
    }

    // set the number of words
    let wordCount = questionText.trim().split(/\s+/).length;

    // check the number of words
    if (wordCount < 3) {
      return "B";
    }

    // check for a question mark
    let lastChar = questionText.substr(-1);

    if (lastChar != "?") {
      return "B";
    }

    // this only gets hit if none of the above checks get hit
    return "A";

  }// end of function validateForm()

});// end of on page load


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
