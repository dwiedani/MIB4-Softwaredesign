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
var Question = require("./Question");
var FreeTextQuestion = /** @class */ (function (_super) {
    __extends(FreeTextQuestion, _super);
    function FreeTextQuestion(_question, _answer) {
        return _super.call(this, _question) || this;
    }
    FreeTextQuestion.prototype.evaluateAnswer = function (_answer) {
        if (_answer === this.answer)
            return true;
        return false;
    };
    return FreeTextQuestion;
}(Question));
module.exports = FreeTextQuestion;
