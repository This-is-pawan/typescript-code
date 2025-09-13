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
// void and never
function testVoid(): void {
  console.log("Done");  // finishes normally
}

// function testNever(): never {
//   throw new Error("Crash!"); // never reaches end
// }

// ############
function your(): { name: string; age: number } {
  return { name: "sham", age: 24 };
}

your(); // ✅ works
your({ name: "sham", age: 24 }); // ❌ ERROR: Expected 0 arguments, but got 1.
function your({ name, age }: { name: string; age: number }) {
  // function body
}

your({ name: "sham", age: 24 });
// ##########
// type alias
