// object = group of key value pair
// key : value->property
// key : function->method
let Piet = {
  Name: "Panipat College",
  Place: "Samalkha",
  Course: {
    Btech: "Computer Science",
    Degree: "BBA",
  },
  time: 12,
  bestCollege: "true",
  festivals: ["Carbuncle", "Maestrose"],
  sayHi: function () {
    console.log("Welcome to PIET");
  },
};

// console.log(Piet.Name);
// console.log(Piet.Place);
// console.log(Piet.festivals);
// Piet.sayHi();
// console.log(Piet);
// Piet.time = 17;
// Piet.festivals = ["2k18", "Maestrose 2k18"];
// console.log(Piet);

// for (let key in Piet) {
//   console.log(key, " : ", Piet[key]);
// }

let propKey = "time";
console.log(Piet.time);
console.log(Piet[propKey]);
console.log(Piet["time"]);
