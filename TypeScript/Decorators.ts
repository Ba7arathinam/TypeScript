
// tsc --experimentalDecorators Decorators.ts need to run Decrators with this command

@showData
@showData1
class Decorators{
     student:string
     [x:string]:any
    constructor(student:string){
        this.student=student
    }
}

function showData(constructor:Function){
    constructor.prototype.age=20
}
function showData1(constructor:Function){
    constructor.prototype.age1=20
}

var data1=new Decorators('Bala')

console.log("i\' am ", data1.student)

console.log("My age is ", data1.age+data1.age1)
var data2=new Decorators('Bhuvensh G')

console.log("i\' am ", data2.student)

console.log("My age is ", data2.age+data2.age1)