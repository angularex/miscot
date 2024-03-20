let AddPower = function(num:number){
    return function(targetClass:any){
        let inst = new targetClass();
        return class {
            title = inst.title;
            power = num;
        }
    }
};

@AddPower(7)
class CommonMan{
    title = "Bruce Wayne";
};

console.log(CommonMan);