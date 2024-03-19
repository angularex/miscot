// import { Pson } from "./person.js";

import Vijay from "./person.js";

export class Hero extends Vijay{
    firstname = "Default";
    lastname = "Default";
    title = "Default";
    static version = 1001;
    #power = 5;
    constructor(fn,ln,ntitle,ml,ncm){
        super(ncm, ml)
        this.firstname = fn;
        this.lastname = ln;
        this.title = ntitle;
    }
    sayname(){
        return this.firstname+" "+this.lastname+" is "+this.title;
    }
   get power(){
    return this.#power;
   }
   set power(npower){
    this.#power = npower;
   }
};