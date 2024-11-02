///////day 5////////////
"use strict";

//strict mode
let hasGoodVision= false;
const passTest = true;
if(passTest) hasGoodVision = true;
if(hasGoodVision) console.log("i can drive");

//Function
function blog()
{
    console.log("Welcome to my page");
}

//calling / running / invoking function
blog();
blog();

function fruit(apples,mangoes) // paramete -> input variable
{
console.log(apples,mangoes);
const juice = `juice with ${apples} apples and ${mangoes} mangoes.`;
return juice;
}
 const juice = fruit(5,3);
 console.log(juice);

// function declaration and function Expression

/* function declaration*/

// function age1(birthyear){
//     return 2024-birthyear;
// }
// const age = age1(2005);
// console.log(age);
// // sum of 2 no
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));// argument  function call with the help of function name

/* function expression*/

// sum of 2 no value pass by any variable 
/*let sum = function(a,b){
    return a+b;
}
console.log(sum(2,3));

const calcage=function(birthyear){
    return 2024-birthyear;
}
const age2=calcage(2004);
console.log(age2,age);

//Arrow Function
const calcage1 =(birthyear) => 2024-birthyear;
const age3=calcage1(2000);
console.log(age3);

//Fucntion calling another function
function cutVeges(vegetables){
    return vegetables*2;
}
function veges(cucumber,tomato){
    const cucumberPieces= cutVeges(cucumber);
    const tomatoPieces= cutVeges(tomato);
    const salad = `salad with ${cucumberPieces} pieces of cucumber and ${tomatoPieces} pieces of tomato.`
return salad;
}
console.log(veges(4,3));*/

//////day 6///////////
//Array
/*const friend1 ="neha";
const friend2 ="simran";
const friend3= "pooja";/*/
const friends=["neha","simran","pooja"];
console.log(friends); 

const year =new Array(1999,2000,2001,2002,2003,2004,2005);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends[5]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[1] ="riya";
console.log(friends);
// invalid
/*friends=[11,12,30]; 
const firstName= "Sneha";
const sneha =[firstName,"Dhingra",2024-2005,"Student",friends];
console.log(sneha[2][4]);*/

// Exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
  };
  const years = [1990, 1967, 2002, 2010, 2018];
  
  const age4 = calcAge(years[0]);
  const age5 = calcAge(years[1]);
  const age6 = calcAge(years[years.length - 1]);
  console.log(age4, age5, age6);
  
  const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
  ];
  console.log(ages);


  //Basic Array Operations
  /*const buddies=["Aarti","Rajni","Simran"];
// Add elements in last
const newLength= buddies.push("wahenoor");
console.log(buddies);
console.log(newLength);

// add element in begin
buddies.unshift("arju");
console.log(buddies);

// Remove element from last
const popped=buddies.pop();
console.log(popped);
console.log(newLength);

// Remove element from first
buddies.shift();
console.log(buddies);

// define index of elements
console.log(buddies.indexOf("Simran"));

// ans in true or false
buddies.push(34);
console.log(buddies);
console.log(buddies.includes("Aarti"));
console.log(buddies.includes("john"));
console.log(buddies.includes(34));
if(buddies.includes(34))
{
    console.log("element are present in buddies")
}*/


//objects


/*const sneha = {
   firstName: "Sneha",
     lastName: "Dhingra",
     age: 2024-2005,
     friends : ["simran","pooja","neha"],
};
console.log(sneha);
console.log(sneha.firstName);
console.log(sneha["age"]);

const nameKey = "Name";
console.log(sneha["first" + nameKey]);


const excitedIn = prompt
("what do you want to know about Sneha? Choose between firstName,age and friends");
if(sneha[excitedIn]){
    console.log(sneha[excitedIn]);
}else{
    console.log("Wrong request!");
}*/
// challenge
// (sneha) has (3) friends, and his best friend is called(Simran)
// console.log(
//     `${sneha.firstName} has ${sneha.friends.length} friends, and his best friend is called,${sneha.friends[0]}`
// );

/// day 7 ///

const sneha = {
    firstName: "Sneha",
      lastName: "Dhingra",
      age: 2024-2005,
      job: "Student",
      friends : ["simran","pooja","neha"],
      hasDriverLicense: true,
 };

//  calcAge: function()
//  {
//     console.log(this);
//     return 2024-birthYear;
//  }
////// For Loop /////// it running while condition is ture ////
for (let i=1;i<=50;i++)
{
    console.log(`lifting weight repitition ${i}🏋️`);
}

/////Looping Array /////
const snehaArray = [
     "Sneha",
       "Dhingra",
       2024-2005,
       "Student",
      ["simran","pooja","neha"],
]
const types =[];

for(let i=0;i<snehaArray.length;i++)
{
    console.log(snehaArray[i], typeof snehaArray[i]);

// filling types array
types[i] = typeof snehaArray[i];
types.push(typeof snehaArray[i]);
}
console.log(types);

// Continue and Break
console.log("---ONLY STRINGS ----");
for(let i=0;i<snehaArray.length;i++)
{
    if(typeof snehaArray[i] !== "string") continue;
        console.log(snehaArray[i], typeof snehaArray[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < snehaArray.length; i++) {
  if (typeof snehaArray[i] === "number") break;

  console.log(snehaArray[i], typeof snehaArray[i]);
}

/// While Loop////
let j=1;
while(j<=20){
    console.log(`lifting weight repitition ${j}🏋️`);
j++;
}