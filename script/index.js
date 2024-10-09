const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".buttons");
const display = document.querySelector(".numberfield");

buttons.addEventListener("click", e => {
    if (e.target.matches("button")){
        const button = e.target;
        const action = button.dataset.action;
        const buttonContent = button.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        const calculate = (number1, operator, number2) => {
            console.log("calculating");
            let result = "";
            const firstNum = parseFloat(number1);
            const secondNum = parseFloat(number2);

            switch(operator){
                case "add":
                    result = firstNum + secondNum;
                    break;
                case "subtract":
                    result = firstNum - secondNum;
                    break;
                case "multiply":
                    result = firstNum * secondNum;
                    break;
                case "divide":
                    if(secondNum == 0) {
                        result = "Divide by zero? Nice try.";
                        break;
                    }
                    result = firstNum / secondNum;
                    break;
            }
            return result;
        }

        if (!action){
            if(displayedNum === "0" || previousKeyType === "operator" || previousKeyType === "calculate"){
                display.textContent = buttonContent;
                calculator.dataset.previousKeyType = "number";
            }else{
                display.textContent = displayedNum + buttonContent;
            }
            calculator.dataset.previousKeyType = "number";
        }

        if(
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if(firstValue && operator && previousKeyType !== "operator"){
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            }else{
                calculator.dataset.firstValue = displayedNum;
            }
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.operator = action;
        }

        if (action === "decimal"){
            if(!displayedNum.includes(".")){
                display.textContent = displayedNum + ".";
            }else if (previousKeyType === "operator"){
                display.textContent = "0.";
            }
            calculator.dataset.previousKeyType = "decimal"; 
        }

        if(action === "clear"){
            calculator.dataset.firstValue = "";
            calculator.dataset.modValue = "";
            calculator.dataset.operator = "";
            calculator.data.previousKeyType = "";

            display.textContent = 0;
            calculator.dataset.previousKeyType = "clear";
        }

        if(action === "calculate"){
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = displayedNum;

            if(firstValue){
                if(previousKeyType === "calculate"){
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = "calculate";
        }
    }
})
