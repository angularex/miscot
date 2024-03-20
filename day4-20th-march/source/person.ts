interface IClass{
    canmove:string;
    movies:string[];
}

class Person implements IClass{
    constructor(public canmove:string, public movies:string[]){}
}