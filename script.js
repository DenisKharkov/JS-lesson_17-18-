var counter = (function() {
	var count = 0;
	return function(num) {
		count = num !== undefined ? num : count;
		return count++;
	}
}());

//cчет от 0 до 3
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//cчет от 5 до 7

console.log(counter(5));
console.log(counter());
console.log(counter());

//cчет от 110 до 113

console.log(counter(110));
console.log(counter());
console.log(counter());
console.log(counter());
