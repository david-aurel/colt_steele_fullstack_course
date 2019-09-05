var age = Number(prompt("Whats your age?"));

if (age < 0) {
    console.log("Your age is negative?")
}

else if (age === 21) {
    console.log("Happy birthday, you get a free shot!");
}

else if (age % 2 !== 0) {
    console.log("Your age is odd!");
}

else if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}

else {
    console.log("Your age is " + age + ".")
}

