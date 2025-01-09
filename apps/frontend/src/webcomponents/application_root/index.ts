import ApplicationRoot from './application_root.js';

export function registerApplicationRoot(): void {
    console.info('registering Application root');
    ApplicationRoot.prototype;
}

export { default as ApplicationRootController } from './application_root_controller.js';
export * from './definitions.js';
export { ApplicationRoot };
