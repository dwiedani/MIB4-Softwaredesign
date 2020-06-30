define(["require", "exports", './Player', './components/YesNoQuestion', './GameManager'], function (require, exports, Player, YesNoQuestion, GameManager) {
    var playerCount = prompt('How many Players?');
    var gameManager = new GameManager();
    var players;
    var questions;
    questions.push(new YesNoQuestion('Sind Eisbären Weiß?', true));
    questions.push(new YesNoQuestion('Sind Eisbären Schwarz?', false));
    players.push(new Player('Player0'));
    players.push(new Player('Player1'));
    players.push(new Player('Player2'));
    gameManager.startGame(players, questions, 2);
});
