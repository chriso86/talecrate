import { BaseEntity } from './base-entity';

export class Genre extends BaseEntity
{
    id: number;
    name: string;
    popularity: number;

    constructor(id: number, name: string, popularity: number)
    {
        super();

        this.id = id;
        this.name = name;
        this.popularity = popularity;
    }

    clear(): void {
        this.id = null;
        this.name = 'Genre';
        this.popularity = 0;
    }
}
