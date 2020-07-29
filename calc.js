let firstNumberDisplay = $("#first-number");
let secondNumberDisplay = $("#second-number");
let currentOperation;
let operatorClicked = false;
let operatorResultEl = $("#operator");
let firstNumberString = "";
let secondNumberString = "";


$(".number").on("click", function (){
    let numberClicked = this.value;

    //once operator is clicked append to second number instead of first
    if (!operatorClicked) {
        firstNumberString += numberClicked;
        firstNumberDisplay.text(firstNumberString);
    } else {
        secondNumberString += numberClicked;
        secondNumberDisplay.text(secondNumberString);
    };
   
    
});

$(".operator").on("click", function (){
    currentOperation = this.value // store operation to use in calculation
    operatorClicked = true; //change operatorClicked to allow second number

    switch(this.value) {
        case "plus":
            $operator = "+";
            break;
        case "minus":
            $operator = "-";
            break;
        case "times":
                $operator = "*";
                break;
        case "power":
                $operator = "^";
                break;
        case "divide":
                $operator = "/";
                break;
    };
    operatorResultEl.append($operator)
});


$("#button-equal").on("click", function (){
    let result;
    firstNumber = parseInt(firstNumberDisplay.text())
    secondNumber = parseInt(secondNumberDisplay.text())
    switch(currentOperation) {
        case "plus":
            result = firstNumber + secondNumber;
            break;
        case "minus":
            result = firstNumber - secondNumber;
            break;
        case "times":
            result = firstNumber * secondNumber;
            break;
        case "power":
            result = firstNumber ** secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
    };
    console.log(result)
    $("#result").text(result);
});


$("#button-clear").on("click", function (){
    firstNumberDisplay.empty();
    secondNumberDisplay.empty();
    operatorResultEl.empty();
    $("#result").empty();
    operatorClicked = false;
    firstNumberString = "";
    secondNumberString = "";
});