class TestClass {
    #firstName;
    constructor(firstName, secondName) {
        this.#firstName = firstName;
        this.secondName = secondName;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(x) {
        this.#firstName = x;
    }
}



class Vehicle {
    #firstName;
    constructor(firstName) {
        this.#firstName = firstName;
    }

    greet() {
        console.log("hello");
    }
}


class Car extends Vehicle{
    constructor(color) {
        super('zas');
        this.color = color;
    }

    greet1() {
        console.log("Bye");
    }
}

const t = new TestClass('VIkas', 'Chauhan');
console.log("another=", t.firstName);


const v = new Vehicle('x123');
console.log(v.modelNum);

const c = new Car('black');
console.log(c.color);
console.log(c.firstName);
c.greet();