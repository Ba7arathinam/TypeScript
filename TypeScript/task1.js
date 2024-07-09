// 1
function Salary(a) {
    var pf = a * 0.027;
    var tax = a * 0.1;
    var total = pf + tax;
    var takeHomeMonth = a - total;
    var yearSalary = takeHomeMonth * 12;
    console.log('take home salary per months is', takeHomeMonth);
    console.log('take home salary for year is', yearSalary);
}
Salary(8000);
// 2
var staff_rank = function () {
    var detail = [
        { empname: 'pavi', salary: 10000 },
        { empname: 'ashi', salary: 12000 },
        { empname: 'bala', salary: 9000 },
        { empname: 'charan', salary: 11000 }
    ];
    var max = 0;
    var max2 = 0;
    var max3 = 0;
    var empname = '';
    for (var i = 0; i < detail.length; i++) {
        if (detail[i].salary >= max) {
            max3 = max2;
            max2 = max;
            max = detail[i].salary;
        }
        else if (detail[i].salary >= max2) {
            max3 = max2;
            max2 = detail[i].salary;
        }
        else {
            max3 = detail[i].salary;
        }
    }
    for (var i = 0; i < detail.length; i++) {
        if (max3 == detail[i].salary)
            empname = detail[i].empname;
    }
    console.log(max3, empname);
};
staff_rank();
// 3
function table(a) {
    for (var i = 1; i <= 5; i++) {
        var val = a * i;
        console.log(a, '*', i, '=', val);
    }
}
table(5);
// 4
function Palindrom(a) {
    var b = a.toString();
    var res = true;
    for (var i = 0; i < b.length; i++) {
        if (b[i] !== b[b.length - 1 - i]) {
            res = false;
        }
    }
    if (res) {
        console.log('it\'s palindrome');
    }
    else {
        console.log('it\'s not a palindrome');
    }
}
Palindrom('papp');
