//Countdown Timer
let endDate = new Date("Wed Dec 17 2025 08:30:00 GMT+0200");
let currDate = new Date();
function dateSubtract(endDate,currDate){
    result = Date.parse(endDate) - Date.parse(currDate);
    return result;
}
//countValue holds the milliseconds to convert Days, Hours, Minutes, Seconds
countValue = dateSubtract(endDate,currDate);
//To calculate days we divide the countvalus by 86400000(milliseconds in a day)
dayLeft = Math.floor(countValue/86400000);
//We get the remainder for hours by using modulo operator which are leftover milliseconds for hours
remainderHrs = Math.floor(countValue%86400000);
//Leftover milliseconds are divide by 3600000(milliseconds in a hour) to get the remaining hours
hrsLeft = Math.floor(remainderHrs/3600000);
//To get minutes remainder hours are moduled by 3600000 to get leftover milliseconds for minutes
remainderMin = Math.floor(remainderHrs%3600000);
//We then divide remainder minutes by 60000(milliseconds in a minute) to get the remaining minutes
minLeft = Math.floor(remainderMin/60000);
//We modulo remainder minutes by 60000 to get leftover milliseconds for seconds
remainderSec = Math.floor(remainderMin%60000);
//And we divide it by 1000(milliseconds in a second) for
secLeft = Math.floor(remainderSec/1000);

let countDown = {
    Days_Left : dayLeft,
    Hours_Left : hrsLeft,
    Minutes_Left : minLeft,
    Seconds_Left : secLeft,
}
console.log(countDown);