//Immediately Invoked Function Expression - IIFE
let initialValue = "1000";
(function (){
    let initialValue = "2000";
    console.log(initialValue);
})();

let result = (function (){
    let initialValue = "3000";
    return initialValue;
})();
console.log("Value of Result :",result);
console.log("Value of Initial Value :",initialValue);

let newValue = function(newNum){
    initialValue = newNum;
    console.log("New Value of Global Value", initialValue);
}
newValue(4000);
console.log("New Assigned value to Initial Value :",initialValue);