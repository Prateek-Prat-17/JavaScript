let age = Math.floor(Math.random()*21);
if(age>=21){
    console.log("Confirmed entry & Eligible to Purchase Alcohol");
} else if (age >= 19){
    console.log("Confirmed Entry & Alcohol Purchase Denied");
} else console.log("Entry Denied");