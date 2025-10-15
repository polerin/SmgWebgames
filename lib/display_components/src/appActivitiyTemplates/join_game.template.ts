import { html } from 'lit';
import { ActivityTemplate } from '../types/activities.js';
import type { DefaultAppActivities } from './definitions.js';

export default <ActivityTemplate<DefaultAppActivities>>{
    activityName: 'joinGame',
    render: () => html`<h1>join game template</h1>`
};