import Player = require('./Player');
import Question = require('./components/Question');

class Game {
  private players : Player[];

  private questions : Question[];

  private playersTurn : number;

  constructor(_players : Player[], _questions : Question[], _playersTurn : number) {
    this.players = _players;
    this.questions = _questions;
    this.playersTurn = _playersTurn;
  }

  getPlayer(index : number) {
    return this.players[index];
  }

  getQuestion(index : number) {
    return this.questions[index];
  }
}
export = Game;
