import { ApplicationList } from './application_list/index.js';
import { GameInstanceList } from './game_instance_list/index.js';

// Register all of the components with the window object
declare global {

  interface HTMLElementTagNameMap {
    "application-list": ApplicationList;
    "game-instance-list": GameInstanceList;
  }
}

export function registerListElements() {
    console.log('registering list elements');
    GameInstanceList.prototype;
    ApplicationList.prototype;
}

export * from './application_list/index.js';
export * from './game_instance_list/index.js';