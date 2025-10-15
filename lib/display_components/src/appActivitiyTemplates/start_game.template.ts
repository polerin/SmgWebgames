import { html } from 'lit';
import { ActivityTemplate } from '../types/activities.js';
import type { DefaultAppActivities } from './definitions.js';

export default <ActivityTemplate<DefaultAppActivities>>{
    activityName: 'startGame',
    render: () => html`<h1> Start game template </h1>`
};
