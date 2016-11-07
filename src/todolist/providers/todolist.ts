import { Storage } from './storage';
import { Item } from './item';
import {Injectable} from '@angular/core';

@Injectable()
export class Todolist {

    private _items: Item[];
    private store: Storage;

    constructor(store: Storage){
        this._items = [
           new Item('first task'),
           new Item('another task'),     
        ];

        this.store = store;
    }

    get items(): Item[]{
        return this._items;
    }    

    public addItem(title: string): void {
        this._items.push(new Item(title));
        this.store.setItem('ITEMS', this._items);
    }

    public removeItem(item: Item): void {
        const index = this._items.indexOf(item);
        this._items.splice(index, 1)
        this.store.setItem('ITEMS', this._items);
    }
}
