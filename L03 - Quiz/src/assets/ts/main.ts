import { Question } from './Question';

import { YesNoQuestion } from './YesNoQuestion';

import { Game } from './Game';
import { GameManager } from './GameManager';

import { Player } from './Player';


const playerCount = prompt('How many Players?');
const gameManager = new GameManager();
let players: Player[];
let questions: Question[];
questions.push(new YesNoQuestion('Sind Eisbaeren Weiß?', true));
questions.push(new YesNoQuestion('Sind Eisbaeren Schwarz?', false));

players.push(new Player('Player0'));
players.push(new Player('Player1'));
players.push(new Player('Player2'));
gameManager.startGame(players, questions, 2);
