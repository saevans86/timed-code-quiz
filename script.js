//question strings//

var questionsArray = [     {
    q:1,
    question: "What will the following code return: Boolean(10 > 9)", 
answer: "true", 
options: ["true", "false"]
}, 
{
q:2,    
question: "A Data Structure is a storage format that defines the way data is stored, organized, and manipulated.",
answer: "true", 
options: ["true", "false"]
}, 
{
q:3,    
question3: "A boolean is used to determine true or false", 
answer: "true",
options: ["true", "false"]
    
}, 
{
    q:4,    
question: "An array in JavaScript is a type of global object that is used to store data.",
answer: "true",
options: ["true", "false"]
}]


// console.log(questions[3].answer)
//event listener to start the time 
document.querySelector("#beginQuiz").addEventListener("click", function() {
var timeLeft = 3;
var timer = setInterval(function 
    function1()
     {
    document.getElementById("timeLeft").textContent = timeLeft + "seconds remaining";
    timeLeft -= 1;
    if(timeLeft <=0) {
        clearInterval(timer);
        document.getElementById("timeLeft").textContent = "out of time!"
        // console.log(timeLeft)
    }
}, 1000);
   var startButton =document.getElementById("beginQuiz");
   var questionsDiv = document.getElementById("quizQuestions");
   var questionsOpt = document.getElementById("quizOptions");

   if (startButton.style.display === "none") {
   startButton.style.display = "block";
} else {
    startButton.style.display = "none";
   if 
    (timeLeft != 0) {

    } else 
    (timeLeft === 0) 
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Restart Quiz";
        document.body.appendChild(restartBtn);
        // need to work out removing "restart quiz" before time is up
    }
 
}


   
); 
    
        