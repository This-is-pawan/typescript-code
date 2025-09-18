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

