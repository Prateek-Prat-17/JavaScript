//Creating Class and creating initial Variables
class Calculator{
    constructor(currentValue,newValue,operator){
        this.currentValue = currentValue;
        this.newValue = newValue;
        this.operator = operator;
    }

    //First Value appending Ex: 123
    appendCurrentValue(num) {
        this.currentValue = this.currentValue * 10 + num;
    }
    
    //Second Value appending Ex: 123
    appendNewValue(num) {
        this.newValue = this.newValue * 10 + num;
    }

    //Addition, Subtraction, Multiplication & Division Operation
    selectOperation(){
        if(this.operator === "+"){
           return this.currentValue + this.newValue;
        }else if(this.operator === "-"){
            return this.currentValue - this.newValue;
        }else if(this.operator === "*"){
            return this.currentValue * this.newValue;
        }else if(this.operator === "/"){
           return this.currentValue / this.newValue;
        }else return this.currentValue;
    }

    //Clear all Function
    clearfunc(){
        this.currentValue = 0;
        this.newValue = 0;
        this.operator = null;
    }

   //Squareroot of a Value
   sqrt (){
    return Math.sqrt(this.currentValue); 
   }

}

const calc = new Calculator(0, 0, null); //object created for class calculator!

//functions for calculating operations and linking to HTML File

//Creating dataKey function and linking it with HTML File with onclick keyword
function dataKey(num){      
    if(calc.operator == null) {   //Checks whether we have not chosen operator in beginning
    calc.appendCurrentValue(num);  //Calls the method on calc object to press the first digits on calculator
    document.getElementById("displayValue").innerHTML = calc.currentValue; //Find the page element with displayValue Id and connects with HTML
    } else {
        calc.appendNewValue(num); // After initializing the first values we select the operator and then this statement runs and we can select the second value
        document.getElementById("displayValue").innerHTML = calc.newValue; // And connect the second value with HTML and display in the calculator
    }
}

//We define the operator +, -, *, / with dataop function and link with operator buttons with onclick keyword in Calculator
function dataop(z){
    calc.operator = z;
}

//We define the operations with selectOperation Function written above and link it to HTML
function dataoperate(){
    document.getElementById("displayValue").innerHTML = calc.selectOperation();
}

//We define the Square Root and link it to HTML
function datasqrt(){
    document.getElementById("displayValue").innerHTML = calc.sqrt();
}

//We define the AC to set to 0 and link it to HTML
function clearAll(){
    calc.clearfunc();
    document.getElementById("displayValue").innerHTML = 0;
}