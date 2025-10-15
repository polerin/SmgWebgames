import { html } from 'lit';
import { ActivityTemplate } from '../types/activities.js';
import type { DefaultAppActivities } from './definitions.js';

export default <ActivityTemplate<DefaultAppActivities>>{
    activityName: 'welcome',
    render: () => html`<div class="welcome-activity">Hi please log in thanks</div>`
};