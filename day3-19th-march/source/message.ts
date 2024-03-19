let message1:string = "Welcome ";
let message2:string = " to your life !!!";
alert(message1+message2);
let user ;

/* 
let power:number = 5;
let agree:boolean = true; 
*/

/* 
let dontknowyet:null = null;
let notyetchecked:undefined = undefined; 
*/

// let value:any = true;
// union type
// let value:(number|string|object) = 1;

// generic
let favnums1:Array<string> = ['hello',"5","false"];
let favnums2:string[] = ['hello',"5","false"];
let favnums3:number[] = [5,7,3];


function adder(num1:number,num2:number):string{
    return num1 + num2+" is the sum";
};

function saymessage():void{
   console.log("hello everyone");
};

console.log(adder(5,6));
