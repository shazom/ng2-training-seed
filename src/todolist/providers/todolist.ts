import { Item } from './item';

export class Todolist {

    private items: Item[];

    constructor(){
        this.items = [];
    }

    public addItem(title: string): void {
        this.items.push(new Item(title));
    }

    public removeItem(item: Item): void {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1)
    }
}
