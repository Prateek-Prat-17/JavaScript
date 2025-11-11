//Recursive Countdown
function countDown(nr){
    console.log(nr);
    if (nr > 0){
        countDown(--nr);
    }
}
countDown(10);
