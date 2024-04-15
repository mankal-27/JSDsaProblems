function Animal(name, animalType){
    this.name = name;
    this.animalType = animalType;
}

Animal.prototype.sayName = function(){
    console.log(this.name);
}

Animal.prototype.sayAnimalType = function(){
    console.log(this.animalType);
}

function Dog(name){
    Animal.call(this, name, "Dog");
}

//Copy over the method

Dog.prototype = Object.create(Animal.prototype);
var myAnimao = new Animal("Bruno", "German Shepard")
myAnimao.sayName();
myAnimao.sayAnimalType(); 

var myDog = new Dog("Candy", "Dash")
myDog.sayName(); 
myDog.sayAnimalType();