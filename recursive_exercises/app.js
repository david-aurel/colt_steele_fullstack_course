// Warm up

// 1. Reverse a string
function reverseString(str) {
    if (str === '') {
        return str;
    } else {
        return str = str.charAt(str.length-1) + reverseString(str.slice(0, -1));
    };
};

console.log('Reverse "Hello":')
console.log(reverseString('Hello'))


// 2. Fibonacci Number
function fibonacci(num) {
    if (num = 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

console.log(fibonacci(13))
