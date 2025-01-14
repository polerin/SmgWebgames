import { bindMultiValue } from 'ditox';
import { SMG_GAME_SERVER_ROUTER_FACTORY_TOKEN, } from '@shieldmaidengames/webgames-internal-server-shared';
import { multipipeRouterFactory } from '../server/index.js';
export function addMultipipeBindings(container) {
    console.info('Binding Multipipe Tokens');
    // Binding the value as that is the only way we can collect multiple factories per token
    bindMultiValue(container, SMG_GAME_SERVER_ROUTER_FACTORY_TOKEN, multipipeRouterFactory);
    console.log(container.hasToken(SMG_GAME_SERVER_ROUTER_FACTORY_TOKEN));
}
//# sourceMappingURL=binding.js.map