function calculate(x,y,operator){
    if(operator === "+"){
        return x + y;
    }else if (operator === "-"){
        return x - y;
    }else return x + y;
}
console.log(calculate(7,5,"+"));
