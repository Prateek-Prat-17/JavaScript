let out = "";
for (let i = 1; i <= 10 ;  i++){
    if (i === 5){
        continue;  // Gives an output 1 2 3 4 6 7 8 9 10
    }
    out += i + " ";
}
console.log(out);

// let out = "";
// for (let i = 1; i <= 10 ;  i++){
//     if (i === 5){ 
//         break;    // Gives an output with 1 2 3 4
//     }
//     out += i + " ";
// }
// console.log(out);