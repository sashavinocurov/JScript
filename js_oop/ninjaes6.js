class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName(){
        console.log('My name is ${this.name}');
    }
    showStats(){
        console.log('Name: ${this.name} Health: ${this.health} Strength: ${this.strength} Speed: ${this.speed}');
    }
    drinkSake(){
        this.health +=10;
        return this.health;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();{
            console.log('My wisdom speaks for it self!')
        }
    }
}

const superSensei = new Sensei("Mario");
superSensei.speakWisdom();
superSensei.showStats();