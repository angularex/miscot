import { Person } from "./person.js";
;
export class Hero extends Person {
    constructor(firstname, lastname, title, ml, ncm, power) {
        super(ncm, ml);
        this.firstname = firstname;
        this.lastname = lastname;
        this.title = title;
        this.power = power;
    }
    sayname() {
        return this.firstname + " " + this.lastname + " is " + this.title;
    }
    getpower() {
        return this.power;
    }
    setpower(npower) {
        this.power = npower;
    }
}
Hero.version = 1001;
;
