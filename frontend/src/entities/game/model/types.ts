export interface IScreenshot {
    id: number;
    image: string;
}

export interface IGame {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    minimum_system_requirements: {
        graphics: string;
        memory: string;
        os: string;
        processor: string;
        storage: string;
    };
    screenshots: IScreenshot[];
}
