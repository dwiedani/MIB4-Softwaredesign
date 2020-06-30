import {Question} from "./Question";

class EstimationQuestion extends Question {
  private answer : number;

  private delta : number;

  constructor(_question : string, _answer: number, _delta: number) {
  	super(_question);
  	this.delta = _delta;
  }

  evaluateAnswer(_answer : number) {
  		if (_answer <= this.answer + this.delta && _answer >= this.answer - this.delta) {
  			return true;
  		}
  			return false;
  	}
}
