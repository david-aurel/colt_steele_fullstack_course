

// TASK 1: Write a function isEven() which takes a single numeric argument and returns true  the number is event, and false otherwise// function isEven(num) {

// My approach:
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    };
};

// A way to refactor would be this:

function isEven2(num) {
    return num % 2 === 0;
}



// ----------------------------------------------------------------




//TASK 2: Write a function factorial() which takes a single numeric argument and return the factorial of that number.

//My approach:
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    else if (num > 0) {
        for (i = num -1; i >= 1; i--) {
            num *= i;
        }
        return num;
    }
    else {
        for (i = num + 1; i <= -1; i++) {
            num *= i;
        }
        return num;
    };
};

// The solution of Colt Steel looked like this

function factorial2(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result
}

//But that's missing the cases where the number is negative, so to refactor my Approach and still have the negative numbers included, would look like this.

function factorial3f(num) {
    if (num > 0) {
        var result = 1;
        for (i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    else {
        var result = -1;
        for (i = -2; i >= num; i--) {
            result *= i;
        }
        return result;
    }
}
       



//----------------------------------------------------------------------------




//TASK 3: Write a function kebabToSnake() which takes a single kebab-cased  string argument and returns the snake-cased version. Basically, replace "-" with "_".

//My approach: didnt get it to work, because I didnt assign the value of the replace function to a new variable.
function kebabToSnake(kebab) {
    kebab.replace(/-/g, "_");
    return kebab;
};


//Colt Steeles Solution:
function kebabToSnake2(str) {
//replace all "-" with "_"
var newStr = str.replace(/-/g, "_"); 
//return str
return newStr;
}