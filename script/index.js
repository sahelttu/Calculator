
const numberfield = document.querySelector(".numberfield");
const operatorbutton = document.querySelector(".operatorbutton");
const equalbutton = document.querySelector(".equalbutton");

let isItNextNumber = false;
let number1 = 0;
let number2 = 0;
let result = 0;
let operator = "+";

console.log("hello world");

document.querySelectorAll(".numberbutton").forEach(el =>{
    el.addEventListener('click', () =>{
        console.log("pressed");
        enterNumber(el.value);
    })
})

document.querySelectorAll(".operatorbutton").forEach(el =>{
    el.addEventListener("click", () =>{
        if(isItNextNumber == false){
            number1 = parseInt(numberfield.textContent);
            operator = el.value;
            console.log(number1);
            console.log(operator);
            numberfield.textContent = "";
            isItNextNumber = true;
        }else{
            number2 = parseInt(numberfield.textContent);
            console.log(number2);
            Operate();
        }
    })
})

equalbutton.addEventListener("click", () => {
    console.log("operate");
    number2 = parseInt(numberfield.textContent);
    Operate();
})


function enterNumber(num){

        numberfield.textContent += num;
    
}

//raw, rework this
function Operate(){
    
    switch(operator){
        case "+":
            console.log("plus"); 
            number1 += number2;
            numberfield.textContent = "";
            numberfield.textContent = number1.toString();
            break;
        case "-":
            console.log("minus"); 
            number1 -= number2;
            numberfield.textContent = "";
            numberfield.textContent = number1.toString();
            break;
        default:
            return 0; 
    }
}