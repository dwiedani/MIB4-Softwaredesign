namespace Textadventure {
    export class Stage {
        id: number;
        information: String;
        nextStages: Stage[];
        items: Item[];
        locked: boolean;
    }
}
