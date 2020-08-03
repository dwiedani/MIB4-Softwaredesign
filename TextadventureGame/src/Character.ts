import {Item} from './Item';
import {Interaction} from './Interaction';
import {Stage} from './Stage';
import {Game} from './Game';

export class Character {
    id: number;
    name: String;
    maxHp: number;
    hp: number;
    attack: number;
    armor: number;
    items: Item[];
    bagSize: number;
    equipped: Item[];

    constructor(attr: any[]) {
        this.id = attr['id'];
        this.name = attr['name'];
        this.maxHp = attr['maxHp'];
        this.hp = attr['hp'];
        this.attack = attr['attack'];
        this.armor = attr['armor'];
        this.items = attr['items'];
        this.bagSize = attr['bagSize'];
        this.equipped = attr['equipped'];
    }

    public move(current: Stage, destination: Stage):void {
        destination.addCharacter( current.removeCharacter(this) );
    }

    public giveItem(index: number): Item{
        return this.items.splice(index,1)[0];
    }

    public takeItem(item: Item){
        this.items.push(item);
    }

    public useItem(item: number, game: Game): string{
        switch (this.items[item].type){
            case "consumable":
                if(this.items[item].opensStage !== -1){
                    for(let stage of game.currentStage.nextStages){
                        if(stage.id === this.items[item].opensStage){
                            game.stages[this.items[item].opensStage].locked = false;
                            return "You opened " + stage.name;
                        } else {
                            return "You cant do this here."
                        }
                    }
                }
                break;
            case "equippable":
                let itemHold: Item = this.items[item];
                this.equipped.push(this.items.splice(item,1)[0]);
                this.maxHp += itemHold.hp;
                this.attack += itemHold.attack;
                this.armor += itemHold.armor;
                this.bagSize += itemHold.bagSize;
                return "You equipped " + itemHold.name + ".";
        }
        return "You cant use " + this.items[item].name;
    }

    public getItemOptions(){
        let output: string[] = [];
        for(let i = 0; i < this.items.length; i++) {
            output.push( "("+ i + ")" + " - " + this.items[i].toString() );
        }
        return output;
    }

    public getActionOptions(){
        let output: string[] = [];
        if( this.items.length > 0 ){
            output.push('(u) - use Item from Bag \n');
        }
        return output;
    }
}

export class Player extends Character {
    constructor(attr: any[], playerName: string) {
        super(attr);
        this.name = playerName;
        this.name = playerName;
    }
}

export class NPC extends Character {
    private isAggressive: boolean;
    private interactions: Interaction[];

    constructor(attr: any[]) {
        super(attr);
        this.isAggressive = attr['isAggressive'];
        this.interactions = attr['interactions'];
    }
}