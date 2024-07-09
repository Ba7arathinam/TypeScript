//1
var arr = [1, 2, 3, 4];
var arr1 = [3, 4, 5, 6, 10];
var res = [];
function concat_array(a, b) {
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        a[i] = isNaN(a[i]) ? 0 : a[i];
        b[i] = isNaN(b[i]) ? 0 : b[i];
        res[i] = a[i] + b[i];
    }
    return res;
}
var values = concat_array(arr, arr1);
console.log(values);
//2
function find_duplicate(repp) {
    var duplicate = [];
    for (var i = 0; i < repp.length; i++) {
        if (repp.indexOf(repp[i]) !== i) {
            duplicate.push(repp[i]);
        }
    }
    return duplicate;
}
var rep = [8, 6, 7, 5, 7, 9, 5];
var results = find_duplicate(rep);
console.log(results);
//3
function remove_values(a) {
    var values = [NaN, true, false, 0, undefined, null];
    var res = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var val1 = a_1[_i];
        if (!values.includes(val1)) {
            res.push(val1);
        }
    }
    return res;
}
var arr2 = ['bala', 7, NaN, null, undefined, 0];
var remove_value = remove_values(arr2);
console.log(remove_value);
// var store=new Set([1,2,3,2,4,3,3])
// console.log(store)
// var store1=[...new Set([1,2,3,2,4,3,3])]
// console.log(store1)
