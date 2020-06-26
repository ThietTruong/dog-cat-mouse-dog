var Dog = require('./Dog');
var Cat = require('./Cat.js');
var Mouse = require('./Mouse.js');
var dog = new Dog();
var cat= new Cat();
var mouse = new Mouse();
try{
	cat.eat(dog);
}
catch(error){
	console.log('cat just eat mouse');
}

console.log(cat);