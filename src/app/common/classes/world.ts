import { Genre } from './genre';
import { Auditable } from './auditable';

export class World extends Auditable
{
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    genres: Genre[] = [];

    constructor(id: number, name: string, imageUrl: string, genres: Genre[])
    {
        super();

        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        this.genres = genres;
    }
}
