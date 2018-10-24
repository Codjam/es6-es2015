// Lecture: let and const

//ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);
//
// //ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

//ES5
// function driversLicence5(passedTest) {
//   if (passedTest) {
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car. ');
//   }
//
// }
//
// driversLicence5(true);


//ES6
// function driversLicence6(passedTest) {
//
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     let firstName = 'John';
//     console.log(
//       firstName +
//       ', born in ' +
//       yearOfBirth +
//       ', is now officially allowed to drive a car. ');
//   }
// }
// driversLicence6(true);
//
//
//
// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
//
// console.log(i);


// Lecture: Blocks and IIFEs
//ES6


// Lecture: Strings (template literals)
// let firstName = 'john';
// let lastName = 'smith';
// const yearOfBirth = '1990';
//
// function calcAge(year) {
//   return 2016 - year;
// }

//ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
//
//
// //ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old. `);



// let firstName = 'Gabe';
// let lastName = 'Perry';
// const greeting = 'Happy Birthday';
//
// console.log(`This is ${firstName} ${lastName}. His birthday is today.  Say ${greeting} to Gabe. `);


// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('th'));
// console.log(n.includes(' '));
// console.log(`${firstName} `.repeat(5));

//Lecture: Arrow Functions basic

// const years = [1990, 1965, 1982, 1976];

//ES5
// var ages5 = years.map(function(el) {
//   return 2016 - el;
// });
// console.log(ages5);


//ES6 basic arrow functions
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);
//
//
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);
//
// ages6 = years.map((el, index) => {
//   const now = new
//   Data().getFullYear;
//   const age = now - el;
//   return `Age element ${index + 1}:
//   ${age}.`
// });
//
// console.log(ages6);

//Arrow functions: Lexical 'this Keyword'

//ES5 cool trick (self instead of this)
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//
//     var self = this;
//     document.querySelector('.green').addEventListener('click',
//     function() {
//       var str = 'This is box number ' + self.position +
//       ' and it is ' +
//       self.color + '. ';
//       alert(str);
//     })
//   }
// }
// box5 .clickMe();


//ES6

// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//
//
//     document.querySelector('.green').addEventListener('click',
//     () => {
//       var str = 'This is box number ' + this.position +
//       ' and it is ' +
//       this.color + '. ';
//       alert(str);
//     })
//   }
// }
// box6 .clickMe();


//not the right way to wright an arrow function.
// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//
//
//     document.querySelector('.green').addEventListener('click',
//     () => {
//       var str = 'This is box number ' + this.position +
//       ' and it is ' +
//       this.color + '. ';
//       alert(str);
//     })
//   }
// }
// box66 .clickMe();



//ES5 cool trick (.bind)
// function Person(name) {
//   this.name = name;
//
// }
// Person.prototype.myFriends5 =
// function(friends) {
//     var arr = friends.map(function(el)
//   {
//     return this.name + ' is friends with ' + el;
//   }.bind(this));
//   console.log(arr);
// }
//
// var friends = ['Jamal, Joe, Jill'];
// new Person('Jamila').myFriends5(friends);
//
//
// //ES6 add on
// Person.prototype.myFriends6 =
// function(friends) {
//
//     var arr = friends.map(el =>
//     `${this.name} is friends with
//     ${el}`);
//     console.log(arr);
// }
//  new Person('JamJam').myFriends6(friends);
