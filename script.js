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


// обекты c "this"

var greet = function(){
  return 'Hi! My name is ' + this.name;
}

var person = {
  name: 'John',
  greet: greet,
  _age: 50,
  get age(){
    return this._age;
  },
  set age(value){
    this._age = value;
  }
}

var person2 = {
  name: 'Bob',
  greet: greet
}

console.log(person.greet());
console.log(person2.greet());

//геттер - сеттер

console.log(person.age);



