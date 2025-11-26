class employeeTrack{
    constructor(firstname,lastname,yearsWorked){ //Use first names, last names, and the number of years worked  
    this.firstname = firstname;                  //as values in the constructor.
    this.lastname = lastname;
    this.yearsWorked = yearsWorked;
  }
}

//Set up a prototype to return the details of the person's first and last names 
//and how long they've worked at the company
employeeTrack.prototype.introduce = function(){
   console.log("Hi this is",this.firstname,this.lastname,"working here for",this.yearsWorked,"years");
}

//Add the people into an array
const employees = [
    new employeeTrack("Paul","Pogba",27),
    new employeeTrack("Luiz","Suarez",30),
    new employeeTrack("James","Faulkner",32)
];

//Iterate the contents of the array to output the results into the console
employees.forEach(emp => {emp.introduce()});