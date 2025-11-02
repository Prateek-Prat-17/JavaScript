// let maxValue =10;
// let randNum = Math.floor(Math.random() * maxValue) + 1;
// console.log(randNum);
// let tracker = true;
// while(tracker){
//     userInput = Number(prompt("Enter a number from 1 to 5 :"));
//     if(randNum === userInput){
//         console.log("You Won");
//         tracker = false;
//     }else console.log("You Lost");
// }

let nr1 = 0;
let nr2 = 5;
let temp;
myArr = [];
while(myArr.length < 27){
    myArr.push(nr1);
    temp = nr1 + nr2;
    nr1 = temp;
}
console.log(myArr);