import { Character } from './character.interface';

export interface CharactersResponse {
  items: Character[];
  links: any;
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}
