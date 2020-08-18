function Ninja(name){
    this.name = name;
    this.health = 100;
    this.strength  = 3;
    this.speed = 3;

    this.sayName = function(){
        console.log("My name is "+this.name);
    }
    this.showStats = function(){
        console.log("Name: "+this.name+" Health: "+this.health+" Strength: "+this.strength+" Speed: "+this.speed);
    }
    this.drinkSake = function(){
        this.health +=10;
    }
    this.displayHealth = function(){
        return this.health;
    }
    this.punch = function(name){
        if (name instanceof Ninja ==true) {
            name.health -= 5; 
            console.log(name.name+" was punched by "+this.name+" and lost 5 Health");
        }
        else{
            console.log("Invalid input");
        }
    }
    this.kick= function(name){
        if(name instanceof Ninja == true){
            name.health -=15;
            this.strength -=1;
            console.log(name.name+" was punched by "+this.name+" and lost 5 Health");
        }
        else{
            console.log("Invalid input");
        }
    }
}

var red = new Ninja("Alex");
var blue = new Ninja ("Bill");
red.punch(blue);
red.kick(blue);
red.showStats();
blue.showStats();