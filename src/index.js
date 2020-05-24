import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class DeckShuffler extends React.Component {
  constructor(props) {
    super(props);
    var orig_deck = [];
    var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    var ordinal_num = 1
    for (var si = 0; si < suits.length; si++) {
      for (var vi = 0; vi < values.length; vi++) {
        orig_deck.push({
          'ordinal_num': ordinal_num,
          'suit': suits[si], 'value': values[vi]
        })
        ordinal_num += 1
      }
    }
    var shuffled_deck = orig_deck.slice()
    var seed = 777;
    shuffled_deck = shuffle(shuffled_deck, seed);
    this.state = {
      seed: seed,
      shuffled_seed: seed,
      orig_deck: orig_deck,
      deck: shuffled_deck,
      selected_player: 'player1',
      next_selected_player: 'player1',
    };

    this.handleSeedChange = this.handleSeedChange.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  handleSeedChange(event) {
    this.setState({ seed: event.target.value });
  }

  handleShuffle(event) {
    const orig_deck = this.state.orig_deck.slice();
    const shuffled_deck = shuffle(this.state.orig_deck, this.state.seed);

    this.setState({
      orig_deck: orig_deck,
      deck: shuffled_deck,
      shuffled_seed: this.state.seed,
      selected_player: this.state.next_selected_player,
    })
  }

  handleOptionChange = changeEvent => {
    this.setState({
      next_selected_player: changeEvent.target.value
    });
  };

  render() {
    var player_num;
    switch (this.state.selected_player) {
      case 'player1':
        player_num = 1;
        break;
      case 'player2':
        player_num = 2;
        break;
      case 'player3':
        player_num = 3;
        break;
      case 'player4':
        player_num = 4;
        break;
      default:
        break
    }
    const deck_str = printDeck(this.state.deck, player_num);
    // For Debug
    // const deck_str1 = printDeck(this.state.deck, 1);
    // const deck_str2 = printDeck(this.state.deck, 2);
    // const deck_str3 = printDeck(this.state.deck, 3);
    // const deck_str4 = printDeck(this.state.deck, 4);
    return (
      <div className='deck_shuffler'>
        <h1>Card Deck Shuffler</h1>
        <p>
          A random card deck shuffler, useful to help set up 4 player card games.
          Especially useful when players are remote from one another.
        </p>
        <h2>Instructions:</h2>
        <p>
          Gather a group of 4 remote players, each with a deck of cards and this webpage open.
          Assign each person a player number and have everyone select their individual player number on this page.
          Pick a "Seed" for the game. This can be any string of characters and is used to create a random
          shuffle of the cards. Every player must enter in the same seed. Then click the "Shuffle" button
          and each player will see their particular set of cards for the game. When you want to play another game,
          simply pick a new "Seed" and click "Shuffle" again. Best played with a trustworthy group,
          since this simple website does not prevent "peaking" at other hands.
        </p>

        <form>
          <p><b>Player Number:</b></p>
          <div className='form-check'>
            <label>
              <input
                type='radio'
                value='player1'
                checked={this.state.next_selected_player === 'player1'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
      Player 1
    </label>
          </div>

          <div className='form-check'>
            <label>
              <input
                type='radio'
                value='player2'
                checked={this.state.next_selected_player === 'player2'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
      Player 2
    </label>
          </div>

          <div className='form-check'>
            <label>
              <input
                type='radio'
                value='player3'
                checked={this.state.next_selected_player === 'player3'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
      Player 3
    </label>
          </div>

          <div className='form-check'>
            <label>
              <input
                type='radio'
                value='player4'
                checked={this.state.next_selected_player === 'player4'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
      Player 4
    </label>
          </div>

        </form>

        <p><b>Seed:</b></p>
        <input type='text' id='seed_input'
          value={this.state.seed}
          onChange={this.handleSeedChange}
        ></input>


        <p></p>
        <button onClick={this.handleShuffle}>
          Shuffle
        </button>

        <h2>Shuffled Results:</h2>
        <p>Using Seed: {this.state.shuffled_seed}</p>

        <p><b>Hand for Player {player_num}:</b></p>
        <p><b>&#9827;</b> <b>Clubs:</b></p>
        <p>{deck_str[0]}</p>
        <p><b style={{ 'color': 'red' }}>&#9830;</b> <b>Diamonds:</b></p>
        <p>{deck_str[1]}</p>
        <p><b style={{ 'color': 'red' }}>&#9829;</b> <b>Hearts:</b></p>
        <p>{deck_str[2]}</p>
        <p><b>&#9824;</b> <b>Spades:</b></p>
        <p>{deck_str[3]}</p>
        {/*
      <br></br>
      <p>Deck results Player 1:</p>
      <p>Clubs: {deck_str1[0]}</p>
      <p>Diamonds: {deck_str1[1]}</p>
      <p>Hearts: {deck_str1[2]}</p>
      <p>Spades: {deck_str1[3]}</p>
      <br></br>
      <p>Deck results Player 2:</p>
      <p>Clubs: {deck_str2[0]}</p>
      <p>Diamonds: {deck_str2[1]}</p>
      <p>Hearts: {deck_str2[2]}</p>
      <p>Spades: {deck_str2[3]}</p>
      <br></br>
      <p>Deck results Player 3:</p>
      <p>Clubs: {deck_str3[0]}</p>
      <p>Diamonds: {deck_str3[1]}</p>
      <p>Hearts: {deck_str3[2]}</p>
      <p>Spades: {deck_str3[3]}</p>
      <br></br>
      <p>Deck results Player 4:</p>
      <p>Clubs: {deck_str4[0]}</p>
      <p>Diamonds: {deck_str4[1]}</p>
      <p>Hearts: {deck_str4[2]}</p>
      <p>Spades: {deck_str4[3]}</p>
      */}
      </div>
    );
  }

}

function sort_by_key(array, key) {
  return array.sort(function (a, b) {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

function printDeck(deck_array, player_num) {
  var player_cards;
  if (player_num === 1) {
    player_cards = deck_array.slice(0, 13);
  } else if (player_num === 2) {
    player_cards = deck_array.slice(13, 26);
  } else if (player_num === 3) {
    player_cards = deck_array.slice(26, 39);
  } else if (player_num === 4) {
    player_cards = deck_array.slice(39, 52);
  }
  var clubs = [];
  var diamonds = [];
  var hearts = [];
  var spades = [];
  for (var i = 0; i < player_cards.length; i++) {
    if (player_cards[i]['suit'] === 'Clubs') {
      clubs.push(player_cards[i])
    } else if (player_cards[i]['suit'] === 'Diamonds') {
      diamonds.push(player_cards[i])
    } else if (player_cards[i]['suit'] === 'Hearts') {
      hearts.push(player_cards[i])
    } else if (player_cards[i]['suit'] === 'Spades') {
      spades.push(player_cards[i])
    } else {
      console.log('Error, bad suit')
    }
  }
  clubs = sort_by_key(clubs, 'ordinal_num');
  diamonds = sort_by_key(diamonds, 'ordinal_num');
  hearts = sort_by_key(hearts, 'ordinal_num');
  spades = sort_by_key(spades, 'ordinal_num');

  var clubs_res = ''
  for (i = 0; i < clubs.length; i++) {
    clubs_res += ' ' + clubs[i]['value'];
  }

  var diamonds_res = '';
  for (i = 0; i < diamonds.length; i++) {
    diamonds_res += ' ' + diamonds[i]['value'];
  }

  var hearts_res = '';
  for (i = 0; i < hearts.length; i++) {
    hearts_res += ' ' + hearts[i]['value'];
  }

  var spades_res = '';
  for (i = 0; i < spades.length; i++) {
    spades_res += ' ' + spades[i]['value'];
  }


  return [clubs_res, diamonds_res, hearts_res, spades_res]
}


function shuffle(array, seed) {
  // From: https://stackoverflow.com/a/2450976/11919380
  var seedrandom = require('seedrandom');
  var rng = seedrandom(seed);
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(rng() * currentIndex);
    // randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// ========================================

ReactDOM.render(
  <DeckShuffler />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
