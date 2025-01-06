import { InjectionRequest, injectionResolverFactory, registerMenuElements, WelcomeMenu } from '@shieldmaidengames/multipipe-display-components';
import { FrontendContainer } from './frontend_deps.js';

const applicationContainer = document.getElementById('application-container');

if (applicationContainer === null) {
    throw new Error('unable to identify application container');
}

console.log('bootstrapping');
const resolver = injectionResolverFactory(FrontendContainer);
window.addEventListener(InjectionRequest.EVENT_NAME, (e) => {
    if (!(e instanceof InjectionRequest)) {
        console.log('Non-injection request caught in handler');
        return;
    }

    e.preventDefault();
    resolver(e);
});
registerMenuElements();

console.log('attaching');
applicationContainer.appendChild(new WelcomeMenu());