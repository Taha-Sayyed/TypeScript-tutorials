// Example of Type narrowing
function getChai(kind: string|number){
    if(typeof kind==="string"){
        return `Making ${kind} chai...`;
    }
    return `Chai Order: ${kind}`
}

console.log(getChai("Ginger Tea"));


//Example-2
function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default Masala Chai ${msg}`;
}
console.log(serveChai());

//Example-3 (Exhaustive checks)
function orderChai(size:"small" | "medium" | "large" | number){
    if(size==="small"){
        return `Small cutting chai`
    }
    if(size==="medium" || size==="large"){
        return `Make extra chai`;
    }
    return `Chai order ${size}`
}

class kulhadChai{
    serve(){
        return `Serving kulhad Chai`;
    }
}

class cutting{
    serve(){
        return `Serving cutting Chai`;
    }
}

let obj1=new kulhadChai();
let obj2=new cutting();

function serveChaiFunc(chai:kulhadChai | cutting){
    if(chai instanceof kulhadChai){
        return chai.serve();
    }
    else{
        return chai.serve();
    }
}

console.log(serveChaiFunc(obj1));
console.log(serveChaiFunc(obj2));

//Example-4 (Building own types)
//type-definition
type ChaiOrder={
    type: string,
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj==="object" &&
        obj !== null &&
        typeof obj.type==="string" &&
        typeof obj.sugar==="number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving chai ${item.type} with ${item.sugar} mg`;
    }
    return `Serving custom chai: ${item}`
}

//Obj3 is of the type 'ChaiOrder'
let obj3:ChaiOrder={
    type:"Masala Chai",
    sugar:20,
};

let obj4="Ginger Tea"

console.log(serveOrder(obj3));
console.log(serveOrder(obj4));

//Example-5

type MasalaChai={
    type:"masala",
    spicelevel:number
}

type GingerChai={
    type:"Ginger",
    amount:number
}

type ElaichiChai={
    type:"Elaichi",
    aroma:string
}

type Chai=MasalaChai | GingerChai | ElaichiChai

function MakeChai(order:Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai with spice level ${order.spicelevel}`;
            break;
        case "Ginger":
            return `Ginger Chai cost ${order.amount}`;
            break;
        case "Elaichi":
            return `Elaichi Chai aroma is ${order.aroma}`;
    }
}

let obj5:MasalaChai={
    type:"masala",
    spicelevel:10
}

let obj6:GingerChai={
    type:"Ginger",
    amount:20
}

let obj7:ElaichiChai={
    type:"Elaichi",
    aroma:"Good"
}

console.log(MakeChai(obj5));
console.log(MakeChai(obj6));
console.log(MakeChai(obj7));


//Checking a particular property present or not
function brew(order:MasalaChai | GingerChai){
    if("spicelevel" in order){
        return `Brewing with spices`
    }
    else{
        return `Cannot brew since no spice level in`
    }
}

console.log(brew(obj5));
console.log(brew(obj6));


//Using 'unknown'
//Example-1
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every(item => typeof item === "string");
}

// const data: unknown = ["a", "b", "c"];
const data: unknown = "TAHA";

if (isStringArray(data)) {
  // TypeScript now knows data is string[]
  console.log(data[0]?.toUpperCase());
}
else{
    console.log(`'data' is not array of strings`);
    
}


//Using 'unknown' 
//Example-2
let value: unknown = "hello";
if(typeof value==="string"){
    value.toUpperCase(); //  Error
}

//Compairing 'unknown' and 'any'
/*
Code with unknown

let value: unknown = "hello";
if(typeof value==="string"){
    value.toUpperCase(); //  Error
}
-------------------
Code with any
let value: any = 123;

value.toUpperCase(); // Allowed but WRONG
*/