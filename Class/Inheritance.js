//Inheritance

class Vehicle{
    constructor(color,minSpeed,maxSpeed){
        this.color = color;
        this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
    move(){
        this.currentSpeed = this.maxSpeed - this.minSpeed;
        console.log("Currently Moving at",this.currentSpeed,"kmph");
    }
}

class Car extends Vehicle{
    constructor(color,minSpeed,maxSpeed,name){
        super(color,minSpeed,maxSpeed);
        this.name = name;
    }
}

let c = new Car("Blue",100,300,"Lamborghini")
console.log(c.name);
console.log(c.color);
c.move();
