var firstAngle = document.querySelector("#input1");
var secondAngle = document.querySelector("#input2");
var thirdAngle = document.querySelector("#input3");
var button = document.querySelector("#button");
var outputText = document.querySelector("#output-message");
var errorText = document.querySelector("#error-message");

function clickListener() {
    outputText.innerText = "";
    errorText.innerText = "";

    var angle1 = firstAngle.value;
    var angle2 = secondAngle.value;
    var angle3 = thirdAngle.value;

    console.log(angle1);

    var angleSum = Number(angle1) + Number(angle2) + Number(angle3);

    if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
        errorText.innerText = "Please enter positive numerical values only";
    } else if (angle1 === "" || angle2 === "" || angle3 === "") {
        errorText.innerText =
            "Please enter all three angles as numerical values";
    } else if (angle1 == "0" || angle2 == "0" || angle3 == "0") {
        errorText.innerText = "Please enter non-zero value of angles";
        outputText.innerText =
            "The definition of a triangle is: A closed figure having three sides and three vertices where the angles corresponding to the vertices are greater than zero.";
    } else if (angleSum === 180) {
        outputText.innerText = "Yes, these angles can form a triangle!";
    } else {
        outputText.innerText = "No, these angles can't form a triangle";
    }
}

button.addEventListener("click", clickListener);
