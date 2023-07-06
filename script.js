//question strings//

// const questions = [     {
    // question:1,
    // question: "String Values must be enclosed within ______", 
// answer: "quotes", 
// options: ["commas", "curly brackets", "quotes", "parentheses"]
// }, 
// {
// question:2,    
// question: "A Data Structure is a storage format that defines the way data is stored, organized, and manipulated.",
// answer: "true", 
// options: ["true", "false"]
// }, 
// {
// question:3,    
// question: "A boolean is used to determine true or false", 
// answer: "true",
// options: ["true", "false"]
    // 
// }, 
// {
    // question:4,    
// question: "An array in JavaScript is a type of global object that is used to store data.",
// answer: "true",
// options: ["true", "false"]
// }]

// console.log(questions[3].answer)

document.getElementById("beginQuiz").addEventListener("click", function() {
var timeLeft = 120;
var timer = setInterval(function 
    function1() {
    document.getElementById("timeLeft").innerHTML = timeLeft + "&nbsp" + "seconds remaining";
    timeLeft -= 1;
    if(timeLeft <=0) {
        clearInterval(timer);
        document.getElementById("timeLeft").innerHTML = "time over"
    }
}, 1000);
// console.log(timeLeft)
});








































































// String Values must be enclosed within ______
// when being assigned to variables?
// 1. commas
// 2. curly brackets
// 3. quotes @
// 4. parantheses
// 
// HTML stands for Hypertext Markup Language
// 1. True
// 2. False
// 
// 
// A Data Structure is Is a storage format that defines the way data is stored, organized, and manipulated.
// 1. True
// 2. False
// 
// A boolean is used to determine true or false
// 1. true
// 2. false
// 
// 


