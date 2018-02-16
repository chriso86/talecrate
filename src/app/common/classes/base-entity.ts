import { Auditable } from './auditable';

export class BaseEntity extends Auditable {
    _id: string;
    _name: string;

    constructor(id?: string, name?: string) {
        super()

        this._id = id;
        this._name = name;
    }

    getName(): string {
        return this._name;
    }
}