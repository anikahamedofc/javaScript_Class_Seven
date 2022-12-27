//1. javaScript Object
// example Array
const userArray = ["Ishan", "Ahmed", 2020, "Ishwardi"];
console.log(userArray);
// Array arrange in index way
console.log(userArray[0]);

// object Example
const userObject = {
  firstName: "Ishan",
  lastName: "Ahmed",
  birthYear: 2020,
  birthPlace: "Ishwardi",
  class: "Narsary",
};
// object arrange in Alphabstic way
console.log(userObject);
// bracket Notation
console.log(userObject["firstName"]);
// dot Notation
console.log(userObject.birthYear);
// example 1
// add new item
userObject.hobbey = "drawing";
console.log(userObject);
// retrive
console.log(userObject.hobbey);
// example 2
userObject["secondHome"] = "shahjadpur"; //must give dubble cotation

console.log(userObject["secondHome"]); //must give dubble cotation

// second Object example with express function
const userObjectOne = {
  firstName: "Anik",
  lastName: "Ahmed",
  isJob: true,
  calculateAge: function (birthYear) {
    return 2022 - birthYear;
  },
};
console.log(userObjectOne.isJob);
// dot Notation
console.log(userObjectOne.calculateAge(1992));
// bracket Notation
console.log(userObjectOne["calculateAge"](1995));

// Third  Object example with Arrow Function
const userObjectTwo = {
  firstName: "Anik",
  lastName: "Ahmed",
  isJob: true,
  calculateAge: (birthYear) => {
    return 2022 - birthYear;
  },
};
console.log(userObjectTwo.calculateAge(2001));

// This Keywaord

const userObjectThree = {
  firstNameOne: "Anik",
  lastNameOne: "Ahmed",
  birthYearOne: 1992,
  isJobOne: true,
  calculateAgeOne: function () {
    return 2022 - this.birthYearOne;
  },
  userDetails: function () {
    return `Hi This is ${this.firstNameOne} ${this.lastNameOne} Born in ${this.birthYearOne}!`;
  },
};
console.log(userObjectThree.calculateAgeOne());
console.log(userObjectThree.userDetails());

// javaScript LOOP
// FOR LOOP
// basic for Loop
for (let task = 1; task <= 8; task++) {
  console.log(`task ${task}`);
}
// [i] stand for iteration/পুনরাবৃত্তি
for (let i = 1; i <= 3; i++) {
  console.log(`work ${i}`);
}
// while LOOP
let task = 1;
while (task <= 3) {
  console.log(`task ${task}`);
  task++;
}
// [i] stand for iteration/পুনরাবৃত্তি
let i = 1;
while (i <= 5) {
  console.log(`frame ${i}`);
  i++;
}

const newArray = ["anik", "amit", "ishan", "rafia", "samia", "anika"];

// for (let i = 0; i <= newArray.length; i++) {
//   console.log(newArray[i]);
// }

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

const oldArray = ["one", "two", "three", "four"];
oldArray.forEach((item, index) => {
  console.log(item, index);
});

// for loop

const scores = [22, 54, 76, 92, 43, 33];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
// while
(function () {
  // IIFE function
  let i = 0;
  while (i < scores.length) {
    console.log(scores[i]);
    i++;
  }
})();

// backword position
for (let i = scores.length - 1; i > 0; i--) {
  console.log(scores[i]);
}
// loop Break
const twoScores = [
  "Data 22",
  "data 54",
  "data 76",
  "data 93",
  "data 89",
  "data 45",
];

for (let i = 0; i < twoScores.length; i++) {
  if (i == 4) break;
  console.log(twoScores[i]);
}
// loop continue / skip
for (let i = 0; i < twoScores.length; i++) {
  if (i == 4) continue;
  console.log(twoScores[i]);
}
// Indexof function in array
const twoScores1 = [
  "Data 22",
  "data 54",
  "data 76",
  "data 93",
  "data 89",
  "data 45",
];
console.log(twoScores1.indexOf("data 89"));
console.log(twoScores1.indexOf("data 76"));
console.log(twoScores1.indexOf("data 176")); //it will give -1 karon ai data nai

// includes give us boolean \
console.log(twoScores1.includes("data 76")); //true
console.log(twoScores1.includes("data 176")); // false karon ai data nai

// loop
const n = 5;
for (let i = 0; i < n; i++) {
  console.log(`i love javaScript`);
}
