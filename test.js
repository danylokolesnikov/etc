// Create class Animal
function Animal(name) {
  this.name = name;
}

// Make function getName
Animal.prototype.getName = function() {
  return this.name;
}

// Create class Dog
function Dog(name) {
    this.name = name;
}

// Inherit Dog from Animal
Dog.prototype = Object.create(Animal.prototype);

// Add function bark to class Dog
Dog.prototype.bark = function() {
  return `Dog ${this.name} is barking`;
};

// Make sure that Dog.constructor === Dog -> true
Dog.prototype.constructor = Dog;


// Make task with use ES6 classes (syntax sugar)
/*
class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  bark() {
    return `Dog ${this.name} is barking`;
  }
}*/


// TEST
var dog = new Dog ('Aban');

console.log(dog.getName () === 'Aban'); // true

console.log(dog.bark () === 'Dog Aban is barking'); // true
