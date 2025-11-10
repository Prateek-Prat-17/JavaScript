// let arrOfarr = [];
// for (let i = 0; i < 3; i++){
//     arrOfarr.push([]);
//     for (let j = 2; j <=20; j*=2){
//         arrOfarr[i].push(j);
//     }
// } console.log(arrOfarr);

let myTable =[];
let rows = 5;
let columns = 5;
let cv = 0;
for (i = 0; i < rows; i++){
    templtable = [];
    for (j = 0; j < columns; j++){
        templtable.push(++cv);
    }
    myTable.push(templtable);
}
console.table(myTable);