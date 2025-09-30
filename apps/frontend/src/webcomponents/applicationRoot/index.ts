import ApplicationRoot from './applicationRoot.js';

export function registerApplicationRoot(): void {
    console.info('registering Application root');
    ApplicationRoot.prototype;
}

export { default as ApplicationRootController } from './applicationRootController.js';
export * from './definitions.js';
export { ApplicationRoot };
