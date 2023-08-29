declare interface IScreenshot {
    id: number;
    image: string;
}

declare interface IGame {
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

const categories = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
] as const;

declare type TSearchFilter =
    | {
          name: 'platform';
          value: 'pc' | 'browser' | 'all';
      }
    | {
          name: 'category';
          value: (typeof categories)[number];
      }
    | {
          name: 'sort-by';
          value: 'release-date' | 'popularity' | 'alphabetical' | 'relevance';
      };
