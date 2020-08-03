namespace Textadventure {
    export class InOutManager {
        public readLine(question: string,){
            let check = prompt(question, '');
            return check;
        }
        public printLine(message: string){
            alert(message);
        }
    }
}