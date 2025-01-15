import { registerActivityContainers, registerGameContainerElements, registerListElements, registerMenuElements } from './webcomponents/index.js';

export * from './contexts/index.js';
export * from './events/index.js';
export * from './util/index.js';
export * from './types/index.js';
export * from './interfaces/index.js';
export * from './injection/index.js';
export * from './webcomponents/index.js';
export * from './constants/index.js';
export * from './typeguards/index.js';

export function registerAllComponents(): void {
    registerMenuElements();
    registerListElements();
    registerGameContainerElements();
    registerActivityContainers();
}