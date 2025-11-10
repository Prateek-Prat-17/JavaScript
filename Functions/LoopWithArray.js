/*let animals = ["Lion","Tiger","Cheetah","Deer","Elephant","Dog"];
for(i =0; i < animals.length; i++){
   // if(animals[i].startsWith("D")){  //To Delete the String Values starting with D you 
       // delete animals[i];           //can also add more than 1 letter
    console.log(animals[i]);
    }*/

let gridarr = [];
let cellValue = 81;
let row = [];
for (let i = 0; i <= cellValue; i++){
     row.push(i);
     if(i % 9 === 8){ // to check whether current row has 9 indexes
       gridarr.push(row); //every time row is filled with 9 values
       row = []; // an empty row is created and pushed to the Grid
   }
}
console.table(gridarr);

// A table which represents 1 to 10 Tables!
let gridarr1 = [];
for (let i = 1; i <= 10; i++){
   let row = []
    for (let j = 1; j <= 10; j++){
      row.push(i*j);
}
   gridarr1.push(row);
}

console.table(gridarr1);