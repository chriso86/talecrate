import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'props-filter'
});

export class PropsFilterPipe implements PipeTransform
{
    transform(items: any[], searchObject: any): any[]
    {
        let filteredItems: any = [];

        if (!items) {
            return [];
        }
        if (!searchObject) {
            return items;
        }

        for (let item of items) {
            for (let prop in searchObject) {
                let valueToSearch = item[prop];

                if(typeof searchObject[prop] === 'string')
                {
                    if(typeof item[prop] !== 'string')
                    {
                        continue;
                    }

                    item[prop].toLowerCase();
                    searchObject[prop] = searchObject[prop].toLowerCase();
                }

                if (valueToSearch === searchObject[prop])
                {
                    filteredItems.push(item);
                }
            }
        }

        return filteredItems;
    }
}