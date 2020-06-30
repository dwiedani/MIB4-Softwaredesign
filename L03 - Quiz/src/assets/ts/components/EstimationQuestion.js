"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Question = require("./Question");
var EstimationQuestion = /** @class */ (function (_super) {
    __extends(EstimationQuestion, _super);
    function EstimationQuestion(_question, _answer, _delta) {
        var _this = _super.call(this, _question) || this;
        _this.delta = _delta;
        return _this;
    }
    EstimationQuestion.prototype.evaluateAnswer = function (_answer) {
        if (_answer <= this.answer + this.delta && _answer >= this.answer - this.delta) {
            return true;
        }
        return false;
    };
    return EstimationQuestion;
}(Question));
