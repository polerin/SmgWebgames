import { InjectionRequest, injectionResolverFactory, registerMenuElements } from '@shieldmaidengames/multipipe-display-components';

registerMenuElements();
window.addEventListener(InjectionRequest.EVENT_NAME, injectionResolverFactory());
