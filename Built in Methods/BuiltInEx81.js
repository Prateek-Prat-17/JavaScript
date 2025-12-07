let decUrComp = decodeURIComponent("How's%20it%20going%3F");
console.log(decUrComp);

let encoStr = encodeURI("How's it going?");
console.log(encoStr);

let encoStr2 = encodeURI("http://www.basescripts.com?=Hello World");
console.log(encoStr2);