import { FindGameActivityDeps } from './definitions.js';
import FindGameActivityController from './find_game_activity_controller.js';
import { TemplateResult } from 'lit';
import { IInjectableHost } from '../../../interfaces/index.js';
import BaseActivityContainer from '../base_activity_container.js';
import { GameInstance, SmgGameDefinition, SmgPlayer } from '@shieldmaidengames/multipipe-shared';
export default class FindGameActivity extends BaseActivityContainer implements IInjectableHost<FindGameActivityDeps> {
    protected controller?: FindGameActivityController;
    gameDefinition?: SmgGameDefinition;
    player?: SmgPlayer;
    controllerStatus: boolean;
    gameList: GameInstance[];
    connectedCallback(): void;
    inject(deps: FindGameActivityDeps): void;
    protected render(): TemplateResult;
}
//# sourceMappingURL=find_game_activity.d.ts.map