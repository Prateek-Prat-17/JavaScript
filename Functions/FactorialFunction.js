function factorialTester(x){
    let result = 1;
    for (let i = 1; i <=x; i++){
         result = result*i;
    }
    return result;
}
console.log(factorialTester(5));

// function computeFactorial(iNum){
//     return (iNum > 0) ? iNum *computeFactorial(--iNum) : 1; 
// }
// console.log(computeFactorial(5));