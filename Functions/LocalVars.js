// Local Variables 
function testAvailability() {
    let x = "Function";
    console.log("Available Inside :",x);
    return x;
}
testAvailability(); // The Inside Function

y = testAvailability();
console.log("Available Outside :",y); //The Outside Function