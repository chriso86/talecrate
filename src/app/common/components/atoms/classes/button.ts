// Modules
import { Common } from "../../../classes/common";

// Interfaces
import { IButton } from "../interfaces/button";

export class Button implements IButton
{
    name: string = 'NOT_SET';
    size: string = 'normal';
    style: string = 'standard';
    action: Function = Common.Functions.Noop();
}