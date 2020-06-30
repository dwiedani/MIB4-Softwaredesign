import Player = require('./Player');
import Question = require('./components/Question');
import YesNoQuestion = require('./components/YesNoQuestion');
import GameManager = require('./GameManager');

const playerCount = prompt('How many Players?');
const gameManager = new GameManager();
let players: Player[];
let questions: Question[];

questions.push(new YesNoQuestion('Sind Eisbären Weiß?', true));
questions.push(new YesNoQuestion('Sind Eisbären Schwarz?', false));

players.push(new Player('Player0'));
players.push(new Player('Player1'));
players.push(new Player('Player2'));
gameManager.startGame(players, questions, 2);
