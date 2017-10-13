import { Icon } from "./icon";

export module Common
{
    export class Functions
    {
        public static Noop()
        {
            return function() {};
        }
    }

    export class FontAwesome
    {
        icons: Array<Icon>;

        constructor() {
            this.icons = this.generateIcons();
        }

        getIcons(): Array<Icon>
        {
            return this.icons;
        }

        generateIcons(): Array<Icon>
        {
            // Font Awesome styles
            return [
                new Icon('add', 'fa-plus'),
                new Icon('remove', 'fa-minus'),
                new Icon('user', 'fa-user'),
                new Icon('add-user', 'fa-user-circle')
            ]
        }
    }
}