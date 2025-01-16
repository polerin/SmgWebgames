import { createContext } from '@lit/context';
import { SmgUser } from '@shieldmaidengames/webgames-shared';

export const userContext = createContext<SmgUser | undefined>(Symbol('user instance'));