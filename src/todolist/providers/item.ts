export class Item {

    public title: string;
    public done: boolean;
    public created: Date;

    constructor(title: string, done?: boolean) {
        this.title = title;
        this.done = done || false;
        this.created = new Date();
    }
}
