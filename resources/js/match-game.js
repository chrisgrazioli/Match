var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function(){
  var $game=$('#game');
  var values=MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var unplaced=[];
  for(i=1; i<9; i++){
    unplaced.push(i);
    unplaced.push(i);
  }
  var cardValues=[];
  while (unplaced.length>0) {
    var random_index=Math.floor(Math.random()*unplaced.length); //zero to length of unplaced
    cardValues.push(unplaced[random_index]);
    unplaced.splice(random_index,1); //deletes 1 array item at index )
  }
  return cardValues;//changed name to reflect "cardValues" which was already chosen for me
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors=[          // a list of 8 colors which will
    'hsl(25,85%,65%)',  // be indexed from
    'hsl(55,85%,65%)',  // colors[0] to colors[7]
    'hsl(90,85%,65%)',
    'hsl(160,85%,65%)',
    'hsl(220,85%,65%)',
    'hsl(265,85%,65%)',
    'hsl(310,85%,65%)',
    'hsl(360,85%,65%)'];

  $game.empty(); //clears the board (game object?)
  $game.data('flippedCards',[]); //initializes and sets to empty key/val pair on game obj.
  for(var i=0; i< cardValues.length; i++){
    var value=cardValues[i]; // gets the # on the card from the randomized array
    var color=colors[value-1]; // number on the card minus 1 is a color 0-7 in colors array
    var data={
      value:value,
      color:color,
      isFlipped:false
    };

    var $cardElement=$('<div class="card col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>');
    $cardElement.data(data);

    $game.append($cardElement);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
