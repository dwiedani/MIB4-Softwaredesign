import {Question} from "./components/Question";
import {Game} from "./Game";

export class GameManager {
  private game : Game;

  startGame(_players : Player[], _questions : Question[], _maxRounds : number) {
    this.game = new Game(_players, _questions, 0);
    const a = prompt('choose an option: Enter Question(E), Answer Question(A)', '');
    for (let i = 0; i < _maxRounds; i++) {
      this.game.getQuestion(i);
    }
  }
}
