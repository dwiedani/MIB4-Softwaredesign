class Player {
  private readonly name : string;

  private score : number;

  constructor(_name : string) {
    this.name = _name;
    this.score = 0;
  }

  addScore() {
    this.score++;
  }

  getName() {
    return this.name;
  }

  getScore() {
    return this.score;
  }
}
