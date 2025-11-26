import * as serverShared from '@shieldmaidengames/webgames-internal-server-shared';
import { createMultiFactory } from '@shieldmaidengames/webgames-internal-shared';

import { createContainer, injectable} from 'ditox';
import path from 'path';

import * as serverTokens from './tokens.js';
import ApplicationHost from '../hostedApps/applicationHost.js';

/**
 * This is the top level dependency injection container for the server
 * 
 * Most of the time you won't need to alter these values, but it can be useful to
 * understand the basic flow of the application.  At it's core, this container
 * is responsible for using the bindings that have been supplied to create instances
 * of objects it understands.  Most hosted applications will require this container
 * for their bootstrapping, as they will be registering some required values, along
 * with their own dependencies.
 * 
 * This container collects all hosted applications, then supplies the objects that
 * are bound to the rest of the bootstrapping process.
 */
export const serverContainer = createContainer();

/**
 * This binds the path to the directory in which application artifacts
 * such as CSS, frontend javascript, and other related files are stored.
 * 
 * @todo come back and find a way to do this that doesn't risk adding a dir to the lib on accident
 */
serverContainer.bindValue(
    serverShared.SMG_HOSTED_APP_SERVER_ARTIFACT_ROOT_TOKEN,
    path.resolve(process.env.PWD ?? "./", './artifacts')
);

/** 
 * This creates the "multi-factory" for hosted application routes. Note that this
 * binding does not actually register any routes, just allows for the registration of
 * multiple factory methods.
 * 
 * If this feels a bit around the world, it's because ditox (by default) allows
 * for multiple value bindings, but not multiple factory bindings.
 * 
 * That said, it means that all Hosted applications only need to call bindMultiValue()
 * for SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN, supplying the factory function that
 * will create routes.  No other management is needed.
 */
serverContainer.bindFactory(
    serverShared.SMG_HOSTED_APP_SERVER_ROUTERS_TOKEN, 
    createMultiFactory(serverShared.SMG_HOSTED_APP_SERVER_ROUTER_FACTORY_TOKEN)
);

serverContainer.bindFactory(
    serverShared.SMG_HOSTED_APPS_TOKEN,
    createMultiFactory(serverShared.SMG_HOSTED_APP_FACTORY_TOKEN)
);

serverContainer.bindFactory(
    serverTokens.SMG_APPLICATION_HOST,
    injectable(
        (hostedApps) => new ApplicationHost(hostedApps),
        serverShared.SMG_HOSTED_APPS_TOKEN
    )
);