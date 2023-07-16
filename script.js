var questions = [
    {
      question: "querySelectorAll can be used to select unmatched selectors.",
      answer: "false",
      options: ["true", "false"],
    },
    {
      question:
        "A Data Structure is a storage format that defines the way data is stored, organized, and manipulated.",
      answer: "true",
      options: ["true", "false"],
    },
    {
      question: "A boolean is used to determine true or false.",
      answer: "true",
      options: ["true", "false"],
    },
    {
      question:
        "An array in JavaScript is a type of global object that is used to store data.",
      answer: "true",
      options: ["true", "false"],
    },
    {
      question:
        "JavaScript datatypes include, but are not limited to string, number, boolean, null, object, function.",
      answer: "false",
      options: ["true", "false"],
    },
];
var quizPage = document.getElementById("page2");
var preQuizPage = document.getElementById("page1");
var quizQuestions = document.getElementById("quizQuestions");
var quizOptions = document.getElementById("quizOptions");
var score = document.getElementById("score");
var saveScore = document.getElementById("saveScore");
var finalPage = document.getElementById("scorePage");
var container = document.getElementById("container");
var highScore = document.getElementById("highScore");
var playerName = document.getElementById("playerName");
var scoreList = document.getElementById("scoreList");
var seeHighScores = document.getElementById("vewScores");
var currentQuestion = 0;
var penaltyTime = 10;
var totalTime = questions.length * 10;
var timeInterval;
var userScore = 0;
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
        score.textContent = "Correct!";
        userScore++;
    } else {
        score.textContent = "Incorrect! Penalty of " + penaltyTime + " seconds";
        totalTime -= penaltyTime;
        if (totalTime < 0) totalTime = 0;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(function () {
            displayQuestion();
            startTimer();
            score.textContent = "";
        }, 1000);
    } else {
        setTimeout(function () {
            endQuiz();
        }, 1000);
    }
}
function startTimer() {
    var timeLeft = document.getElementById("timeLeft");
    timeLeft.textContent = "Time Left: " + totalTime + " seconds";
    timeInterval = setInterval(function () {
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
    preQuizPage.style.display = "none";
    quizPage.style.display = "none";
    container.style.display = "block";
    score.textContent = "Final Score: " + userScore + "/" + questions.length;
}
function scoreSave() {
    var savedScores = localStorage.getItem("highScore");
    var scores = savedScores ? JSON.parse(savedScores) : [];
    var newScore = {
        playerName: playerName.value.trim(),
        score: userScore,
    };
    scores.push(newScore);
    window.localStorage.setItem("highScore", JSON.stringify(scores));
    showScores();
}
function renderScores() {
    var savedScores = localStorage.getItem("highScore");
    if (savedScores !== null) {
        var scores = JSON.parse(savedScores);
        for (var i = 0; i < scores.length; i++) {
            var scoreItem = document.createElement("li");
            scoreItem.innerHTML = scores[i].playerName + ": " + scores[i].score;
            scoreList.appendChild(scoreItem);
        }
    }
}
saveScore.addEventListener("click", function(event) {
    event.stopPropagation();
    preQuizPage.style.display = "none";
    quizPage.style.display = "none";
    container.style.display = "none";
    finalPage.style.display = "block";
    showScores();
    renderScores();
});
function init() {
    renderScores();
}
init();


// seeHighScores.addEventListener("click", function(event){
    // saveScore(event);
// 
// });
// 

//working out pulling the JSON stored objects into a new page
// 