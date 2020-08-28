class Card {
    constructor (suit, value) {
        this.suit = suit; 
        this.value = value; 
    }
}

class Deck {
    constructor() {
        this.deck = []; 
    }
    
    createDeck(suits, values) {
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(new Card(suit, value)); 
            }
        }
        return this.deck; 
    }

    shuffle() {
        let counter = this.deck.length, temp, i; 

        while(counter) {
            i = Math.floor(Math.random() * counter--) 
                temp = this.deck[counter]; 
                this.deck[counter] = this.deck[i]; 
                this.deck[i] = temp; 
            }
            return this.deck; 
        }
    

    deal() {
        let hand = []; 
        while(hand.length < 2) {
            hand.push(this.deck.pop()); 
        }
        return hand; 
    }
}

let suits = ['Hearts', 'Diamond', 'Clubs', 'Spades']; 
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']; 
let deck = new Deck(); 
deck.createDeck(suits, values); 
deck.shuffle();
console.log(deck.deal());  


//Method 2
class Deck {
    constructor() {
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
  
    deal(){
      return this.deck.pop();
    }
  }
  
  const deck1 = new Deck();
  deck1.shuffle()
  console.log(deck1.deck);
  deck1.deal()
  console.log(deck1.deck);

  class Card {
      constructor(suit, vale)
  }