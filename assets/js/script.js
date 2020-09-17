var displayQuestionEl = document.querySelector(".display-questions");
var timerEl = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");
var mainDisplay = document.createElement("h3");
var startBtn = document.createElement("button");
var timer = 15;
var index = 0;

function openingPage() {
    mainDisplay.textContent = "Press the button to start"
    startBtn.textContent = "Start"
    displayQuestionEl.append(mainDisplay, startBtn)
}
// shows question and starts timer
function startQuiz() {
    showTimer()
    nextQuestion()
}
//function for the timer
function showTimer() {
    timerEl.textContent = timer;
    var questionTimer = setInterval(function () {
        timer--
        timerEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(questionTimer);
        }


    }, 1 * 1000)
}
// displays first question
function nextQuestion() {
    var currentQuestion = questions[index];
    console.log(currentQuestion);
    displayQuestionEl.textContent = "";
    mainDisplay.textContent = currentQuestion.title;
    displayQuestionEl.append(mainDisplay);
    var choicesContainer = document.createElement("div");
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentQuestion.choices[i];
        choiceBtn.addEventListener("click", checkAnswer);
        choicesContainer.append(choiceBtn);
    }
    displayQuestionEl.append(choicesContainer);
}

function checkAnswer(event) {
    var responseText = event.target.textContent;
    console.log(responseText);

    if (responseText === questions[index].answer) {

        console.log("Correct");
    }
    else {
        console.log("Incorrect")

    }

// display next question
    index++;
    nextQuestion();
}

startBtn.addEventListener("click", startQuiz)

openingPage();

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// youll need a start button
// to listen for a click with an event listener
// when its click run a function that loads in the first question to the html
// listen for clicks on the answers to see if they are the correct one or not
// use conditional to evaluate whether the answer matches or not

// pending its correct or not 
// add to score
// or subtract time


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly





// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


