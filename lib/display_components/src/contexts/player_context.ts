import { createContext } from '@lit/context';
import { SmgPlayer } from '@shieldmaidengames/multipipe-shared';

export const playerContext = createContext<SmgPlayer | undefined>(Symbol('player instance'));