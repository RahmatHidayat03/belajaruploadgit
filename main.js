// formulir kritikan

// window.addEventListener("load", function() {
//   const form = document.getElementById('kirim');
//   form.addEventListener("button", function (e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//     .then(() => {
//       alert("!");
//     })
//   });
// 

window.addEventListener("load", function() {
  const form = document.getElementById('kirim');
  form.addEventListener('btn', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Terima kasih telah memberi kritikan 🖕🏼🖕🏼🖕🏼!");
    })
  });
});

function greeting() {
    console.log("Good Morning!")
  }

// latihan di dicoding

  greeting();

  function greeting(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }
  

greeting("Harry", "English");

function myfunc() {
  console.log("ini adalah function saya")
}

myfunc()

// default argumen

function myParamFunc(param1, param2) {
  console.log("param1", param1)
  console.log("param2", param2)
}
myParamFunc("parameter 1", "parameter 2")

// named parameter dengan spread operator

function myNamedParamFunc({ param1 = 1, param2} = {}) {
  console.log("param1: ${param1}, param2: ${param2}");
}

// rest parameter pada function

function paramFunc(param1, param2, ...param3) {
  console.log("param1", param1);
  console.log("param2", param2);
  console.log("param3", param3);
}

paramFunc(
  "parameter pertama",  //param1
  "parameter ke2",  // param2
  1, 2, 3, 4, 5,  // param3 (array)
)

// arrow function

const myArrowFunc = () => {
  return "ini adalah arrow function saya";
}

console.log(myArrowFunc());

// predefined function

// 1. isFinite

const apakahTakTerbatas = isFinite(5/0);
console.log(apakahTakTerbatas);

// 2. isNaN

const apakahNaN = isNaN("sepuluh"/5);
console.log(apakahNaN);

// 3. parseFloat

const desimal = parseFloat("1.23");
console.log(desimal);

// 4. parseInt 

const integer = parseInt("100");
console.log(integer);

// quis

function calculate(value) {
  return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

let objectValue = {
  key: "hallo",
  a: "hai"
}

console.log(objectValue)

// dicoding constructor function

function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}
 
Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
 
Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}
 
Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}

// Dengan memanfaatkan constructor function Car.

// function Car(brand, color, maxSpeed, chassisNumber) {
//   this.brand = brand;
//   this.color = color;
//   this.maxSpeed = maxSpeed;
//   this.chassisNumber = chassisNumber;
// }
 
// Car.prototype.drive = function() {
//   console.log(`${this.brand} ${this.color} is driving`);
// }
 
// Car.prototype.reverse = function() {
//   console.log(`${this.brand} ${this.color} is reversing`);
// }
 
// Car.prototype.turn = function() {
//   console.log(`${this.brand} ${this.color} is turning`);
// }
 
// // Membuat objek mobil dengan constructor function Car
// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
// console.log(car1);
// console.log(car2);
// console.log(car3);
 
// car1.drive();
// car2.drive();
// car3.drive();

// Contoh Arrow function tidak dapat dipanggil dengan keyword new.

// const Car = (brand) => this.brand = brand;
 
// const car1 = new Car('Toyota');

// contoh sintaks class di ES6

// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }
 
//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }
 
//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }
 
//   turn() {
//     console.log(`${this.brand} ${this.color} is turning`);
//   }
// }
 
// // Membuat objek mobil dengan constructor function Car
// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
// console.log(car1);
// console.log(car2);
// console.log(car3);
 
// car1.drive();
// car2.drive();
// car3.drive();

// properti belajar di dicoding

// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }
//  }
  
//  const car1 = new Car('BMW', 'red', 200, 'b-1');
//  const car2 = new Car('Audi', 'blue', 220, 'a-1');
//  const car3 = new Car('BMW', 'black', 250, 'b-2');
 
//  console.log(car1);
//  console.log(car2);
//  console.log(car3);

// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     // Set a random chassis number
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//   }
// }
 
// const car1 = new Car('BMW', 'red', 200);
// const car2 = new Car('Audi', 'blue', 220);
// const car3 = new Car('BMW', 'black', 250);
 
// console.log(car1);
// console.log(car2);
// console.log(car3);

// Kelas Pak Dika

