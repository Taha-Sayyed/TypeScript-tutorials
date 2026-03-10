//                                          Array
//Basic Examples
const chaiFlavours:string[]=["Masala","Adrak"]
const chaiPrice:number[]=[10,20];
const rating:Array<number>=[4.5,5.0];

//Example
type Chai={
    name:string,
    price:number
}

/*
const menu:Chai[]=[
    {name:"Ginger Tea",price:30}
]
*/

//OR

const menu:Array<Chai>=[{name:"Ginger Tea",price:20}]
menu.push({name:"Masala Tea",price:20});

//Example
const cities:readonly string[]=["Ginger Tea"];
// cities.push("Masala Tea") //Throw error since readonly

//Example
const table:number[][]=[
    [1,2,3],
    [4,5,6]
];
//---------------------------------------------- Array Finished---------------------------------------------

//                                   Tuples: Extension of Arrays in TypeScript

//Example-1
let chaiTuple:[string,number];
chaiTuple=["Masala",20];
// chaiTuple=[20,"Masala"] Gives error, they should be in order

//Example-2
let userInfo:[string,number,boolean?];
userInfo=["Taha",23]
console.log(typeof(userInfo));//Object


//Example-3
const location:readonly [number,number]=[8,4]

//Example-4
let chaiItems:[name:string,price:number]=["Masala Chai",2];

//---------------------------------------------- Tuple Finished---------------------------------------------

//                                                 ENUMS                         
//Example-1
enum CupSize{
    SMALL,
    MEDIUM
}
const size=CupSize.MEDIUM;
console.log(size);


//Example-2
enum Status{
    PENDING=100,
    SERVED,//101
    CANCELLED//102
}
const status=Status.CANCELLED;
console.log(status);


//Example-3
enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType){
    console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER);

//Example-4

//Not good practice
enum RandomEnum{
    ID=1,
    NAME="chai"
}
//This is not good practice because enum contain differnet types

//Example-5
//Remember this unexpected bheaviour and avoid such things

let t:[string,number]=["Chai",2];
t.push("extra")
