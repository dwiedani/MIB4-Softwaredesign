
export class Item {
    id: number;
    name: string;
    type: string
    increaseHp: number;
    bagSize: number;
    hp: number;
    attack: number;
    armor: number;
    opensStage: number;

    constructor(attr: any[]) {
        this.id = attr['id'];
        this.name = attr['name'];
        this.type  = attr['type'];
        this.increaseHp = attr['increaseHP'];
        this.bagSize = attr['bagSize'];
        this.hp = attr['hp'];
        this.attack = attr['attack'];
        this.armor = attr['armor'];
        this.opensStage = attr['opensStage'];
    }

    public toString(): string{
        let output: string = this.name;
        output += "{" + this.type + "}<br>";
        if( this.increaseHp !== 0){
            output += "+ restores " + this.increaseHp + "hp<br>";
        }
        if( this.bagSize !== 0){
            output += "+ " + this.bagSize + "Bagsize<br>";
        }
        if( this.hp !== 0){
            output += "+ " + this.hp + "hp<br>";
        }
        if( this.attack !== 0){
            output += "+ " + this.attack + "atk<br>";
        }
        if( this.armor !== 0){
            output += "+ " + this.armor + "def<br>";
        }
        return output;
    }
}