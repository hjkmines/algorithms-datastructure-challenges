// Clear out the mess to start!
console.clear();

// Define the Card Class
var Card = (function(){
  // Member Vars
  //index: '# 0-51 signifies the index of a card in a new deck of cards'
  //value: 'numerical value: 1 - 13'
  //suit: 'spades, diamonds, clubs, hearts'
  
  // Prototype members
  //number: '2 - 10, J, Q, K, A'
  //name: ' {number} of {suit} '
  
  //          ['Spades', 'Diamonds', 'Clubs', 'Hearts']
  var suitNames = ['spades', 'diamonds', 'clubs', 'hearts'],
      suitCodes = ['\u2660', '\u2666', '\u2663', '\u2665'],
      Card = function(index){
        this.index = index;
        this.value = (index % 13)+1;
        this.suit = suitNames[Math.floor(index/13)];
      };
  
  Card.prototype = {
    get number() {
      switch(this.value) {
        case 11:
          return 'J';
        case 12:
          return 'Q';
        case 13:
          return 'K';
        case 1:
          return 'A';
        default:
          return this.value;
      }
      return this.value;
    },
    get name() {
      var numberName = (function(n){
        switch(n){
          case 'A': return 'Ace';
          case 'K': return 'King';
          case 'Q': return 'Queen';
          case 'J': return 'Jack';
          default: return n;
        }
      })(this.number);
      return numberName + ' of ' + this.suit;
    },
    get suitUnicodeArray() { return suitCodes; },
    get suitNameArray() { return suitNames; }
  };
            
  return Card;
})();

console.log(new Card(13));

/*** START GAME SETUP ***/

// Create Deck of cards
var deck = Array.apply(null, Array(52)).map(function(_, i){ return new Card(i); });

//for( var i = 0 ; i < 13 ; i++ ){
  //console.log( deck[i] );
//}

// Create player decks
var playerDeck = [], cpuDeck = [],
    drawIndex;

// Deal cards to players (2)
while( deck.length > 0 ){
  
  // Draw Card for Player
  drawIndex = Math.random() * deck.length;
  playerDeck.push( deck.splice(drawIndex, 1)[0] );
  
  // Draw Card for CPU
  drawIndex = Math.random() * deck.length;
  cpuDeck.push( deck.splice(drawIndex.cpu, 1)[0] );
  
}

/*** END GAME SETUP ***/

// Gameplay
// push button to draw and play card
// winner takes cards, added to bottom of their deck
// tie, play another card
// game ends when one player is out of cards

// Single Round
var drawAndPlay = function(rewards){
  if( rewards ){ console.log('rewards = ', rewards); }
  
  // if either deck is empty, game over
  if( playerDeck.length === 0 || cpuDeck.length === 0 ){
    // game over
    if( playerDeck.length > 0 ){
      console.log('Player Won');
    } else {
      console.log('CPU Won');
    }
    return false;
  }
  // draw card from each deck
  var playerCard = playerDeck.shift(),
      cpuCard = cpuDeck.shift(),
      rewards = rewards ? rewards : [];
  
  // Update View for Drawn Cards TODO: Optimize
  var playerSection = document.querySelector('section.player'),
      cpuSection = document.querySelector('section.cpu'),
      playerCardDiv = playerSection.querySelector('div.card'),
      cpuCardDiv = cpuSection.querySelector('div.card'),
      playerPoints = playerSection.querySelector('[data-points]'),
      cpuPoints = cpuSection.querySelector('[data-points]');
  
  Card.prototype.suitNameArray.forEach(function(v,i,a){
    playerCardDiv.classList.remove(v);
    cpuCardDiv.classList.remove(v);
    return true;
  });
  
  playerCardDiv.querySelector('span.name').innerHTML = playerCard.number;
  playerCardDiv.classList.add( playerCard.suit );
  playerSection.querySelector('div[data-cards-left]').setAttribute('data-cards-left', playerDeck.length);
  
  cpuCardDiv.querySelector('span.name').innerHTML = cpuCard.number;
  cpuCardDiv.classList.add( cpuCard.suit );
  cpuSection.querySelector('div[data-cards-left]').setAttribute('data-cards-left', cpuDeck.length);
  
  // compare cards
  if( playerCard.value === cpuCard.value ){
    console.log('tie', playerCard, cpuCard);
    // tie
      // play another card
    rewards.push(playerCard);
    rewards.push(cpuCard);
    return drawAndPlay(rewards);
  } else if( playerCard.value > cpuCard.value ){
    // Player wins
    console.log('Player wins round', playerCard, cpuCard);
    // Add point to player score TODO
    playerPoints.setAttribute('data-points', parseInt(playerPoints.getAttribute('data-points'))+1)
    
    // Reward Cards
    playerDeck.splice(playerDeck.length, 0, playerCard, cpuCard);
    if( rewards.length > 0 ){
      playerDeck = playerDeck.concat(rewards);
    }
    
  } else {
    // CPU Wins
    console.log('CPU wins round', playerCard, cpuCard);
    // Add point to CPU score TODO
    cpuPoints.setAttribute('data-points', parseInt(cpuPoints.getAttribute('data-points'))+1)
    
    // Reward Cards
    cpuDeck.splice(cpuDeck.length, 0, cpuCard, playerCard);
    if( rewards.length > 0 ){
      cpuDeck = cpuDeck.concat(rewards);
    }
    
  }
  
  console.log('Player Cards left = '+playerDeck.length, 'CPU Cards left = '+cpuDeck.length);
  return true;
};



window.onload = function(){
  var btn = document.querySelector('button.draw');
  btn.addEventListener('click', function(event){
    var keepGoing = drawAndPlay();
    if( !keepGoing ){
      alert('Game Over');
      clearInterval(window.intervalID);
    }
  });