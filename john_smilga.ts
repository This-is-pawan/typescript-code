// /@############################# create app with vite typescript
// npm create vite@latest typescript -- --template vanilla-ts
// /@#############################
interface someValue{
 name:string,
 id:number,
}
const someObj:someValue={
 name:'random',
 id:123,
}

function practice(){
console.log(someObj);

 console.log('typescript is cal');
}

// #########
// array is ts 
let Strings:string[]=['this is code of ts'];
console.log(Strings);
let Numbers:number[]=[12,4,2,53,6,4]
console.log(Numbers);

let Both:(number|string)[]=[23,'the',43]
console.log(Both);
// ####
function sum(messaeg:string,...numbers:number[]):string{
 const doubled=numbers.map((num)=>num*2)
 console.log(doubled);
 let total=numbers.reduce((pre,curr)=>{
  return pre+curr;
 },0)
 return `${messaeg}${total} `
 
}


let result=sum('the total is :',1,2,3,4,)
console.log(result);
// #####################

function createStudent(student:{id:number;name:string}):void{
 console.log(`welcome to the course ${student.name.toUpperCase()}`);
 
}
const newStudent={
 id:2,
 name:'anna',
 email:'anna@gmail.com'
}
createStudent(newStudent)// it is not complain
createStudent({id:1,name:'peter',email:'@gamilcom'})// it is complain
// ########################################################################
function processData(
  input: string | number,
  config: { reverse: Boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}
console.log(processData(10));
console.log(processData("hello"));
console.log(processData("hello", { reverse: true }));
// ###########################################################################
const propName='age'
type Animal={
 [propName]:number;
}
let tiger:Animal={[propName]:5};
console.log(tiger);
// #########################################################
const sorting: number[] = [23, 4, 65, 34, 6, 45, 3];

for (let i: number = 0; i < sorting.length; i++) {
  for (let j: number = 0; j < sorting.length - 1; j++) {
    if (sorting[j] > sorting[j + 1]) {
      let sort: number = sorting[j];
      sorting[j] = sorting[j + 1];
      sorting[j + 1] = sort;
    }
  }
}

console.log(sorting);
// ##########################################################
function getEmployee():Person|DogOwner|Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'hope'
    };
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'rex'
    };
  } else {
    return {
      name: 'bob',
      managePeople() {
        console.log('managing people...');
      },
      delegateTasks() {
        console.log('delegating...');
      }
    };
  }
}

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);
 // ##################### enum ###################################################
enum ServerResponseStatus {
  Success,
  Error, 
}
console.log(ServerResponseStatus);

Object.values(ServerResponseStatus).forEach((value)=>{
  if (typeof value==='number') {
    console.log(value);
  }

});


interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}
const response: ServerResponse = getServerResponse();
console.log(response);
// ######################################################################

enum UserRole {
  Admin=9,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // [email, phone]
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 1,
  name: 'John Doe',
  role: UserRole.Admin,
  contact: ['john@gmail.com', '12345945'],
});

console.log(user.role);



// ###########################################################################
let someValue:any='this is a string'

let strLength:number=(someValue as string).length;

console.log(strLength);

type Bird={
  name:string;
}
let birdString='{"name":"Eagle"}'
let dogString='{"breed":"Poodle"}'
let birdObject=JSON.parse(birdString)
let dogObject=JSON.parse(dogString)
let bird=birdObject as Bird
let dog=dogObject as Bird
console.log(bird.name);
console.log(dog.name);

// #######################################################
enum Status{
  Pending='pending',
  Declined='declined'
}

type User={
  name:string,
  status:Status,
}

const statusValue='pending'
const user:User={name:'john',status:statusValue as Status}
console.log(user);

// ######################################################################

// type Dog  ={type:'dog',name:string,bark:()=>void}
// type Cat={type:'cat',name:string,meow:()=>void}
// type Animal =Dog|Cat
// // console.log(Animation);
// function makeSound(animal:Animal) {
//   if (animal.type==='dog') {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }
// function makeSound(animal:Animal) {
//   if ('bark' in animal) {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }


// ##############################################################################

type IncreamentAction={
  amount:number,
    type:'increment';
  timestamp:number,
  user:string,
};
type DecrementAction={
  type:'decrement';
  amount:number,
  timestamp:number,
  user:string,
}
type Action=IncreamentAction|DecrementAction;
function reducer (state:number,action:Action){
switch(action.type){
case'increment':
return state+action.amount
case'decrement':
return state+action.amount
default:
  const unexpectedAction:never=action
  throw new Error(`unexpected action:${nexpectedAction}`);
  
}

}
const newState=reducer(15,{user:'hop',amount:5,
  timestamp:12345,
  type:'increment'
})
console.log(newState);
// #################################################################################


















