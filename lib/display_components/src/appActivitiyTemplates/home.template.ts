import { html } from 'lit';
import { ActivityTemplate } from '../types/activities.js';
import type { DefaultAppActivities } from './definitions.js';


export default <ActivityTemplate<DefaultAppActivities>>{
    activityName: 'home',
    render: () => html`<application-list></application-list>`
};