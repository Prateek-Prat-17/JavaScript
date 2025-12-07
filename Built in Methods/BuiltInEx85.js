//Replacing vowels with index of vowels
let arr = "I love JavaScript";
let vowels = ["a","e","i","o","u"];
let arr1 = arr.toLowerCase();
for(i = 0; i<=vowels.length; i++){
//Vowels[i] are the vowels replaced with index of it!
  arr1 = arr1.replaceAll(vowels[i],i);    
}
console.log(arr1);