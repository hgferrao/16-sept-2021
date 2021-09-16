"use strict";
// const interface = "henry";
// console.log(interface);  //will  throw an error as interface is reserverd key.

// Function
// function logger() {
//   console.log("hey im a function");
//   console.log("henry");
//   const a = 10 + 15;
//   console.log(a);
// }
// logger();

// exapmle
// function fruitJuice(apple, grapes) {
//   console.log(apple, grapes);
//   const juice = `The juice is made by ${apple} apples and ${grapes}.`;
//   return juice;
// }
// // const myJuice = fruitJuice(3, 0);
// console.log(fruitJuice(3, 5));
// console.log(fruitJuice(4, 6));

// Function declration example
// function add(a, b) {
//   const c = a + b;
//   // return c;
// }
// add(11, 6);
// console.log(c); //this wont work due to block scope

//Function expression
// const calAge = function (birthYear) {
//   return 2027 - birthYear;
// };
// // const age1 = calAge(1992);
// console.log(calAge(1990));

//Arrow function // Good for one line of code .becomes complex when we have more code to be executed.
// const calAge = (birthYear) => 2027 - birthYear;
// const age = calAge(1991);
// console.log(age);

//calling function inside a function
// const cutPieces = function (fruit) {
//   return fruit * 2;
// };

// const fruitJuice = function (apple, grapes) {
//   const applePieces = cutPieces(apple);
//   const grapePieces = cutPieces(grapes);

//   const juice = `The juice is made by ${applePieces} apple pieces and ${grapePieces} grape pieces.`;
//   return juice;
// };
// console.log(fruitJuice(3, 6));

// Challenge

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(2, 4, 6));
// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphin, scoreKoalas);

// const checkwinner = function (avgDolphines, avgKoalas) {
//   if (avgDolphines >= 2 * avgKoalas) {
//     console.log(`Dolpines win (${avgDolphines} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphines) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphines})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkwinner(scoreDolphin, scoreKoalas);

// checkwinner(600, 100);
// checkwinner(100, 500);

///Arrays

// let names = ["henry", "john", "vinay", "ferrao"];
// console.log(names);
// let num = new Array(10, 20, 30, 40, 50);
// console.log(num);
// let mixarray = new Array("henry", 20, 40, "ferrao");
// console.log(mixarray);
// // display array element using array index
// console.log(mixarray[0]); //displays first value present inside the array

// // To check Length of an arry
// console.log(mixarray.length);

// console.log(mixarray[mixarray.length - 1]); // to display last element of an array
// console.log(mixarray);

// mixarray.pop(); // removing array item at end
// console.log(mixarray);
// mixarray.shift("henry"); //removing array item at start
// console.log(mixarray);
// mixarray.unshift("sagar"); //adding array item at start
// console.log(mixarray);
// mixarray.push("santosh"); //adding new  array item at end
// console.log(mixarray);
// mixarray[2] = "james"; //replacing new  array item at index number 2
// console.log(mixarray);

// //Array inside arry
// let newArray = [["henry", "ferrao", 34], ["hi", "how", 2], "are", 35];
// console.log(newArray);
// console.log(newArray.length);

// let friends = ["henry", "roshan", "mohan", 40];
// console.log(friends.indexOf(40));
// console.log(friends.indexOf("mohan"));
// console.log(friends.indexOf("ferrao")); // to check the value which is not present in array  (o/p is -1)
// console.log(friends.includes("mohan")); // returns true
// console.log(friends.includes("ferrao")); // returns false

//challenge
//tip calculaor/////////////// Analize this for working structure
// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44]; //declared an array
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]; // sending each array value to function
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

///Objects
// creating object
// const henry = {
//   firstName: "john",
//   lastName: "ferrao",
//   job: "teacher",
//   friends: ["stivan", "james", "robin"],
// };
// console.log(henry);
// console.log(henry.firstName); //Accesing the object elements using dot(.) operator
// console.log(henry.friends);

// // adding new values to object
// henry.locaction = "belgaum";
// henry["facebook"] = "hgferrao";
// console.log(henry);

// //Challenge
// //john has 3 friends and his best friend is called stivan
// console.log(
//   `${henry.firstName} has ${henry.friends.length} friends, and his best friend is called ${henry.friends[1]}`
// );

// Object Method

// const jonas = {
//   firstName: "Jonas",
//   lastName: "ferrao",
//   birthYeah: 1990,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

//Coding challenge

// const mark = {
//   fullName: "Mark miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// john.calcBMI();
// console.log(john.BMI);
// mark.calcBMI();
// console.log(mark.BMI);
// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`
//   );
// }

// For Loop
// for (let i = 5; i <= 10; i++) {
//   console.log(`Hey ${i}`);
// }

// loop through array
// const henry = [
//   "Henry",
//   "george",
//   "ferrao",
//   [20, 56, "hey"],
//   30,
//   25,
//   "john",
//   "melvin",
// ];
// let type = [];
// // console.log(henry[1], typeof henry[1]);
// for (let i = 0; i < henry.length; i++) {
//   //reading henry array
//   console.log(henry[i], typeof henry[i]);

//   //filling types array type 1
//   // type[i] = typeof henry[i];
//   //filling types array type 2
//   type.push(typeof henry[i]);
// }
// console.log(type);

//small exercise to push age of a person to new array

// const years = [1990, 2000, 1998, 1980];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2040 - years[i]); // filling the empty array with age
// }
// console.log(ages);

//continue and break
// const years = ["hello", 1990, 2000, "vinay", 1998, 1980, "henry"];
// console.log("----only strings----");
// for (let i = 0; i < years.length; i++) {
//   if (typeof years[i] != "string") continue;
//   console.log(years[i], typeof years[i]);
// }

// console.log("----Break with Number----");
// for (let i = 0; i < years.length; i++) {
//   if (typeof years[i] === "number") break;
//   console.log(years[i], typeof years[i]);
// }

// Looping backward [last element to fisrt]
// const henry = [
//   "henry",
//   "ferrao",
//   2050 - 1990,
//   "developer",
//   ["vinay", "peter", "steven"],
// ];

// for (let i = henry.length - 1; i >= 0; i--) {
//   console.log(i, henry[i]);
// }

// Loop inside loop

// for (let i = 1; i < 4; i++) {
//   console.log(`---Set exercise no---${i}`);
//   for (let j = 1; j < 6; j++) {
//     console.log(`Rep no ${j}`);
//   }
// }

//While loop
// let i = 1;
// while (i <= 10) {
//   console.log(`Inside while ${i}`);
//   i++;
// }

//small exercise about rolling a dice using a random method
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("loop is aboit to end...");
// }

// coding challenge

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// let bills = [22, 295, 175, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];
// for (let i = 0; i < bills.length; i++) {
//   const tip = calTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum+ arr[i]; //same as below
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
