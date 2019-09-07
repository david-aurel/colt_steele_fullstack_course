//functions for testing

var array = [1,2,3,4,5,6,7,8,9];
var array2 = ["a","b","c","d","e","f","g"];
var array3 = [1,1,1,1];
var array4 = [1,1,1,2];
var array5 = [10,3,10,4];
var array6 = [-5,100];



// 1. Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself).

function printReverse(array) {
    for (i = array.length -1; i >= 0; i--) {
        console.log(array[i]);
    };
};


//2. Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical.

function isUniform(array) {
    var item = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] !== item) {
            return false;
        };
    };
    return true;
};


//3. Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array.

function sumArray(array) {
    var sum = 0;
    array.forEach(function(element){
        sum += element;
    });
    return sum;
};


//4. Write a function max() that accepts an array of numbers and returns the maximum numbers in the array.

function max(array) {
    var maxVal = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] > maxVal) {
            maxVal = array[i];
        };
    };
    return maxVal;
};