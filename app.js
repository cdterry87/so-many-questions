
// an array of responses
const answers = ['Yes, Most Definitely!', 'Not Sure, Ask Again Later.', 'Probably Not.', 'Maybe For Five Bucks!', 'Yes, Without A Doubt!', 'No Way!', 'Don\'t Count On It!', 'I Don\'t Think So.', 'Oh Yeah, For Sure!', 'Results Inconclusive!', 'Maybe Later.', 'Yes, But Not For Long.', 'Not A Chance!', 'More Than Likely No.', 'More Than Likely Yes.'];


// on page load
document.addEventListener("DOMContentLoaded", function(){

  // array of responses //
  // this section will eventually do a call to a function that will grab data from local storage and
  // populate this array with that data
  let  responseArray = [];

  // when clicking the "Send" button
  document.getElementById("sendBtn").addEventListener("click", function() {

    // hide the error message element
    document.getElementById("error-message").style.display = "none";

    // call the validateQuestion function
    let validatedQuestion = validateQuestion();

    // if it is a validated question
    if (validatedQuestion) {

      // toggle the different buttons (clear or send)
      let buttonSwitch = setButton();

      // if true, then create the object
      if (buttonSwitch) {

        // grab a random answer from the array
        let newAnswer = getAnswer();

        // generate timestamp
        let timeStamp = moment().format('YYYY-M-D, @ h:mm');

        // format the question (capitalize first letter of each word)
        let formattedQuestion = validatedQuestion.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());

        // create the object to be stored
        let questionCard = new ResponseCard(formattedQuestion, newAnswer, timeStamp);

        // push new object to the array
        responseArray.push(questionCard);

        // write to local storage
        writeToStorage(responseArray);

        // populate the answer in the question div footer
        document.getElementById("questionFooter").innerHTML = `<span style='font-size: 1.3em;'>${newAnswer}</span>`;

      } else {

        // this clears the input, resets the button, and gets the user ready for the next question
        document.getElementById("userQuestion").value = "";
        document.getElementById("questionFooter").innerHTML = "The Answer To Your Question Will Appear Here!";

      }

      // populateResponses();

    } else {

      // input is either blank, doesn't have enough words, or doesn't have a question mark
      document.getElementById("error-message").style.display = "block";

    }

  });// end of click event for the "Send" button

  // function to change the value and color of the send button to a clear button to clear the input field
  function setButton() {

    // grab the button element
    let myButton = document.getElementById("sendBtn");

    // check to see which version of the button is present
    if (myButton.innerHTML === "Send") {

      // change the button to say clear and change background color
      myButton.innerHTML = "Clear";
      myButton.style.backgroundColor  = "#F2CA03";

      return true;

    } else if (myButton.innerHTML === "Clear") {

      // change the button to say send, change the background, and set focus on the input
      myButton.innerHTML = "Send";
      myButton.style.backgroundColor  = "#19E895";
      document.getElementById("userQuestion").focus();

      return false;

    }

  }// end of setButton function

  function writeToStorage(arr) {

    // write to local storage
    localStorage.setItem("newCard", JSON.stringify(arr));

  }


  // function to validate the form
  function validateQuestion() {

    // get the value of the input field
    const questionText = document.getElementById("userQuestion").value;

    // check to see if it is blank
    if (questionText == "") {
      return false;
    }

    // set the number of words
    let wordCount = questionText.trim().split(/\s+/).length;

    // check the number of words
    if (wordCount < 3) {
      return false;
    }

    // grab last char of input field
    let lastChar = questionText.substr(-1);

    // check to see if it is a ?
    if (lastChar != "?") {
      return false;
    }

    // this only gets hit if none of the above checks get hit
    return questionText;

  }// end of function validateQuestion()

});// end of on page load

// object constructor
function ResponseCard(question, answer, date) {

  this.question = question;
  this.answer = answer;
  this.liked = false;
  this.date = date;

}


// Get a random answer
function getAnswer() {

  return answers[Math.floor(Math.random()*answers.length)];

}

// Render answer below the form


// Get responses from localstorage


// Render list of responses


// Toggle like


// Delete response
