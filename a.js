/*
let numberOfStudents = 17;
Check if we have more than 20 students, if yes console log "classroom too small"
else console log "classroom size acceptable"
*/
let numberOfStudents = 17;

if (numberOfStudents > 20) {
    console.log("classroom too small");
} else{
    console.log("classroom size acceptable");
}


/*
let numberOfHouses = 5;
Check if this person’s number of houses is greater than 2 - if true console.log(“you need to sell more houses”)
If 2 or less houses - log “seems reasonable”
*/
let numberOfHouses = 5;

if (numberOfHouses > 2) {
  console.log("You need to sell more houses");
} else if (numberOfHouses <= 2) {
  console.log("Seems reasonable");
}


/*
let bill = 20;
Check if the bill is higher than 15 if yes “we should split the bill” 
If not higher than 15 “I’ll get the bill this time”
*/
let bill = 20;

if (bill > 15) {
  console.log("We should split the bill");
} else {
  console.log("I'll get the bill this time");
}


/*
Write an if/else statement for the following requirements:

If students get 55 or lower: console log "Not to good"
If students get 60 or lower: console log "ehhhh"
If students get 70 or lower: console log "Keep trying"
If students get 80 or lower: console log "nice!"
If students get 90 or lower: console log "Doing good!"
else console log "over 90! great!"
*/
let score = 85; 

if (score <= 55) {
  console.log("Not too good");
} else if (score <= 60) {
  console.log("Ehhhh");
} else if (score <= 70) {
  console.log("Keep trying");
} else if (score <= 80) {
  console.log("Nice!");
} else if (score <= 90) {
  console.log("Doing good!");
} else {
  console.log("Over 90! Great!");
}


/*
My example1
Are you Yaqi checking
*/
let personName = "Joe";

if (personName === "Yaqi") {
  console.log("Hello Yaqi! Nice to see you.");
} else {
  console.log("Hello there! What's your name?");
}


/*
My example2 
Weather checking and tips
*/
let weather = "sunny";

if (weather === "sunny") {
  console.log("It's a sunny day! Don't forget your sunscreen.");
} else if (weather === "rainy") {
  console.log("It's raining. Grab an umbrella!");
} else if (weather === "cloudy") {
  console.log("The sky is cloudy. It might rain later.");
} else {
  console.log("I'm not sure about the weather.");
}

/*
My example3
Age checking
*/
let age = 25;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
