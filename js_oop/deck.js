let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
let numericalValue = {
    1 : 2,
    2 : 3,
    3 : 4,
    4 : 5, 
    5 : 6,
    6 : 7,
    7 : 8, 
    8 : 9,
    9 : 10,
    10 : 'Jack',
    11 : 'Queen',
    12 : 'King',
    13 : 'Ace',
}

class Card{
    constructor(suit, value){
        this.suit = suit;
        this. value = value;
    }
}

class Deck{
    constructor(){
        this.deck =[];
    }

    createDeck(suits, values){
        for(let suit of suits){
            for(let value of values){
                this.deck.push(new Card(suit,value));
            }
        }
        return this.deck;
    }
    shuffle(array){
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        
        return array;
    }
    deal(){
        let hand = [];
        while(hand.length < 1){
            hand.push(this.deck.pop());
        }
        return hand;
    }
}

