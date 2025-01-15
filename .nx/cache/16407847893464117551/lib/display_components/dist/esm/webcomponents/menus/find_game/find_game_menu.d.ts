import { DevInstance, GameInstance, SmgHostedAppDefinition, SmgPlayer } from '@shieldmaidengames/webgames-shared';
import BaseMenu from '../base_menu.js';
import { TemplateResult } from 'lit';
export default class FindGameMenu extends BaseMenu {
    gameDefinition?: SmgHostedAppDefinition;
    gameList: GameInstance[];
    devList: DevInstance[];
    player?: SmgPlayer;
    protected render(): TemplateResult;
    protected handleStartGameClick(e: Event): void;
}
//# sourceMappingURL=find_game_menu.d.ts.map