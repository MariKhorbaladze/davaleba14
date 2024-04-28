///work 1

const numbers = [5, 18, 13, 14, 23];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum);


/////work 2

const information = [  
    { 
        name: "Mari",
        age: 19,
        address: "Tbilisi",
    },
    {
        name: "Giorgi",
        age: 13,
        address: "Lake Lisi",
    },
    {
        name: "Alex",
        age: 33,
        address: "Mtskheta",
    },
];
///work 3 

console.log(`My name is ${information[0].name}`);
console.log(`My age is ${information[0].age}`);
console.log(`My address is ${information[0].address}`);

////work 4

if (information[1].age < 19) {
  console.log("I am a teenager");
} else {
  console.log("I am an adult");
};

/////work 5

let numbersInfo = [14, 13, 25, 23, 33]
for (let i = 0; i < numbersInfo.length; i++) { 
    console.log(numbersInfo[i]);
};


///work 6 
// const currentDay = 6;
switch (new Date().getDate()) { 
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}




