//Date Methods
let dateObj = new Date(2025,11,4,9,30,15,170);
let seqMon = ["January","February","March","April","May","June","July","August","September",
    "October","November","December"];
//Get the day from the date object value
console.log("Date :",dateObj.getDate());
//Get the year from the date object value
console.log("Year :",dateObj.getFullYear());
//Get the month & month name of the date object value
console.log("Month Number :",dateObj.getMonth(), "& Month Name :",seqMon[dateObj.getMonth()]);
