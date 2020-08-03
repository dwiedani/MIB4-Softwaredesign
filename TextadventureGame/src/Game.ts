import * as _stageData from '../data/stage.json';
let stageData = (<any>_stageData).stages;

import * as _playerData from '../data/player.json';
let playerData = (<any>_playerData).player;

import * as _gameData from '../data/game.json';
let gameData = (<any>_gameData).game;


import {Player} from './Character';
import {Stage} from './Stage';
import {Item} from './Item';

export class Game {
    player: Player;
    introduction: string;
    currentStageId: number;
    currentStage: Stage;
    stages: Stage[] = [];
    items: Item[];

    constructor(playerName: string) {
        this.introduction = gameData.introduction
        this.player = new Player(playerData, playerName)
        for (let stage of stageData){
            this.stages.push(new Stage(stage));
        }
        this.currentStage = this.stages[gameData.currentStageId];
    }

    public initiateAllStages(){
        for (let stage of this.stages){
            stage.initiateNextStages(this);
        }
    }

    public changeCurrentStage(stage: Stage){
        this.currentStage = stage;
    }


    public movePlayer(destination: number):boolean {
        let destinationStage = this.currentStage.nextStages[destination];
        if(!destinationStage.locked) {
            this.changeCurrentStage(destinationStage);
            return true;
        } else {
            return false;
        }
    }
}


