// inline export
// export class Person{

class Human{
    name = "Default";
    constructor(nname){
        this.name = nname;
    }
};

class Person{
    canmove = "Default";
    movies = [];
    constructor(ncm, ml){
        this.canmove = ncm;
        this.movies = ml;
    }
}
// alias
// named export
// export {Person as Pson}

export default Person;