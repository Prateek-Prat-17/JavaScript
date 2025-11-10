// Spread Operator
let Spread = ["it","gives","space"];
let msg = ["javascript", "spread operator",...Spread,"like","this"];
console.log(msg);

//Subtracting with spread ops
function subNums (x,y,z,a){
    console.log(x-y-z-a);
}
let arr = [50,15];
let arr2 = [7,5];
subNums(...arr,...arr2);

//Rest Parameter
function withString (param1,...param2){
    console.log(param1,param2);
}
withString("hi","there","are","four","string values");

