let object = {Game :  "Cricket",
              Web_Show : "Stranger Things",
              Place : "Bangalore"};
// for (let prop1 in object){
//     console.log(object[prop1]);
// }

// let arr2 = ["Cricket","Stranger Things","Bangalore"];
// for (let array in arr2){
//     console.log(arr2[array]);
// }
for (const [key,value] of Object.entries(object)){ //Gives output with properties and values
    console.log(key,":",value);                   
}