import {Question} from "./Question";

class MultipleAnswerQuestion extends Question {
  private answers;

  constructor(_question : string, _answers) {
    super(_question);
    this.answers = _answers;
  }

  evaluateAnswer(_answer : string) {
    return this.answers.get(_answer);
  }
}
