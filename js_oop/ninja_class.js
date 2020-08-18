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
}

var ninja1 = new Ninja("Ninaninja");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
console.log(ninja1.displayHealth())