import { InjectionCue, injectionResolverFactory, registerAllComponents } from '@shieldmaidengames/webgames-display-components';
import { FrontendContainer } from './frontend_deps.js';
import { ApplicationRoot, registerApplicationRoot } from './webcomponents/index.js';

const resolver = injectionResolverFactory(FrontendContainer);
registerAllComponents();
registerApplicationRoot();

const Application = new ApplicationRoot();

document.addEventListener(InjectionCue.EVENT_NAME, (e) => {
    if (!(e instanceof InjectionCue)) {
        console.log('Non-injection request caught in handler');
        return;
    }
    console.log('trying to resolve for token', e.token);

    e.preventDefault();
    resolver(e);
});

console.log('attaching');
document.body.appendChild(Application);