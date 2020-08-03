namespace Textadventure {
    export class Character {
        private name: String;
        private hp: number;
        private attack: number;
        private armor: number;
        private items: Item[];
        private equippedItems: Item[];
        private gold: number;
    }

    export class Player extends Character {

        constructor() {
            super();
        }
    }

    export class NPC extends Character {
        private isAgressive: boolean;
        private interactions: Interaction[];

        constructor() {
            super();
        }
    }
}