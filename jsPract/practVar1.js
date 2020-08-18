var width = 100;
console.log(width);
width = 200;
console.log(width);

var width;
function setWidth() {
    var width = 100;
    console.log(width);
}
setWidth();

console.log(width);


var age = 100;
if(age > 12) {
    //let and const are won't be able to leak out of the scope 
    let dogYears = age * 7;
    console.log('You are ${dogYears} dog year old!');
}

// #########################################
// const variable cannot be updated when let variable ment to be updated. 
const key = 'abc123';
let points = 50;
let winner = false; 

// if (points > 40) {
//     console.log("it ran1");
//     let winner = true;
// }


for(let i = 0; i < 10; i++) {
    console.log(i)
    setTimeout(function(){
      console.log('The number is ' + i);
    },1000);
  }

// Temporal Dead zone is when you cant access any variable because is calling function is above object it self.
//ex: console.log (name);
//  (temporal dead zone)
//  (temporal dead zone)
//  (temporal dead zone)
// var name = 'stiv' 
// call function is above the object. thats mean object cant be called.




const names = ['wes', 'kait', 'lux'];


const fullNames = names.map(function(name){
  return`${name} bos`;
});

const fullNames2 = names.map(name => {
  return`${name} bos`;
});


const fullNames3 = names.map(name => `${name} bos`);

const fullNames4 = names.map(() => `cool bos`);

console.log(fullNames4);

////////////////////

const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winner.map((winner, i) => ({name: winner, race, place: i + 1}))

console.log(win);

const ages = [24,15,25,67,43,17,36,89,87,54];

const old = age.filter(age => age >= 60);
console.log(old);


/////////

