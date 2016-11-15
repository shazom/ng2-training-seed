import { Item } from './item';
import { Injectable } from '@angular/core';

export interface Item {
    title: string;
    done: boolean;
    created: Date
}
