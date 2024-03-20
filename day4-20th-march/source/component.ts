let Component = function(config:any){
    return function(targetClass:any){
        let tc = new targetClass();
        return class{
            title = tc.title;
            power = config.power;
            selector = config.selector;
            template = config.template;
        }
    }
}
@Component({
    power : 7,
    selector : "app-root",
    template : `
    <h1> Welcome to your life </h1>
    <h2> Power is : {{ power }} </h2>
    <h2> Selected Hero is : {{ title }} </h2>
    `
})
class MyComp{
    title = "Batman"
}