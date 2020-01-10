// my age
let myAge = 22;

// the first two years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

// the total of years excluding the first two
let laterYears = myAge - 2;

// every year after the first two count as four dog years
laterYears *= 4;

//extra practice: no *= operator:
//laterYears = laterYears * 4;

// add earlyYears and laterYears to calculate the total dog years
let myAgeInDogYears = earlyYears + laterYears;

// store a lowercase version of my Name in a variable
let myName ='David'.toLowerCase();

//printing my name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
