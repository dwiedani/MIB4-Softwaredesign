class YesNoQuestion extends Question {
  private answer : boolean;

  constructor(_question : string, _answer: boolean) {
  	super(_question);
  	this.answer = _answer;
  }

  evaluateAnswer(_answer : boolean) {
  	if (this.answer === _answer) {
  		return true;
  	}
  		return false;
  }
}
