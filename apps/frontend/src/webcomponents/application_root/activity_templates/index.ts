import { RegisteredActivity } from '@shieldmaidengames/webgames-display-components';
import find_game from './find_game.template.js';
import join_game from './join_game.template.js';
import start_game from './start_game.template.js';
import welcome from './welcome.template.js';

import { TemplateResult } from 'lit';

const activity_templates: Record<RegisteredActivity, (props: any) => TemplateResult> = {
    welcome,
    find_game,
    join_game,
    start_game
};

export { activity_templates };