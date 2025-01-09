
export type SmgPlayer = {
    name: string;
}

export type SmgGameDefinition = {
    name: string;
    slug: string;
    description: string;
    isMultiplayer: boolean;
    multiplayerMax?: number;
    isPublic: boolean;
};
