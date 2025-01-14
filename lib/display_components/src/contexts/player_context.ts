import { createContext } from '@lit/context';
import { SmgPlayer } from '@shieldmaidengames/webgames-shared';

export const playerContext = createContext<SmgPlayer | undefined>(Symbol('player instance'));