var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Decorators = /** @class */ (function () {
    function Decorators(student) {
        this.student = student;
    }
    Decorators = __decorate([
        showData,
        showData1
    ], Decorators);
    return Decorators;
}());
function showData(constructor) {
    constructor.prototype.age = 20;
}
function showData1(constructor) {
    constructor.prototype.age1 = 20;
}
var data1 = new Decorators('Bala');
console.log("i\' am ", data1.student);
console.log("My age is ", data1.age + data1.age1);
var data2 = new Decorators('Bhuvensh G');
console.log("i\' am ", data2.student);
console.log("My age is ", data2.age + data2.age1);
