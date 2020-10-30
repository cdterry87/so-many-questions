// an array of responses
const answers = ['Yes, Most Definitely!', 'Not Sure, Ask Again Later.', 'Probably Not.', 'Maybe For Five Bucks!', 'Yes, Without A Doubt!', 'No Way!', 'Don\'t Count On It!', 'I Don\'t Think So.', 'Oh Yeah, For Sure!', 'Results Inconclusive!', 'Maybe Later.', 'Yes, But Not For Long.', 'Not A Chance!', 'More Than Likely No.', 'More Than Likely Yes.'];


// on page load
document.addEventListener("DOMContentLoaded", function(){

  // array of responses
  let  responseArray = retrieveStorage();

  // render the previous Questions
  renderStorage(responseArray);

  // when clicking the "Send" button
  document.getElementById("sendBtn").addEventListener("click", function() {

    // hide the error message element
    document.getElementById("error-message").style.display = "none";

    // call the validateQuestion function
    let validatedQuestion = validateQuestion();

    // if it is a validated question
    if (validatedQuestion) {

      // grab a random answer from the array
      let newAnswer = getAnswer();

      // generate timestamp
      let timeStamp = moment().format('YYYY-M-D, @ h:mm');

      // create the object to be stored
      let questionCard = new ResponseCard(validatedQuestion, newAnswer, timeStamp);

      // push new object to the array
      responseArray.push(questionCard);

      // write to local storage
      writeToStorage(responseArray);

      // populate the answer in the question div footer
      document.getElementById("questionFooter").innerHTML = `<span style='font-size: 1.3em;'>${newAnswer}</span>`;

      // clear the previous responses questions container
      clearResponsesContainer();

      // repopulate the previous responses container with current storage plus new question/response
      renderStorage(retrieveStorage());

    } else {

      // input is either blank, doesn't have enough words, or doesn't have a question mark
      document.getElementById("error-message").style.display = "block";

    }// end of else for if (validatedQuestion) {

  });// end of click event for the "Send" button


  // function to write to local storage
  function writeToStorage(arr) {

    // write to local storage
    localStorage.setItem("questionCard", JSON.stringify(arr));

  }


  // function to validate the question
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


// pull the local storage
function retrieveStorage() {

  let myStorage = localStorage.getItem('questionCard');

  if (myStorage === null) {
    return [];
  }

  return JSON.parse(myStorage);

}


// function to render the responses
function renderStorage(arr) {

  // clear the 'previous responses' div
  clearResponsesContainer();

  let likeClass = "";
  // set the main container for the previous questions
  const questionsContainer = document.getElementById('previous-questions-container');

  // loop through the array of objects
  for (i = 0; i < arr.length; i++) {

    // check the value of the liked propery for the object
    if (arr[i].liked === false) {

      likeClass = "inactive";

    } else {

      likeClass = "active";

    }



    // create the new card markup and render it on the screen.
    // this also passes in the like class for the liked property
    // as to display the card accordingly
    questionsContainer.insertAdjacentHTML("beforeend", createNewCard(arr[i], likeClass));

  }// end of for (i = 0; i < arr.length; i++) {

}// end of renderStorage() function


// function to clear the previous responses container
function clearResponsesContainer() {

  // clear the 'previous responses' div
  document.getElementById('previous-questions-container').innerHTML = "";

}


// function to build the markup for the response
function createNewCard(obj, likeclassValue) {

  return `
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2 class="question-header">
          <label>Question:</label>
          <span class="${likeclassValue}">
            <span class="card-like-active-front">
              &#128077;
              <span class="liked-label">Liked</span>
            </span>
          </span>
        </h2>
        <h3 class="card-question">${obj.question}</h3>
        <br>
        <span class='timestamp'><b>Asked on ${obj.date}</b></span>
      </div>
      <div class="flip-card-back">
        <h2 class="answer-header">
          <label>Answer:</label>
          <span class="${likeclassValue}">
            <span class="card-like-active-back">
              &#128077;<span class="liked-label">liked</span>
            </span>
          </span>
        </h2>
        <h3 class="card-answer">${obj.answer}</h3>
          <input type="button" class="response-btn" id="likeBtn" value="Like"><input type="button" class="response-btn" id="deleteBtn" value="Delete">
      </div>
    </div>
  </div>
  `;

}// end of createNewCard(obj, likeclassValue) function


// when clicking the "Clear" button
document.getElementById("clearBtn").addEventListener("click", function() {

  // this clears the input, hides the error message if visible,
  // resets the footer, and sets the focus back on the question field
  document.getElementById("userQuestion").value = "";
  document.getElementById("questionFooter").innerHTML = "The Answer To Your Question Will Appear Here!";
  document.getElementById("error-message").style.display = "none";
  document.getElementById('userQuestion').focus();

});





// Render answer below the form

// Create a new paragraph element, and append it to the end of the document body
// let p = document.createElement("p");
// document.body.appendChild(p);


// Get responses from localstorage


// Render list of responses


// Toggle like


// Delete response
