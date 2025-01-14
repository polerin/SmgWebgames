import { createContext } from '@lit/context';
import { GameInstance } from '@shieldmaidengames/webgames-shared';

export const gameContext = createContext<GameInstance>('game instance');