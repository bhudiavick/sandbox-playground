// oop-demo.ts
// Demonstrates key OOP concepts in TypeScript

// -------------------------
// 1. Base class + Inheritance
// -------------------------
class Animal1 {
    constructor(public name: string) {}
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog1 extends Animal1 {
    constructor(name: string, public breed: string) {
      super(name);
    }
    speak() {
      console.log(`${this.name} barks!`);
    }
  }
  
  console.log("\n--- Base & Inheritance ---");
  const generic = new Animal1("Generic animal");
  generic.speak(); // Generic animal makes a sound
  const rover = new Dog1("Rover", "Labrador");
  rover.speak(); // Rover barks!
  
  // -------------------------
  // 2. Abstract Class + Polymorphism
  // -------------------------
  abstract class Shape {
    constructor(public color: string) {}
    abstract area(): number;
    describe() {
      console.log(`A ${this.color} shape with area ${this.area()}`);
    }
  }
  
  class Circle extends Shape {
    constructor(color: string, public radius: number) {
      super(color);
    }
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  console.log("\n--- Abstract Class & Polymorphism ---");
  const circle = new Circle("red", 10);
  circle.describe(); // A red shape with area ...
  
  // -------------------------
  // 3. Interfaces + Implementation
  // -------------------------
  interface Logger {
    log(message: string): void;
  }
  
  class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log("[LOG]:", message);
    }
  }
  
  console.log("\n--- Interface & Implementation ---");
  const logger = new ConsoleLogger();
  logger.log("Playwright test started");
  
  // -------------------------
  // 4. Access Modifiers
  // -------------------------
  class BankAccount {
    private balance: number = 0;
  
    deposit(amount: number) {
      this.balance += amount;
      console.log(`Deposited: ${amount}, New balance: ${this.balance}`);
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  console.log("\n--- Access Modifiers ---");
  const account = new BankAccount();
  account.deposit(100);
  console.log("Balance:", account.getBalance());
  // account.balance = 9999; ❌ Error if uncommented
  
  // -------------------------
  // 5. Static Methods & Properties
  // -------------------------
  class MathUtils {
    static PI = 3.14159;
    static square(n: number) {
      return n * n;
    }
  }
  
  console.log("\n--- Static Members ---");
  console.log(MathUtils.PI); // 3.14159
  console.log(MathUtils.square(5)); // 25
  
  // -------------------------
  // 6. Super Method Calls
  // -------------------------
  class Vehicle {
    constructor(public brand: string) {}
    drive() {
      console.log(`${this.brand} is driving`);
    }
  }
  
  class Car extends Vehicle {
    constructor(brand: string, public doors: number) {
      super(brand);
    }
    drive() {
      super.drive(); // call parent method
      console.log(`${this.brand} car with ${this.doors} doors is driving`);
    }
  }
  
  console.log("\n--- Super Calls ---");
  const bmw = new Car("BMW", 4);
  bmw.drive();
  
  // -------------------------
  // 7. Generics in Classes
  // -------------------------
  class Box<T> {
    private items: T[] = [];
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }
  
  console.log("\n--- Generics ---");
  const stringBox = new Box<string>();
  stringBox.add("hello");
  stringBox.add("world");
  console.log(stringBox.getAll()); // ["hello", "world"]
  
  const numBox = new Box<number>();
  numBox.add(42);
  console.log(numBox.getAll()); // [42]
  