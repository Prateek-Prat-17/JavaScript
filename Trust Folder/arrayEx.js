//Sorting Function
let arr1 = [2,4,6];
let arr2 = [1,5,7,10,15];
toSort = arr1.concat(arr2);
function sorting (toSort){
//i is the first digit of array
    for(i=0; i<toSort.length;i++){
//j is the second digit of the array
        for(j=0; j<toSort.length;j++){
            if(toSort[j]>toSort[j+1]){
//Swapping of numbers
                var temp = toSort[j];
                toSort[j] = toSort[j+1];
                toSort[j+1] = temp;
            }
        }
    }
    return toSort;
}
console.log(sorting(toSort));