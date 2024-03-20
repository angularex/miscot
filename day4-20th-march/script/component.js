"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Component = function (config) {
    return function (targetClass) {
        let tc = new targetClass();
        return class {
            constructor() {
                this.title = tc.title;
                this.power = config.power;
                this.selector = config.selector;
                this.template = config.template;
            }
        };
    };
};
let MyComp = class MyComp {
    constructor() {
        this.title = "Batman";
    }
};
MyComp = __decorate([
    Component({
        power: 7,
        selector: "app-root",
        template: `
    <h1> Welcome to your life </h1>
    <h2> Power is : {{ power }} </h2>
    <h2> Selected Hero is : {{ title }} </h2>
    `
    })
], MyComp);
