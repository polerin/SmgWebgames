import { html } from 'lit';
import { ActivityTemplate } from '../types/activities.js';
import type { DefaultAppActivities } from './definitions.js';


export default <ActivityTemplate<DefaultAppActivities>>{
    activityName: 'findGame',
    render: () => html`<h1>find game template</h1>`
};