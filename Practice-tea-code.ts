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
type Person = {
  name: string;
  age: number;
};

function your(): Person {
  return { name: "sham", age: 24 };
}

const data = your();
console.log(data); // { name: "sham", age: 24 }
//and 
type Person = {
  name: string;
  age: number;
};

function your(person: Person): Person {
  return person;
}

const data = your({ name: "sham", age: 24 });
console.log(data); // { name: "sham", age: 24 }

// #######################
type Practice={
  _id:number,
  name:string,
  work:string,
  age:number,
  male:boolean,
}
let User:Practice={_id:80294723,name:'peter',work:'app developer',age:23,male:true}
let manger=(data:Practice)=>{
console.log(data);
console.log(data._id);

}

manger(User) 
// ##################### optional chainning  card?
type Practice={
  _id:number,
  name:string,
  work:string,
  age:number,
  male:boolean,
}
let User:Practice={_id:80294723,name:'peter',work:'app developer',age:23,male:true}
let manger=(data:Practice)=>{
console.log(data);
console.log(data._id);

}

manger(User)
// type Practice={
  _id:number,
  name:string,
  work:string,
  age:number,
  male:boolean,
  card?:number,
}

let User:Practice={_id:80294723,name:'peter',work:'app developer',age:23,male:true,}

let manger=(data:Practice)=>{
console.log(data);
console.log(data.card);
if (User.card !== undefined) {
  console.log("User has card NO is :",User.card );
} else {
  console.log("No card found");
}

}

manger(User) 
// ########### Array syntax  ###############
//1) number[] → shorthand
//2) Array<number> → generic form
//3) readonly number[] → can’t modify
//4) [string, number] → tuple
//5) (string|number)[] → mixed type array
