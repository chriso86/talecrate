import { Auditable } from "./auditable";

export class User extends Auditable {
    _id: string;
    name: string;

    constructor(id?: string, name?: string) {
        super();
        
        this._id = id;
        this.name = name;
    }
}