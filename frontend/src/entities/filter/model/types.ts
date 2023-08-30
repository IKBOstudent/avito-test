import { categoryVars, platformVars, sortVars } from './constants';

export type TPlatform = (typeof platformVars)[number];

export type TCategory = (typeof categoryVars)[number];

export type TSort = (typeof sortVars)[number];

export type TSearchFilter =
    | {
          name: 'platform';
          value: TPlatform;
      }
    | {
          name: 'category';
          value: TCategory;
      }
    | {
          name: 'sort-by';
          value: TSort;
      };
