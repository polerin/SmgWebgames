import { SmgGameDefinition } from './types/smg_core.js';
declare const GameRegistry: Record<string, SmgGameDefinition>;
export type SmgGameSlug = keyof typeof GameRegistry;
export { GameRegistry };
//# sourceMappingURL=gameRegistry.d.ts.map