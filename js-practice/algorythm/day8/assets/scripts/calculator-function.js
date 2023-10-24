let screen = document.getElementById('screen-input');
let symbolButtons = document.querySelectorAll(".calculator-button.symbol-button");
let equalButton = document.getElementById("equal-button");
let clearOneButton = document.getElementById("clear-one-button");
let clearAllButton = document.getElementById("clear-all-button");

let previousResult = 0;
let lastOperator;
let lastOperatorIndex;
symbolButtons.forEach(element => {
    element.addEventListener('click', function () {
        screen.value += element.innerText;
    })
});

equalButton.addEventListener('click', function () {
    console.log(screen.value);
    console.log(previousResult);
    console.log("----");

    if (screen.value.includes('+') || screen.value.includes('-') || screen.value.includes('*') || screen.value.includes('/')) {
        lastOperatorIndex = Math.max(screen.value.split("").lastIndexOf("+"), screen.value.split("").lastIndexOf("-"), screen.value.split("").lastIndexOf("*"), screen.value.split("").lastIndexOf("/"));
        lastOperator = screen.value.slice(lastOperatorIndex, lastOperatorIndex + 1);
        console.log(lastOperator);
        previousResult = Number(screen.value.slice(0, lastOperatorIndex));
        screen.value = eval(screen.value);
    } else {
        // if second time equal button pressed,result must be recalculated
        console.log(lastOperator+(Number(screen.value)-previousResult));

        // attempt 2
        screen.value = eval(screen.value+lastOperator+(Number(screen.value)-previousResult));
        
        // previousResult = eval(previousResult+lastOperator+(Number(screen.value)-previousResult )

        // attempt 1
        // let resultOperator;
        // if(lastOperator =="+"){
        //     resultOperator = "-"
        // }
        // console.log(screen.value + resultOperator + previousResult);
        
        // console.log((eval(screen.value + resultOperator + previousResult)));
        // console.log(screen.value + lastOperator + (eval(screen.value + resultOperator + previousResult)));
        // screen.value = eval(screen.value + lastOperator + (eval(screen.value + resultOperator + previousResult)))
    }


    screen.value = eval(screen.value);

    console.log(`previous result ${previousResult}`);
});

clearOneButton.addEventListener('click', function () {
    screen.value = screen.value.slice(0, screen.value.length - 1);
});

clearAllButton.addEventListener('click', function () {
    screen.value = "";
});

