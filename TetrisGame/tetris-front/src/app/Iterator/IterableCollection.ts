import { Iterator } from './Iterator';

export interface IterableCollection {
    createIterator(x: number, y: number): Iterator
}