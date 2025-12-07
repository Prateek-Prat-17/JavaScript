//Capitalize first letter of each word
let str1 = "thIs will be capiTalized for each word";
let splitArr3 = [];
let splitArr4 = [];
//Function to lowercase the whole string
function manipulate(str1){
    return str1.toLowerCase();
}
let splitArr = manipulate(str1);
//We store it in array form
let splitArr2 = splitArr.split(" ");
//As forEach doesn't work on array we create an empty and push it by slice first letter
//of each word and Capitalize it using .toUpperCase!
splitArr2.forEach(element => {splitArr3.push(element.slice(0,1).toUpperCase())});
//We then slice the first letter and take the remaining letters and push it to an empty Array!
splitArr2.forEach(element => {splitArr4.push(element.slice(1))});
//Mapping the First letter with remaining letters
let capArr= splitArr3.map((firstLetter,index) => { //First letter stored in splitArr3 i.e, T and index 0
    return firstLetter + splitArr4[index]; //We concatenate first letter with splitArr4[0] 
    // i.e, T and his = This,then W + splitArr[1] ill = will and so on
});
console.log(capArr.join(" "));