//Word Scrambler Function
let scramblerVar = []; //Empty Array to store the scrambled string value
let already = [];   //Empty array to store the repeated index of the string value
function wordScrambler(stringValue){
//The loop will run until the length of scrambler value is not equal to string value    
    while (scramblerVar.length != stringValue.length) {    
//Random number generator for the index values        
        let randomIndex  = Math.floor(Math.random()*stringValue.length);
//The below line explains if already includes() has the random index repeated, it will loop again till it gives a new value
        if(already.includes(randomIndex)) {
            continue;
        }
//This pushes the new index value to already
        already.push(randomIndex);
        var1 = stringValue[randomIndex]; //Storing the values of each letter generated from random index
        scramblerVar.push(var1); //Pushing to empty array called scrambleVar
    }
    return scramblerVar.join(''); //As each letter will be separated in single quotes we join them and return
}
console.log(wordScrambler("cricket"));