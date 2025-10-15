import { html, LitElement, ReactiveController, TemplateResult } from 'lit';
import { ActivityTemplateRegistry, BaseTemplateFunction, RegisteredActivity } from '../../types/index.js';
import { state } from 'lit/decorators.js';

/**
 * Base class for all activity containers
 * 
 * Activity containers can be thought of as coordinating elements that allow the display of different
 * interface elements (activities) during the application lifecycle.  The frontend `application-root`
 * is an activity container, but other uses for activity containers might be a menu that has to display
 * different options based on context, or a settings dialog that has multiple tabs but shares buisness
 * logic.
 * 
 * The container acts by receiving an ActivityTemplate Registry, and using it to render the desired
 * activity.  By default, these templates receive no arguments, but this can be changed by overriding
 * the `renderCurrentActivity` method, and supplying a different genericType
 */
export default abstract class BaseActivityContainer<
    AllowedActivities extends string,
    RenderType extends BaseTemplateFunction = BaseTemplateFunction,
    RegistryType extends ActivityTemplateRegistry<AllowedActivities, RenderType> = ActivityTemplateRegistry<AllowedActivities, RenderType>
> extends LitElement {

    /**
     * What activity is currently being shown?
     * 
     * Note that this is a state property, changing it will cause a rerender.
     * set using `setActivity()`
     * 
     * For ease of use, retrieve the current template with `getCurrentActivityTemplate()`
     * 
     * @see setActivity
     * @see getCurrentActivityTemplate
     */
    @state()
    protected _currentActivity?: RegisteredActivity<RegistryType>;

    /**
     * Getter for controller acccess
     */
    public get currentActivity() {
        return this._currentActivity;   
    };

    /**
     * Set the activity template to be rendered in this container
     * 
     * This will trigger a re-render unless the new activity matches the current one.
     */
    public setActivity(newActivity: RegisteredActivity<RegistryType>) {
        if (this._currentActivity === newActivity) {
            // don't trigger any rerender or anything
            console.info('Specified activity is already active: ', {activity: newActivity});

            return;
        }

        this._currentActivity = newActivity;
    }

    /**
     * The reactive controller for this element
     * 
     * This should usually be set using the deps object as a part of the IInjectableHost flow,
     * but can be created manually if desired.
     */
    protected controller?: ReactiveController;

    /**
     * Map of activity name -> activity template function
     * 
     * This should usually be set using the deps object as a part of the IInjectableHost flow,
     * but can be created manually if desired.  Either source should probably be set using
     * the `setActivityRegistry()` method in order to correctly initialize the container.
     * 
     * @see setActivityRegistry
     * @see getCurrentActivityTemplate
     */
    protected activities?: RegistryType;

    /**
     * Which activity should the container show by default?
     * 
     * This default rendering is handled in the `setActivityRegistry()` method.
     */
    protected abstract defaultActivity: RegisteredActivity<RegistryType>;


    /**
     *  Supply a new activity registry to the container and render the default activity.
     */
    protected setActivityRegistry(newRegistry: RegistryType): void {
        this.activities = newRegistry;

        if (this._currentActivity === undefined) {
            this.setActivity(this.defaultActivity);
        }
    }

    /**
     * Retrieve the template function that was defined for the current
     */
    protected getCurrentActivityTemplate(): RegistryType[any]['render'] | undefined {
        if (this._currentActivity === undefined || this.activities === undefined) {
            return undefined;
        }

        return this.activities[this._currentActivity].render;
    }

    /**
     * Render the current activity template.  This can be overriden in the case that
     * the RenderType requires parameters passed in.
     */
    protected renderCurrentActivity(): TemplateResult {
        const activity = this.getCurrentActivityTemplate();
        
        if (activity === undefined) { 
            return html``;
        }

        return activity();
    }
}