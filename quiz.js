var quizForm = document.querySelector("#form-data");
var outputText = document.querySelector("#output-score");

var answersArray = [
    "Yes",
    "No",
    "Yes",
    "50°",
    "Equilateral triangle",
    "Isosceles triangle",
];

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
    outputText.innerText = "Your score is " + score + " out of 6";
}

quizForm.addEventListener("submit", processQuiz);
