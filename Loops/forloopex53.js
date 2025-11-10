/*let myWork = []; //Empty Array

//for loop for iteration of number 1 to 10 appending to lesson
for(i = 1;i<=10;i++){ 
    myWork.push({Name : `Lesson ${i}`,
                 Status : i % 2 == 1}); //status setting to i modulus 2 so true for all odd number of 
}                                       // Lessons and False for even number of lessons
console.table(myWork); //console.table gives the full expansion of the Array Object*/

let myWork2 = [];
//Same Logic as Above
for (i =1; i <=10 ; i++){
     myWork2.push({Name : `Lesson ${i}`,
                  Status : i%2==0? true : false});//This time using a Ternary operator for odd & even
}                  
console.table(myWork2);