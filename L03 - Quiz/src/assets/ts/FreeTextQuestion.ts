import { Question } from './Question';

export class FreeTextQuestion extends Question {
  private answer : string;

  constructor(_question : string, _answer: string) {
  	super(_question);
  }

  evaluateAnswer(_answer : string) {
  		  if (_answer === this.answer) return true;
    return false;
  }
}
