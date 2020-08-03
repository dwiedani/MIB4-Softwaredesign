namespace Textadventure {
    export class GameManager{

        inout: InOutManager = new InOutManager();

        public initializeGame(){
            let answer: String;
            while(answer !== 'n' || 'l'){
                answer = this.inout.readLine('New Game or Load? || n= New Game, l= Load Game');
                if('n' === answer){
                    console.log('game Created')
                    return new Game();
                }
            }
        }
    }
}