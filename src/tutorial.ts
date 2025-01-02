// const names:string[]=['john','jam',
// 'jak','jali'
// ]
// function textindcludes(name:string):boolean {
//  return names.includes(name)
// }
// const nameTocheck=['john','jam',
//  'jak','jkk'
//  ]
// if (textindcludes(nameTocheck[3])) {

//  console.log(`${[nameTocheck]} is the list`);
 
// } else {
//  console.log(`${nameTocheck} is not the list`);
// }



// function calculatePrice(price: number, discount?: number): number {
//  return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);
// console.log(priceAfterDiscount)

// function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
//  return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty1 = calculateScore(300,0 )
// let scoreAfterPenalty2 = calculateScore(300); 
// console.log(scoreAfterPenalty1)
//  console.log(scoreAfterPenalty2)


// normal 
// function stingArray(length:number,value:string):string [] {
//  let result:string[];
// result=Array(length).fill(value)
//  return result
// }
// console.log( stingArray(6,'hello'));

// // generics

function StingArray<T>(length:number,value:T):Array<T>{
 let result:T[]=[];
  result=Array(length).fill(value)
 return result
}
let arraySting1=StingArray<string>(10,'hello');
let arraySting2=StingArray<string>(5,'hello world')
console.log(arraySting2,arraySting1);

// console.log( StingArray (6,'hello'));

interface StoreData<T=any>{
 data:T[];
}

const storeNum:StoreData<number>={
 data:[1,2,3,4],
};
console.log(storeNum);

const randomStuff:StoreData<any>={
 data:['random',1],
}
console.log(randomStuff);

















