import { gameData } from "../data/games/GameData";

export interface Game {
    name: string;
    provider: string;
    image: string;
    category: string;
    iconGameProvider: string;
  }
  
  export function fetchGameList(): Promise<Game[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gameData);
      }, 1500);
    });
  }
  