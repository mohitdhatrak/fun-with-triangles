var quizForm = document.querySelector("#form-data");
var outputText = document.querySelector("#output-score");
var rightAnswers = document.querySelector("#right-answers");

var answersArray = [
    "Yes",
    "80°, No",
    "Yes",
    "50°",
    "Equilateral triangle",
    "Isosceles triangle",
    "No",
    "These angles can't form a triangle!",
    "25 cm",
    "105°",
];

function printRightAnswers() {
    var answersText = "Right Answers:   ";
    for (var i = 0; i < answersArray.length; i++) {
        answersText = answersText + (i + 1) + ") " + answersArray[i] + " ";
    }
    rightAnswers.innerText = answersText;
}

function processQuiz() {
    var score = 0;
    var index = 0;
    var userAnswers = new FormData(quizForm).values();
    for (var markedAnswer of userAnswers) {
        if (markedAnswer === answersArray[index]) {
            score++;
        }
        index++;
    }
    outputText.innerText = "Your score is " + score + " out of 10";
    printRightAnswers();
}

quizForm.addEventListener("submit", processQuiz);
