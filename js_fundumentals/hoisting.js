//1
//console hello was called first
//but there is no hello var called first
//output would be undefined 

console.log(hello);                                   
var hello = 'world'; 

//2
//var was named as haystack
//function was called, and hoist from the created function bellow
//output = magnet 

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

//3
//var was created
//function was named
//console log was called and that would pull out the variable first naming since there was no call for function
//output would be "super cool"

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//4
//var was named
//console log was called, it would print first var
//after function was called
//in created function was renaming of the war and calling of it, decloration of another var after calling it wasn't printed.
//outputs = "chicken", "half-chicken"

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

//5
//function was called
//but mean is a var that have a function inside
//so output would be error

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//6
//console was called but first output is undefined since var wasn't declared
//function was called it would print out rock and r&b
//and after var was called again that would display initial declared variable.
//output undefined, rock , r&b, disco 

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//7
//dojo was created and was given string of san jose
//dojo was called
//function was called
//inside the function dojo was renamed and printed, and var of dojo was created and var was called and printed
//and dojo was called again
//output = san jose, seattle, burbank, san jose 

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//8 bonus
//console log calling the function and creating two objects city where is dojo located and number of students,
//output Chicago, 50, true, closed for now

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}