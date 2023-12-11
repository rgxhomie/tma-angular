import slugid from 'slugid';
import { ITag } from '../tags/tag.model';

export interface IProduct {
    id: string,
    name: string,
    description: string,
    price: number,
    inStock: number,
    tags: ITag[]
}

export class Product implements IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    inStock: number;
    tags: ITag[];

    constructor (name: string, description: string, price: number, inStock: number, tags: ITag[] = []) {
        this.id = slugid.nice();
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
        this.tags = tags;
    }
}