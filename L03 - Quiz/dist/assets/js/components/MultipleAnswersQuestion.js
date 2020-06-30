var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Question'], function (require, exports, Question) {
    var MultipleAnswerQuestion = (function (_super) {
        __extends(MultipleAnswerQuestion, _super);
        function MultipleAnswerQuestion(_question, _answers) {
            _super.call(this, _question);
            this.answers = _answers;
        }
        MultipleAnswerQuestion.prototype.evaluateAnswer = function (_answer) {
            return this.answers.get(_answer);
        };
        return MultipleAnswerQuestion;
    })(Question);
});
