/* 
class Person{
    canmove:string = "Default";
    movies:string[] = [];
    constructor(ncm:string, ml:string[]){
        this.canmove = ncm;
        this.movies = ml;
    }
} 
*/
class Person{
    constructor(public canmove:string, public movies:string[]){}
}