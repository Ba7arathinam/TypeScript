
// 1

function Salary(a:number):void{
    let pf:number=a*0.027

    let tax:number=a*0.1
    
    let total:number=pf+tax

    let takeHomeMonth:number=a-total

    let yearSalary:number=takeHomeMonth*12

    console.log('take home salary per months is', takeHomeMonth)
    console.log('take home salary for year is', yearSalary)
}

Salary(8000)

// 2

let staff_rank = ():void => {
    const detail=[
        {empname:'pavi',salary:10000},
        {empname:'ashi',salary:12000},
        {empname:'bala',salary:9000},
        {empname:'charan',salary:11000}
    ]
    let max:number = 0;
    let max2:number = 0;
    let max3:number = 0;
    let empname:string='';
    for(let i=0; i<detail.length;i++){
        if(detail[i].salary >= max){
            max3 = max2; max2 = max;
            max=detail[i].salary;
        }
        else if(detail[i].salary >= max2){
            max3 = max2;
            max2 = detail[i].salary;
        }
        else {
            max3 = detail[i].salary;
        }
    }
    for(let i=0; i<detail.length;i++){
        if(max3 == detail[i].salary)
            empname = detail[i].empname;
    }
    console.log(max3,empname);
}
staff_rank();

// 3

function table(a:number):void{

    for(let i=1;i<=5;i++){
        let val:number=a*i
        console.log(a,'*',i,'=',val)
    }

}

table(5)

// 4

function Palindrom(a:any):void {
    var b:string = a.toString();
    var res:boolean = true;
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


