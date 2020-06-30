var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EstimationQuestion = (function (_super) {
    __extends(EstimationQuestion, _super);
    function EstimationQuestion(_question, _answer, _delta) {
        _super.call(this, _question);
        this.delta = _delta;
    }
    EstimationQuestion.prototype.evaluateAnswer = function (_answer) {
        if (_answer <= this.answer + this.delta && _answer >= this.answer - this.delta) {
            return true;
        }
        return false;
    };
    return EstimationQuestion;
})(Question);
