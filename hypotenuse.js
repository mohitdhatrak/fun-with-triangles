var firstSide = document.querySelector("#input1");
var secondSide = document.querySelector("#input2");
var button = document.querySelector("#button");
var outputText = document.querySelector("#output-message");
var errorText = document.querySelector("#error-message");

function clickListener() {
    outputText.innerText = "";
    errorText.innerText = "";

    var side1 = firstSide.value;
    var side2 = secondSide.value;

    var number1 = Number(side1);
    var number2 = Number(side2);

    var hypotenuse = Math.sqrt(number1 * number1 + number2 * number2);
    var truncatedHypo = hypotenuse.toFixed(2);

    if (side1 < 0 || side2 < 0) {
        errorText.innerText = "Please enter positive numerical values only";
    } else if (side1 === "" || side2 === "") {
        errorText.innerText =
            "Please enter both the side lengths as numerical values";
    } else if (side1 == "0" || side2 == "0") {
        errorText.innerText = "Please enter non-zero value of sides";
        outputText.innerText =
            "The definition of a triangle is: A closed figure having three sides and three vertices where the angles corresponding to the vertices are greater than zero. Hence length of a side can't be zero, as side lengths and angles opposite to them are directly proportional.";
    } else {
        outputText.innerText =
            "Length of hypotenuse is " + truncatedHypo + " units";
    }
}

button.addEventListener("click", clickListener);
