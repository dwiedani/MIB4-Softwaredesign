var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Question'], function (require, exports, Question) {
    var FreeTextQuestion = (function (_super) {
        __extends(FreeTextQuestion, _super);
        function FreeTextQuestion(_question, _answer) {
            _super.call(this, _question);
        }
        FreeTextQuestion.prototype.evaluateAnswer = function (_answer) {
            if (_answer === this.answer)
                return true;
            return false;
        };
        return FreeTextQuestion;
    })(Question);
    return FreeTextQuestion;
});
