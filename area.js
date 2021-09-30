var inputHeight = document.querySelector("#input1");
var inputBase = document.querySelector("#input2");
var button = document.querySelector("#button");
var outputText = document.querySelector("#output-message");
var errorText = document.querySelector("#error-message");

function clickListener() {
    outputText.innerText = "";
    errorText.innerText = "";

    var height = inputHeight.value;
    var base = inputBase.value;

    console.log(base);

    var number1 = Number(height);
    var number2 = Number(base);

    var area = 0.5 * number1 * number2;

    if (height < 0 || base < 0) {
        errorText.innerText = "Please enter positive numerical values only";
    } else if (height === "" || base === "") {
        errorText.innerText =
            "Please enter both the side lengths as numerical values";
    } else if (height == "0" || base == "0") {
        errorText.innerText = "Please enter non-zero value of sides";
        outputText.innerText =
            "The definition of a triangle is: A closed figure having three sides and three vertices where the angles corresponding to the vertices are greater than zero. Hence length of a side can't be zero, as side lengths and angles opposite to them are directly proportional.";
    } else {
        outputText.innerText = "Area of triangle is " + area + " square units";
    }
}

button.addEventListener("click", clickListener);
