import { ReactiveController, ReactiveControllerHost } from 'lit';
export default class WelcomeController implements ReactiveController {
    protected menuHost?: ReactiveControllerHost;
    constructor();
    addHost(host: ReactiveControllerHost): void;
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=welcome_controller.d.ts.map