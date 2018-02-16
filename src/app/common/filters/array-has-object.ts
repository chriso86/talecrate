import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayHasObject'
})

export class ArrayHasObjectPipe implements PipeTransform
{
    transform(items: any[], searchObject: any): any[]
    {
        let filteredItems: any = [];

        if (!items) {
            return [];
        }
        if (!searchObject || !searchObject[Object.keys(searchObject)[0]]['id']) {
            return items;
        }

        for (let item of items) {
            for (let prop in searchObject) {
                let valueToSearch = item[prop];

                if (valueToSearch.indexOf(searchObject[prop]) > -1)
                {
                    filteredItems.push(item);
                }
            }
        }

        return filteredItems;
    }
}