import { createContainer } from 'ditox';
import { FrontendBindings } from './frontend_deps.js';

const frontendContainer = createContainer();

FrontendBindings.bindInContainer(frontendContainer);

export { frontendContainer };