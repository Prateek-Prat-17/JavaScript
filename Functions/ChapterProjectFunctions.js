let nr1 = () => console.log("One");
let nr2 = () => console.log("Two");
let nr3 = () => {console.log("Three");nr2();nr1()};
let nr4 = () => {console.log("Four");setTimeout(nr1,0);setTimeout(nr3,0)};
nr4();