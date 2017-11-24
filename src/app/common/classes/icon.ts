import { IIcon } from "../interfaces/icon";

export class Icon implements IIcon
{
    name: string = 'standard';
    link: string = 'fa-bolt';

    constructor(name: string, link: string)
    {
        this.name = name;
        this.link =link;
    }
}