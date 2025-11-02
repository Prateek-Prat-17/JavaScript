let maxValue =10;
let randNum = Math.floor(Math.random() * maxValue) + 1;
console.log(randNum);
let tracker = true;
while(tracker){
    userInput = Number(prompt("Enter a number from 1 to 5 :"));
    if(randNum === userInput){
        console.log("You Won");
        tracker = false;
    }else console.log("You Lost");
}