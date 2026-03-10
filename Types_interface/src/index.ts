//Example using class with type
type ChaiOrder={
    type:string,
    sugar:number,
    strong:boolean
}

function makeChai(order:ChaiOrder){
    console.log(order);
}
//--------------------------------------------------------------
//Example using class with interface
/*
type TeaRecipe={
    water:number,
    milk:number
}
*/

interface TeaRecipe{
    water:number
    milk:number
}

class MasalaChai implements TeaRecipe{
    water=100;
    milk=50;
}
// --------------------------------------------------------------
//Example using class with interface
/* type CupSize="small" | "large";  This creates lots of problem when class try to implement it*/
interface CupSize{
    size:"small" | "large"
}

class Chai implements CupSize{
    size:"small" | "large"="small";
}

//----------------------------------------------------------------
//Example using class with interface
/*type Response={ok:true} | {ok:false} This creates lots of problem when class try to implement it*/

interface Response{
    ok:boolean
}

class myRes implements Response{
    ok=true
    
}
//-----------------------------------------------------------------
//Example showing union
type TeaType="masala"|"ginger"|"lemon" //Known as 'Literal Type'

function orderChai(t:TeaType){
    console.log(t);
}
//-----------------------------------------------------------------
//Example showing Intersection

type baseChai={
    teaLeaves:number
}
type Extra={
    masalaQuantity:number
}

type GingerTea=baseChai & Extra

const gingerCup:GingerTea={
    teaLeaves:2,
    masalaQuantity:100
}
//---------------------------------------------------------------------
//Example
type User={
    username:string
    bio?:string
}

const randomUser:User={
    username:"Taha"
    // bio:"Available" //(Optional)
}
//----------------------------------------------------------------------
//Example
type Config={
    readonly appName:string
    version:1
}
const cfg:Config={
    appName:"MasterJi",
    version:1
}
// cfg.appName="ChaiCode" //Give error since appName is readOnly