//Console the Value of PI using Math.
console.log("Value of PI Using In Built Method :",Math.PI);

//Ceil, Floor & Round Method
let x = 5.7;
console.log("Ceil Method Value of x :",Math.ceil(5.7));
console.log("Floor Method Value of x :",Math.floor(5.7));
console.log("Round Method Value of x :",Math.round(5.7));

//Function to generate Random Number using min and max
function randomNum(min,max){
    value = Math.floor(Math.random()*max) + min;
    return value
}
console.log("Random Number Generator :",randomNum(1,100));