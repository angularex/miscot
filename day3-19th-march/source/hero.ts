class Hero extends Person{
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
    setpower(npower:number){
         this.power = npower;
    }
};