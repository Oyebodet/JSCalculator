
// program to create a simple calculator using JavaScript.  

const operator = prompt('Enter operator for the calculation you want to do ( eg. +, -, * or / ): ');
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: ' + number1 + operator));  
  
let result; // declaration of the variable.  
  
// use if, elseif and else condition in JavaScript.  
if (operator == '+') {  
    result = number1 + number2;  
}  
else if (operator == '-') {   
    result = number1 - number2;  
}  
else if (operator == '*') {   
    result = number1 * number2;  
}  
else {  
    result = number1 / number2;   
}  
   
window.alert(" Answer is" + " " + result);  
 