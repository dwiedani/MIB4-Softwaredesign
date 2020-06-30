var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var YesNoQuestion = (function (_super) {
    __extends(YesNoQuestion, _super);
    function YesNoQuestion(_question, _answer) {
        _super.call(this, _question);
        this.answer = _answer;
    }
    YesNoQuestion.prototype.evaluateAnswer = function (_answer) {
        if (this.answer === _answer) {
            return true;
        }
        return false;
    };
    return YesNoQuestion;
})(Question);
