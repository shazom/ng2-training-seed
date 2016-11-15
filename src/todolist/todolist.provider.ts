import { Logger } from './../shared/logger';
import { Item } from './item';
import {Injectable} from '@angular/core';

@Injectable()
export class Todolist {

    private _items: Item[];
    private _logger: Logger;

    constructor(logger: Logger) {
        this._items = [];
        this._logger = logger;
    }

    get items() {
        return this._items;
    }

    public addItem(value: string): void {
        this._logger.log('item added');
        this._items.push(new Item(value));
    }

    public removeItem(item: Item): void {
        const index = this._items.indexOf(item);
        this._items.splice(index, 1);
    }
}