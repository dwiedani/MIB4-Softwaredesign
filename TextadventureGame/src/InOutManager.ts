import {GameManager} from './GameManager';

export class InOutManager {
    public readLine(question: string,):string {
        let check = prompt(question, '');
        return check;
    }
    public printLine(message: string){
        alert(message);
    }
}

export class UIManager {
    input: HTMLInputElement;
    output: HTMLElement;
    return: HTMLElement;
    gameManager: GameManager;

    constructor(gameManager: GameManager){
        this.gameManager = gameManager;
        this.input = document.createElement('input') as HTMLInputElement;
        this.output = document.createElement('div');
        this.return = document.createElement('button');
        this.return.innerHTML = "Enter";
        this.return.addEventListener("click", this.clickHandler);
        this.input.addEventListener("keyup", this.buttonHandler);
        document.body.appendChild(this.output);
        document.body.appendChild(this.input);
        document.body.appendChild(this.return);
    }

    clickHandlerUnbinded(e)  {
        this.gameManager.doAction();
    }
    clickHandler = this.clickHandlerUnbinded.bind(this);

    buttonHandlerUnbinded(e, key: string)  {
        if (e.keyCode === 13) {
            this.gameManager.doAction();
            this.input.value = "";
        }
    }
    buttonHandler = this.buttonHandlerUnbinded.bind(this);

    public readLine():string {
        return (this.input).value;
    }
    public printLine(message: string){
        message = "<p>" + message + "</p>";
        this.output.innerHTML += message;
    }
}