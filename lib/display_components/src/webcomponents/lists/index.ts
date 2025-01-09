import { GameList } from './game_list/index.js';

// Register all of the components with the window object
declare global {

  interface HTMLElementTagNameMap {
    "game-list": GameList;
  }
}

export function registerListElements() {
    console.log('registering list elements');
    GameList.prototype;
}