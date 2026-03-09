//Example-1 {type assertion}
let response:any="43";
let numericLength:number= (response as string).length; //Forceful type assertion


//Example-2 {type assertion}
type Book={
    name:string;
}

let bookString='{"name":"Atomic Habit"}';
// let bookString='{"name":"Atomic Habit","author":"Taha Sayyed"}';
let bookObject=JSON.parse(bookString) as Book;

console.log(bookObject.name);


//Example-3 {type assertion}
const inputElement=document.getElementById("username") as HTMLInputElement;
// const inputElement=document.getElementById("username");

//Example-4 {type assertion}
const data:unknown="Chai aur code";
const strData:string=data as string;


//Example-5

try {
    throw new Error("Database failed");
} catch (error:unknown) { //type-unknown
    if(error instanceof Error){ //type-guard
        console.log(error.message);
    }    
}

//Example-6 {type-never} {Refer Notes on Notion for better explanation on this example}
type Role="admin"| "user";

function redirectBasedOnRole(role:Role):void{
    if(role==="admin"){
        console.log(`Redirecting to admin dashboard`);
        return;
    }
    if(role==="user"){
        console.log(`Redirecting to user dashboard`);
        return;
    }
    role;
}