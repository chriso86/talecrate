import { UserContextService } from "../services/user-context";

export class Auditable
{
    _createdDate: Date;
    _createdBy: string;
    _modifiedDate: Date;
    _modifiedBy: string

    constructor() {
        this._createdDate = new Date();
    }
}
