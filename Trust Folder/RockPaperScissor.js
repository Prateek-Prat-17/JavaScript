//create players choice
let player = Math.floor(Math.random()*3);
let computer = Math.floor(Math.random()*3);


//logic of the game
if(player === 1 && computer === 2) {
           console.log("Computer Wins");
} else if (player === 2 && computer === 1) {
           console.log("Player Wins");
} else if (player === 0 && computer === 2) {
           console.log("Player Wins");
} else if  (player === 2 && computer === 0) {
           console.log("Computer Wins");
} else if  (player === 1 && computer === 0) { 
            console.log("Player Wins");
} else if   (player === 0 && computer === 1) {  
            console.log("Computer Wins");   
} else     {
             console.log("Its a Tie");

}