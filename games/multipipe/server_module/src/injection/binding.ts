import { SMG_HOSTED_APP_FACTORY_TOKEN } from '@shieldmaidengames/webgames-internal-server-shared';
import { Container, bindMultiValue } from 'ditox';
import { MultipipeApplication } from '../index.js';

export function bindMultipipeApp(container: Container): void {
    bindMultiValue(
        container,
        SMG_HOSTED_APP_FACTORY_TOKEN,
        (_container) => {
            return new MultipipeApplication();
        }
    )    
}