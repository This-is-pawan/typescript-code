console.log("hary");
let gretting:string='hello'
console.log(gretting);
// with function 
function Practice(name:string,age:number) {
 console.log(name,age);
 
}
Practice('deepak',20) 
// when return something from function then use :any or other syntax (function return notation)
function Practice(name:string,age:any,work:any):any
{
 return `[ name is: ${name} ] [ age is: ${age} ] [ work is : ${work} ]`
}

const data=Practice('peter',20,'development')
console.log(data);
