import {Person} from "./person.js";

interface IHero{
    firstname:string;
    lastname:string;
    title:string;
    sayname():string;
    getpower():number;
    setpower(npower:number):void;
};

export class Hero extends Person implements IHero{
    static version:number = 1001;
    constructor(
        public firstname:string,
        public lastname:string,
        public title:string,
        ml:string[],
        ncm:string, 
        private power:number){
        super(ncm, ml);
    }
    sayname():string{
        return this.firstname+" "+this.lastname+" is "+this.title;
    }
    getpower():number{
         return this.power;
    }
    setpower(npower:number):void{
         this.power = npower;
    }
};