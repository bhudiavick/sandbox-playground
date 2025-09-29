// Base class
class Animal {
    constructor(public name: string) {}
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  // Extended class with super
  class Dog extends Animal {
    constructor(name: string, public breed: string) {
      super(name);
    }
    speak() {
      console.log(`${this.name} barks!`);
    }
  }
  
  const a = new Animal("Generic animal");
  a.speak();
  
  const d = new Dog("Rover", "Labrador");
  d.speak();
  