import { ReactiveController, ReactiveControllerHost } from 'lit';

export default class WelcomeController implements ReactiveController {
    protected menuHost?: ReactiveControllerHost;

    public constructor() {
    }

    addHost(host: ReactiveControllerHost): void {
        if (this.menuHost === undefined) {
            throw new Error('Attempting to add host to a controller that already has one');
        }

        this.menuHost = host;
        this.menuHost.addController(this);
    }

    hostConnected(): void {
        
    }

    hostDisconnected(): void {
        this.menuHost = undefined;        
    }
}