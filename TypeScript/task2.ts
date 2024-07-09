//1

var arr:number[]=[1,2,3,4]

var arr1:number[]=[3,4,5,6,10]

var res:number[]=[]

function concat_array(a:number[],b:number[]):number[]{
    for (var i = 0; i < Math.max(a.length, b.length); i++) { 
            a[i] = isNaN(a[i]) ? 0 : a[i];
            b[i] = isNaN(b[i]) ? 0 : b[i];
            res[i]=a[i] + b[i]
} 
        return res;
}
var values:number[]=concat_array(arr, arr1);
console.log(values)



//2

function find_duplicate(repp:any[]):any[]{
   
var duplicate:any[] = [];
for (var i = 0; i < repp.length; i++) {
    if (repp.indexOf(repp[i]) !== i) {
        duplicate.push(repp[i])
    }
}
return duplicate
}

var rep:any[] = [8,6,7,5,7,9,5];
var results=find_duplicate(rep)
console.log(results);

//3

function remove_values(a:any[]):any[]{
    let values:any[]=[NaN,true,false,0,undefined,null]
    let res:any[]=[]

    for(let val1 of a){
        if(!values.includes(val1)){
            res.push(val1)

        }
    }
    return res
}
var arr2:any[]=['bala',7,NaN,null,undefined,0]
var remove_value:any[]=remove_values(arr2)
console.log(remove_value)


// var store=new Set([1,2,3,2,4,3,3])
// console.log(store)
// var store1=[...new Set([1,2,3,2,4,3,3])]
// console.log(store1)

//bill for the two type patient , in genreal & non genral

//TypeGenerices

function show <g>(a:g):g{
    return a
}
var bit=show<string>('bala')