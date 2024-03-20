interface IClass{
    canmove:string;
    movies:string[];
}

export class Person implements IClass{
    constructor(public canmove:string, public movies:string[]){}
}