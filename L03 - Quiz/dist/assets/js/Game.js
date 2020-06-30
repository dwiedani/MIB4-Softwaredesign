var Game = (function () {
    function Game(_players, _questions, _playersTurn) {
        this.players = _players;
        this.questions = _questions;
        this.playersTurn = _playersTurn;
    }
    Game.prototype.getPlayer = function (index) {
        return this.players[index];
    };
    Game.prototype.getQuestion = function (index) {
        return this.questions[index];
    };
    return Game;
})();
