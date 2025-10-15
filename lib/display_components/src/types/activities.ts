import { coerceToNonEmpty } from '@shieldmaidengames/webgames-shared';
import { TemplateResult } from 'lit';

/**
 * This is a type describing functions that take any set of arguments (or none) and
 * return a TemplateResult.  It is used as the basis for ActivityTemplates and
 * registries as it can be further narrowed to more specifically define the function
 * signature for an activity container's render.
 */
export type BaseTemplateFunction = 
    ((...args: any[]) => TemplateResult) |
    (() => TemplateResult);

/**
 * An activity template is a named chunk of markup that an ActivityHost can use to
 * render an appropriate view. They work best when they leave logic with webcomponents
 * who's markup they render.  
 */
export type ActivityTemplate<
    AllowedActivities extends string,
    RenderType extends BaseTemplateFunction = BaseTemplateFunction
> = {
        activityName: AllowedActivities;
        render: RenderType;
};

export function isActivityTemplate<
    RenderType extends BaseTemplateFunction = BaseTemplateFunction
>(subject: unknown): subject is ActivityTemplate<any, RenderType> {
    const activitiy = coerceToNonEmpty<ActivityTemplate<any>>(subject);

    if (activitiy === false) {
        return false;
    }

    return ('activityName' in activitiy &&
        typeof activitiy.activityName === 'string' &&
        'render' in activitiy &&
        typeof activitiy.render === 'function'
    );
}

/**
 * A map of activity names to their corisponding ActivityTemplate objects.
 * 
 * These can be supplied to elements extending BaseActivityContainer in order to
 * change the rendered output for each activity.
 * 
 * All activities in a registry must share a function signature.
 */
export type ActivityTemplateRegistry<
    AllowedActivities extends string,
    RenderType extends BaseTemplateFunction = BaseTemplateFunction,
> = {
    [ Activity in AllowedActivities ]: ActivityTemplate<AllowedActivities, RenderType>;
}

export function isActivityTemplateRegistry<
    RenderType extends BaseTemplateFunction = BaseTemplateFunction
>(subject: unknown): subject is ActivityTemplateRegistry<any, RenderType> {
    const registry = coerceToNonEmpty<ActivityTemplateRegistry<any>>(subject);

    if (registry === false) {
        return false;
    }

    for (const name in registry) {
        if (!isActivityTemplate(registry[name]) || registry[name].activityName !== name) {
            return false;
        }
    }

    return true;
}

/**
 * Utility type that eases type definition for activity names based in a registery
 * 
 * It contains a union of all keys in the registry.  These could potentially be
 * specified manually while setting the 'AllowedActivities' generic type of 
 * ActivityTemplateRegistry, but it leads to subclass complaints from typescript.
 */
export type RegisteredActivity<
    RegistryType extends ActivityTemplateRegistry<any> = ActivityTemplateRegistry<any>
> = keyof RegistryType;