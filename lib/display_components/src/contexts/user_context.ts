import { createContext } from '@lit/context';
import { SmgUserContext } from '@shieldmaidengames/webgames-shared';


export const userContext = createContext<SmgUserContext>(Symbol('user instance'));