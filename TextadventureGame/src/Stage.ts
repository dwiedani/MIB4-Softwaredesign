import * as _npcData from '../data/npc.json';
let npcData = (<any>_npcData).npcs;

import * as _itemData from '../data/item.json';
let itemData = (<any>_itemData).items;

import {Item} from './Item';
import {Game} from './Game';
import {Character, NPC} from './Character';

export class Stage {
    id: number;
    name: string;
    information: String;
    nextStageIds: number[];
    nextStages: Stage[];
    items: Item[] = [];
    locked: boolean;
    characters: Character[] = [];

    constructor(attr: any[]){
        this.id = attr['id'];
        this.name = attr['name'];
        this.information = attr['information'];
        this.nextStageIds = attr['nextStages'];
        this.locked = attr['locked'];

        if(attr['items'].length > 0) {
            for (let _item of attr['items']){
                this.items.push(new Item(itemData[_item]));
            }
        }
        for (let npc of attr['npcs']){
            this.characters.push(new NPC(npcData[npc]));
        }
    }

    public getStageInformation(){
        let output: string = "This is " + this.information + ". ";

        if(this.characters.length > 1) {
            output += "There are some people: ";
            for (let character of this.characters) {
                output += "-" + character.name + '';
            }
            output += ". "
        }
        else if(this.characters.length == 1){
            output += "There is ";
            for (let character of this.characters) {
                output += character.name + '. ';
            }
        } else {
            output += "There are no people. "
        }

        if(this.items.length > 0) {
            output += "There are some Items: ";
            for (let item of this.items) {
                output += item.name + ' ';
            }

        } else {
            output += "There are no Items. "
        }

        output += "\n"
        return output;
    }

    public getStageActionOptions(): string[]{
        let output: string[] = [];
        if( this.items.length > 0 ){
            output.push('(t) - take \n');
        }
        if( this.characters.length > 0 ){
            output.push('(i) - interact \n');
        }
        if( this.nextStages.length > 0 ){
            output.push('(m) - move \n');
        }
        return output;
    }

    public getNextStageOptions(){
        let output: string[] = [];
        for(let i = 0; i < this.nextStageIds.length; i++) {
            output.push( "("+ i + ")" + " - " + this.nextStages[i].name );
        }
        return output;
    }

    public getItemOptions(){
        let output: string[] = [];
        for(let i = 0; i < this.items.length; i++) {
            output.push( "(" + i + ")" + " - " + this.items[i].name );
        }
        return output;
    }

    public removeCharacter(c: Character): Character{
        let index = this.characters.indexOf(c);
        return this.characters.splice(index,1)[0];
    }

    public addCharacter(c: Character){
        this.characters.push(c);
    }

    public initiateNextStages(game: Game){
        this.nextStages = []
        for(let i:number = 0; i < this.nextStageIds.length; i++ ){
            this.nextStages.push(game.stages[this.nextStageIds[i]]);
        }
    }

    public giveItem(index: number): Item{
        return this.items.splice(index,1)[0];
    }
}

