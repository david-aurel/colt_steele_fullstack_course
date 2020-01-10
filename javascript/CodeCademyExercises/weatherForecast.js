// forecast for today in kelvin
const kelvin = 150;

// calculating celsius
let celsius = kelvin - 273;

// calculating fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// rounding the result of the fahrenheit calculation down
fahrenheit = Math.floor(fahrenheit);

// printing
console.log(`The temperature today is about ${fahrenheit} degrees Fahrenheit.`);

// extra Practice: convert celsius to newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

// printing again
console.log(`In Newton, that would be about ${newton} Newton.`);

WEWEEEEEEEE
