import { LitElement, TemplateResult } from 'lit';
import { DevInstance, GameInstance, SmgGameDefinition, SmgPlayer } from '@shieldmaidengames/multipipe-shared';
export default class GameList extends LitElement {
    gameDefinition?: SmgGameDefinition;
    gameList: GameInstance[];
    devList: DevInstance[];
    player?: SmgPlayer;
    protected render(): TemplateResult;
    protected renderNormalGames(): TemplateResult;
    protected renderDevGames(): TemplateResult;
    protected renderListItem(itemDetails: GameInstance): TemplateResult;
    protected handleStartGameClick(e: Event): void;
    protected handleJoinGameClick(gameInfo: GameInstance): void;
}
//# sourceMappingURL=game_list.d.ts.map