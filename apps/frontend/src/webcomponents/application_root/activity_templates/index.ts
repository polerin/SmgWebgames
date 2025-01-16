import { RegisteredActivity } from '@shieldmaidengames/webgames-display-components';
import home from './home.template.js';
import search_games from './search_games.template.js';
import find_game from './find_game.template.js';
import join_game from './join_game.template.js';
import start_game from './start_game.template.js';
import welcome from './welcome.template.js';

import { TemplateResult } from 'lit';

const activity_templates: Record<RegisteredActivity, (props: any) => TemplateResult> = {
    home,
    welcome,
    search_games,
    find_game,
    join_game,
    start_game
};

export { activity_templates };