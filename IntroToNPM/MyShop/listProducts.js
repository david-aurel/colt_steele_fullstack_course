var fake = require('faker');

console.log("==================")
console.log("WELCOME TO MY SHOP")
console.log("==================")

//repeat x times
for (var i = 0; i < 10; i++){

	//generate item
	var randomItem = fake.fake("{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.product}} - {{commerce.price}}");

	//print
	console.log(randomItem + "$")
	
}

