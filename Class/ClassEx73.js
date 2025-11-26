class animalSpecies {
    constructor(animalName, eatHabit, sound){
        this.animalName = animalName;
        this.eatHabit = eatHabit;
        this.sound = sound;
    }
}

animalSpecies.prototype.introduce = function (){
    console.log(this.animalName,"is a",this.eatHabit,"animal which",this.sound);
}

let a1 = new animalSpecies("Lion","carnivore","Roars");
a1.introduce();

let a2 = new animalSpecies("Giraffe","herbivore","doesn't roar but humms");
a2.introduce();

let a3 = new animalSpecies("Eagle","omnivore","doesn't humm but chirps");
a3.introduce();


