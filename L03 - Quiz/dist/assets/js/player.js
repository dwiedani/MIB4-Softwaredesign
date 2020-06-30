define(["require", "exports"], function (require, exports) {
    var Player = (function () {
        function Player(_name) {
            this.name = _name;
            this.score = 0;
        }
        Player.prototype.addScore = function () {
            this.score++;
        };
        Player.prototype.getName = function () {
            return this.name;
        };
        Player.prototype.getScore = function () {
            return this.score;
        };
        return Player;
    })();
    return Player;
});
