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
var Question_1 = require("./Question");
var YesNoQuestion = /** @class */ (function (_super) {
    __extends(YesNoQuestion, _super);
    function YesNoQuestion(_question, _answer) {
        var _this = _super.call(this, _question) || this;
        _this.answer = _answer;
        return _this;
    }
    YesNoQuestion.prototype.evaluateAnswer = function (_answer) {
        if (this.answer === _answer) {
            return true;
        }
        return false;
    };
    return YesNoQuestion;
}(Question_1.Question));
exports.YesNoQuestion = YesNoQuestion;