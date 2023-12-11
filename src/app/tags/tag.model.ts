import slugid from 'slugid';

export interface ITag {
    id: string,
    name: string,
    color: string
}

export class Tag implements ITag {
    id: string;
    name: string;
    color: string;

    constructor (name: string, color: string) {
        this.id = slugid.nice();
        this.name = name;
        this.color = color;
    }
}