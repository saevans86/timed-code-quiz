//question strings//

var questions = [     
    {
    
question: "What will the following code return: Boolean(10 > 9)", 
answer: "true", 
options: [ "true", "false" ],
}, 
{   
question: "A Data Structure is a storage format that defines the way data is stored, organized, and manipulated.",
answer: "true", 
options: [ "true", "false" ],
}, 
{ 
question: "A boolean is used to determine true or false", 
answer: "true", 
options: [ "true", "false" ],    
}, 
{       
question: "An array in JavaScript is a type of global object that is used to store data.",
answer: "true", 
options: [ "true", "false" ],
},
{
 question: "Javascript datatypes include, but are not limited to string, number, boolean, null, object, function:", 
 answer: "false", 
 options: [  "true", "false"  ],      
}
];
var quizPage = document.getElementById("page2");
var preQuizPage = document.getElementById("page1");
var quizQuestions = document.getElementById("quizQuestions");
var quizOptions = document.getElementById("quizOptions");
var submitBtn = document.getElementById("submitAnswer");
var timeLeft = document.getElementById("timeLeft");
var results = document.getElementById("results");
var currentQuestion = 0;
var penaltyTime = 10;
var totalTime = questions.length * 10;
var timeInterval;


document.getElementById("beginQuiz").addEventListener("click", startQuiz);
function startQuiz() {
  preQuizPage.style.display = "none";
  quizPage.style.display = "block";
  displayQuestion();
  startTimer();
}
function displayQuestion() {
  var question = questions[currentQuestion];
  quizQuestions.textContent = question.question;
  quizOptions.innerHTML = "";
  for (var i = 0; i < question.options.length; i++) {
    var option = question.options[i];
    var button = document.createElement("button");
    button.textContent = option;
    quizOptions.appendChild(button);
  }
}
document.getElementById("quizOptions").addEventListener("click", checkAnswer);
function checkAnswer(event) {
  clearInterval(timeInterval);
  var selectedOption = event.target.textContent;
  var question = questions[currentQuestion];
  if (selectedOption === question.answer) {
    results.textContent = "Correct!";
  } else {
    results.textContent = "Incorrect! Penalty of " + penaltyTime + " seconds";
    totalTime -= penaltyTime;
    if (totalTime < 0) totalTime = 0;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(function() {
      displayQuestion();
      startTimer();
      results.textContent = "";
    }, 1000);
  } else {
    setTimeout(function() {
      endQuiz();
    }, 1000);
  }
}
function startTimer() {
  timeLeft.textContent = "Time Left: " + totalTime + " seconds";
  timeInterval = setInterval(function() {
    totalTime--;
    if (totalTime <= 0) {
      clearInterval(timeInterval);
      endQuiz();
    } else {
      timeLeft.textContent = "Time Left: " + totalTime + " seconds";
    }
  }, 1000);
}
function endQuiz() {
  quizPage.style.display = "none";
  results.textContent = "Quiz finished!";
}

