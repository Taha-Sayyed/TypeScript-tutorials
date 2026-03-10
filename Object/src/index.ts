//Example: Here type inference happen
const chai={
    name:"Ginger Tea",
    price:20,
    isHot:true
}
//---------------------------------------------------------------------------
//Declaring object types
let tea:{
    name:string;
    price:number;
    isHot:boolean;
}

tea={
    name:"Masala Chai",
    price:25,
    isHot:true
}
//----------------------------------------------------------
// Alias Object
type Tea={
    name:string
    price:number
    ingredients:string[]
}

const adrakChai:Tea={
    name:"Adrak Chai",
    price:30,
    ingredients:["Tea leaves","ginger"]
}

//----------------------------------------------------------------
//Duck Typing
//Example
type Cup={
    size:string
}

let smallCup:Cup={
    size:"200ml"
}

let bigCup={
    size:"500ml",
    material:"Steel"
}

smallCup=bigCup
console.log(smallCup);// This is possible since bigCup satisfies the bare minimum requirement

//Example of Duck Typing
type Brew={
    brewTime:number
}

const coffee={
    brewTime:5,
    beans:"Arabica"
}

const chaiBrew:Brew=coffee;
console.log(chaiBrew);


//Split out the Data type
type Item={name:string,quantity:number}
type Address={street:string,zip_code:number}

type Order={
    id:number,
    Items:Item[],
    Address:Address
}

const customerOrder:Order={
    id:101,
    Items:[{
        name:"Mobile Cover",
        quantity:2
    }],
    Address:{
        street:"Abdul Kalam Road",
        zip_code:440215
    }
}

console.log(customerOrder);

//---------------------------------------------------
//Sometime we define data type once but use in different ways
//Partial<T> is a built-in utility type in TypeScript that makes all properties of a type optional.
type Chai={
    name:string,
    price:number,
    isHot:boolean
}

let obj={
    name:"ginger tea",
}

const updateChai=function(update:Partial<Chai>){
    console.log(update);
}

updateChai(obj);
updateChai({price:200})


//Required<T> is a built-in TypeScript utility type that makes all properties of a type mandatory, even if they were originally optional.
//Example
type ChaiOrder={
    name?:string,
    quantity?:number
}

const placeOrder=function(order:Required<ChaiOrder>){
    console.log(order);
}

placeOrder({name:"Ginger Tea",quantity:20});
//placeOrder({name:"Ginger Tea"}); //Give error


//----------------------------------------------------------------------
//Pick<T, K> is used to create a new type by selecting specific properties from another type.
//Example
type tea={
    name:string,
    price:number,
    isHot:boolean,
    ingredients:string[]
}

type BasicChaiInfo=Pick<Chai,"name"|"price">

let chaiInfo:BasicChaiInfo={
    name:"Ginger Tea",
    price:30
}

//------------------------------------------------------------------------------
//Omit<T, K> creates a new type by removing (excluding) specific properties from an existing type.
//Example
type ChaiNew={
    name:string,
    price:number,
    isHot:boolean,
    secretIngredients:string[]
}

type PublicChai=Omit<ChaiNew,"secretIngredients">

const gingerPublicChai:PublicChai={
    name:"Ginger Tea",
    price:200,
    isHot:true,
    //secretIngredients:["Tea leaves"]//Not Allowed
}
console.log(gingerPublicChai);
