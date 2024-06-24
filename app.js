const Num1 =parseFloat(prompt('Enter The Number: '));
const Operator = prompt('Enter The Operator + , - , * , / : ');
const Num2 =parseFloat(prompt('Enter The Number: '));

let result = 0;
if(isNaN(Num1) || isNaN(Num2)){
    alert("Wrong Input! Refresh The Page Again")
}
else{
    if(Operator == '+'){
        result = Num1 + Num2;
    }
    if(Operator == '-'){
        result = Num1 - Num2;
    }
    if(Operator == '*'){
        result = Num1 * Num2;
    }
    if(Operator == '/'){
        result = Num1 / Num2;
    }
    // document.write(Num1 + Operator + Num2 + "=" + result);
    alert("Your Answer is " + "= " +  result);
}