import { createContext } from '@lit/context';
import { SmgUser } from '@shieldmaidengames/webgames-shared';

export type UserContext = {
    data: SmgUser | undefined;
};

export const userContext = createContext<UserContext>(Symbol('user instance'));