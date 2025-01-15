import JoinGameCue from '../../../events/LoadGameCue.js';
import StartNewGameCue from '../../../events/StartNewGameCue.js';
import SwapActivityCue from '../../../events/SwapActivityCue.js';
import BaseInjectableController from '../../base_injectable_controller.js';
export default class FindGameActivityController extends BaseInjectableController {
    addListeners() {
        this.addEventListener(StartNewGameCue.EVENT_NAME, this.handleStartNewGameCue);
        this.addEventListener(JoinGameCue.EVENT_NAME, this.handleJoinGameCue);
    }
    handleStartNewGameCue(_e) {
        this.host?.dispatchEvent(new SwapActivityCue('join_game'));
    }
    handleJoinGameCue(_e) {
        this.host?.dispatchEvent(new SwapActivityCue('join_game'));
    }
}
//# sourceMappingURL=find_game_activity_controller.js.map