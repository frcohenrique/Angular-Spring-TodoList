export class Todo {
    id: number;
    description: string;
    done?: boolean;
    createdAt?: string;
    endedAt: string;

    constructor(){
        this.description = '';
        this.id = 1;
        this.endedAt = '';
    }
}