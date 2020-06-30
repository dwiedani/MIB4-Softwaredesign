var GameManager = (function () {
    function GameManager() {
    }
    GameManager.prototype.startGame = function (_players, _questions, _maxRounds) {
        this.game = new Game(_players, _questions, 0);
        var a = prompt('choose an option: Enter Question(E), Answer Question(A)', '');
        for (var i = 0; i < _maxRounds; i++) {
            this.game.getQuestion(i);
        }
    };
    return GameManager;
})();
