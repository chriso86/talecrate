import { Injectable } from "@angular/core";
import { User } from "../classes/user";

@Injectable()
export class UserContextService {
    _user: User;
    _loggedOnDateTime: Date;

}