import { genreVars, platformVars, sortVars } from './constants';

export type TFilterTypes = 'platform' | 'genre';

export type TPlatform = (typeof platformVars)[number];

export type TGenre = (typeof genreVars)[number];

export type TFilter<T extends TFilterTypes> = T extends 'platform'
    ? {
          name: 'platform';
          value: TPlatform | null;
      }
    : {
          name: 'genre';
          value: TGenre | null;
      };

export type TSort = (typeof sortVars)[number];
