import { createContext } from '@lit/context';
import { GameInstance } from '@shieldmaidengames/multipipe-shared';

export const gameContext = createContext<GameInstance>('game instance');