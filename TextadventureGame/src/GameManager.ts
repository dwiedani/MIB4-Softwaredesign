import {Game} from './Game';
import {Instruction} from './Instruction';
import {InOutManager, UIManager} from './InOutManager';

export class GameManager{

    game: Game;
    inout: InOutManager = new InOutManager();
    ui: UIManager = new UIManager(this);
    win: boolean = false;
    instructionList: Instruction[] = [];

    public initializeGame(){
        this.game = new Game(this.inout.readLine('Type in player name'));
        this.game.initiateAllStages();
    }

    public runGame(){
        this.ui.printLine(this.game.player.name + ", " + this.game.introduction);
        this.doAction();
    }

    public step(){
        this.ui.printLine(this.instructionList[this.instructionList.length-1].toString());
    }

    public doAction(){
        if(this.instructionList.length > 0){
            let currentInstruction = this.instructionList[this.instructionList.length-1];
            switch(currentInstruction.command ){
                case "info":
                    this.instructionList.pop();
                    let action: string = this.ui.readLine();
                    let instruction = new Instruction(action, this.game);
                    this.instructionList.push(instruction);
                    break;
                default:
                    let option: string = this.ui.readLine();
                    let result = currentInstruction.do(Number(option), this.game);
                    if(result !== "false") {
                        this.ui.printLine(result)
                        this.instructionList.pop();
                        this.createInfoInstruction();
                    } else {
                        this.ui.printLine('this is no Option.')
                    }
            }
        } else {
            this.createInfoInstruction();
        }
        this.step();
    }

    public createInfoInstruction(){
        let instruction = new Instruction('info', this.game);
        this.instructionList.push(instruction);
    }
}