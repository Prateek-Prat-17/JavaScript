//Arrow Functions

//Multiplying two numbers
let multiplyNum = (x,y) => (console.log(x*y));
multiplyNum(5,5);

//Consoling Messages
let sayRun = () => console.log("Run");
sayRun();
// or
let sayMsg = x => console.log(x);
sayMsg("Great");
//or
let sayTxt = x => console.log(prompt("Write your own Text :"));
sayTxt(); // It will output whatever we write in the prompt

// Using foreach() method
food = ["Pulav","Paneer","Pasta"];
food.forEach(meal => console.log(meal));