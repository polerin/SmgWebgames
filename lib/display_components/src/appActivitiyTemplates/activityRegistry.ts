import { ActivityTemplateRegistry } from '@shieldmaidengames/webgames-display-components';
import home from './home.template.js';
import searchGames from './search_games.template.js';
import findGame from './find_game.template.js';
import joinGame from './join_game.template.js';
import startGame from './start_game.template.js';
import welcome from './welcome.template.js';
import type { DefaultAppActivities } from './definitions.js';

export const defaultAppActivityRegistry: ActivityTemplateRegistry<DefaultAppActivities> = {
    home: home,
    welcome: welcome,
    searchGames: searchGames,
    findGame: findGame,
    joinGame: joinGame,
    startGame: startGame,
};