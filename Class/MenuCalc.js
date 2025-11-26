//Create a class that contains the prices of two menu items as private field declarations
class menu{
    #food1;
    #food2;
    constructor(food1,food2){
        this.#food1 = food1;
        this.#food2 = food2;
    }
get food1(){
    return this.#food1;
 }

set food1(food1){
    this.#food1 = food1;
 }

get food2(){
    return this.#food2;
 }

set food2(food2){
    this.#food2 = food2;
 }

//Create a method to calculate and return the total cost depending on how 
//many of each item the user selects (food1 and food2 are the items selected by user)
//food items selected multiplied by the pre defined price is the total cost
  total(){
      return console.log((10 * this.food1) + (20* this.food2));
    }
  total2(){
      return console.log((5 * this.food1) + (4* this.food2));
    }
   total3(){
      return console.log((2 * this.food1) + (6* this.food2));
    }      
}

let obj1 = new menu(5,10);
let obj2 = new menu(7,6);
let obj3 = new menu(4,5);
obj1.total();
obj2.total2();
obj3.total3();
