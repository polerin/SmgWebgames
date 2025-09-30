export type ICue = Event & { EVENT_NAME: string; };
export type ConstructorObject<T> = { new (...args: any[]): T };