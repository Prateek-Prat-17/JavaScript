function addTwoNums (x,y){
    return x + y;
}
let rearr = [];
for (i = 1; i < 10; i++){
    let result = addTwoNums(i*5,i*i);
    rearr.push(result);
}
console.log(rearr);