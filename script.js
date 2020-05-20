// countdown timer that starts as soon as begin button is clicked 
var timeEl = document.querySelector(".time"),
    secondsLeft = 60,
    userScore = 0,
    progress = document.getElementById("progress");
var questions = [
        {
        question: "Inside which HTML element do we put the Javascript?",
        choices: ["<js>", "<script>", "<javascript>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "What is the correct syntax for referring to an external script called [xxx.js]?",
        choices: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script src='js.xxx'>", "<script href='js.xxx'>"],
        answer: "<script href='js.xxx'>"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()", "call function(myFunction())", "execute myFunction;", "myFunction()"],
        answer: "myFunction()"
    },
    {
        question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
        choices: ["if i=! 5 then", "if i <> 5", "if (i!=5)", "if (i<>5)"],
        answer: "if (i!=5)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["//This is a comment", "<!--This is a comment-->", "'This is a comment'", "(This is a commet)"],
        answer: "//This is a comment"
    }];
var questionCount = 0;
var correctAnswerCount = 0;
var incorrectAnswerCount = 0 ;
    
// created a function to initiate both timer and starting the quiz
$("#startBtn").on("click", function(event) {
    event.preventDefault();

    //called on both function to start timer and quiz simultaneously
    startTimer();
    startQuiz();
   
})
    //function that dictates the time allotment for the quiz
    function startTimer(){
        var timeInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Seconds Remaining";
        $("#startBtn").addClass(".hide");

            if(secondsLeft === 0) {
            clearInterval(timeInterval);
            timeEl.innerHTML = "⏰ Time's up!";
            };
        }, 1000);
    };


    //function that initiates the quiz, creates container for the questions and possible answers
    function startQuiz(){
        

        // Will need to create a container to store the questions within the HTML
        var container = document.getElementById("quizContainer")
        // this code will ensure container is clear each time the function startQuiz is executed
        $(".quizContainer").empty();

        // Creating an element for the question text
        var h2Tag = document.createElement("h2");
        // assigning text to the newly created element
        h2Tag.textContent = questions[questionCount].question;
        console.log(h2Tag);

        // adding new elements to be used for all possible solutions of the question
        var quesChoice = document.createElement ("ul");
        console.log("****")
    console.log(questions[questionCount].choices)
        // loop will be used to craete a button for each possible sulotion
        container.appendChild(h2Tag)

        for (var i=0; i<questions[questionCount].choices.length; i ++){
            console.log(i);
            console.log(questions[questionCount].choices);
            console.log(questions[questionCount].choices[i]);
            var mulChoice = document.createElement("li");
            var choiceBtn = document.createElement("button");
            choiceBtn.textContent=questions[questionCount].choices[i];
            choiceBtn.setAttribute("data-index", questionCount);
            mulChoice.appendChild(choiceBtn);
            quizContainer.appendChild(mulChoice);
            console.log(choiceBtn);
        }

        // function to help determine user is selecting correct answer
        document.addEventListener("click", function(e) {
            e.preventDefault();
            var correctAnswer;

            // will need to add to userScore once answer is determined to be correct
            if (e.target.matches("button")){
                var userAnswer = e.target.textContent
                var indexData = e.target.dataset.indexData
                userScore ++;
                console.log(correctAnswer);
                console.log(userAnswer);
                console.log(indexData);
            }

            // }else (correctAnswer === false) {
            //     secondsLeft - 10;
            // }

        });
    }
    




// // code for storing scores in local storage of the application
//     function recordScore(event){

// // local storage activity for reference
// function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }
  
//     // Render todos to the DOM
//     renderTodos();
//   }
  
//   function storeTodos() {
//     // Stringify and set "todos" key in localStorage to todos array
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
  
//   // When form is submitted...
//   todoForm.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var todoText = todoInput.value.trim();
  
//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//       return;
//     }
  
//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = "";
  
//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   });
  