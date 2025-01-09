import { DevInstance, GameInstance, SmgGameDefinition, SmgPlayer } from '@shieldmaidengames/multipipe-shared';
import BaseMenu from '../base_menu.js';
import { TemplateResult } from 'lit';
export default class FindGameMenu extends BaseMenu {
    gameDefinition?: SmgGameDefinition;
    gameList: GameInstance[];
    devList: DevInstance[];
    player?: SmgPlayer;
    protected render(): TemplateResult;
    protected handleStartGameClick(e: Event): void;
}
//# sourceMappingURL=find_game_menu.d.ts.map