namespace Textadventure {
    export class Item {
        private id: number;
        private name: String;
    }

    export class Consumable extends Item{
        private increaseHp: number;
        private increaseAttack: number;
        private increaseArmor: number;
    }

    export class Gear extends Item{
        private hp: number;
        private attack: number;
        private armor: number;
    }

    export class Key extends Item{
        private opensStage: number;
    }
}