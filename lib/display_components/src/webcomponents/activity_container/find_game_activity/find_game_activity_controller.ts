import JoinGameCue from '../../../events/LoadGameCue.js';
import StartNewGameCue from '../../../events/StartNewGameCue.js';
import SwapActivityCue from '../../../events/SwapActivityCue.js';
import BaseInjectableController from '../../base_injectable_controller.js';
import { FindGameActivityDeps } from './definitions.js';

export default class FindGameActivityController extends BaseInjectableController<FindGameActivityDeps> {

    protected override addListeners(): void {
        this.addEventListener(StartNewGameCue.EVENT_NAME, this.handleStartNewGameCue);
        this.addEventListener(JoinGameCue.EVENT_NAME, this.handleJoinGameCue);
    }

    protected handleStartNewGameCue(_e: Event): void {
        this.host?.dispatchEvent(new SwapActivityCue('join_game'));
    }

    protected handleJoinGameCue(e: Event): void {
        this.host?.dispatchEvent(new SwapActivityCue('join_game'));
    }
}