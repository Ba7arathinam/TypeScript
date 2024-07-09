// tsc @types/node --save-dev
import * as readline from "readline"

let r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question('Enter Your name',(a:string)=>{
 console.log("Hello, "+a);
 r1.close();
})
