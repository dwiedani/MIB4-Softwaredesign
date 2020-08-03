import {Game} from './Game';
import {Interaction} from './Interaction';

export class Instruction {
    information: string;
    command: string;
    options: string[];

    constructor(command: string, game: Game) {
        switch(command){
            case "info":
                this.command = command;
                this.information = game.currentStage.getStageInformation();
                this.options = game.currentStage.getStageActionOptions();
                this.options = this.options.concat(game.player.getActionOptions());
                break;
            case "u":
                this.command = command;
                this.information = "(Bag: "+ game.player.items.length + "/" + game.player.bagSize +" ) Wich Item do you want to use?";
                this.options = game.player.getItemOptions();
                break;
            case "m":
                this.command = command;
                this.information = "Where do you want to go?"
                this.options = game.currentStage.getNextStageOptions();
                break;
            case "t":
                this.command = command;
                this.information = "What do you want to take?"
                this.options = game.currentStage.getItemOptions();
                break;
            default:
                this.command = 'info';
                this.information = game.currentStage.getStageInformation();
                this.options = game.currentStage.getStageActionOptions();
                break;
        }
    }

    public toString():string {
        let output: string = this.command + ": ";
        output += this.information + " <br> ";
        for (let option of this.options) {
            output += option + " <br> ";
        }
        return output;
    }

    public do(option: number, game: Game): string{
        switch(this.command){
            case "m":
                if(game.movePlayer(option)) {
                    return "moved to " + this.options[option];
                } else {
                    return "the door is locked.";
                }
            case "t":
                if(game.player.items.length < game.player.bagSize){
                    game.player.takeItem(game.currentStage.giveItem(option));
                    return "took " + this.options[option] + " from " + game.currentStage.name;
                } else {
                    return "Bag is full.";
                }
                break;
            case "u":
                return game.player.useItem(option,game);
            default:
                return "You cant do this here.";
        }
    }
}