//Filter Method
//Checking Duplicates
let orgArr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", 
"Laurence", "Mike", "Laurence", "Mike"];
//Function to check dulpicates with parameters of Elements and Index
function checkDuplicates(element,index){
//This syntax orgArr.indexOf(element) checks the first appearance of a value so it wont 
//give the index of same value again ex: laurence first appearnce is 0 then 0===0
//second appearance of laurence is 5 which means 5===0 that is false and discarded!
    return index === orgArr.indexOf(element);
}
let filterArr = orgArr.filter(checkDuplicates);
console.log(filterArr);

//Map Method
let mulArr = [1,2,3,4,5,6,7,8,9];
console.log(mulArr.map(x => x*2));
