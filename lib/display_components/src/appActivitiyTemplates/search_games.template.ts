import { html } from 'lit';
import { ActivityTemplate } from '../types/activities.js';
import type { DefaultAppActivities } from './definitions.js';

export default <ActivityTemplate<DefaultAppActivities>>{
    activityName: 'searchGames',
    render: () => html`<h1>search games template</h1>`
};