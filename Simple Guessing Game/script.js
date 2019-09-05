var age = Number(prompt("Whats your age?"));

if (age > 0) {
    console.log("Your age is negative?")
}

if (age === 21) {
    console.log("Happy birthday, you get a free shot!");
}

if (age % 2 !== 0) {
    console.log("Your age is odd...");
}

if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}

