let subs:number | string='1M'; //representation of union

let apiRequestStatus: 'pending'|'success'|'error'='pending';

apiRequestStatus="success";
// apiRequestStatus="taha" // Give Error since 'success' is not there in the union

const orders=[12,20,28,42];

// let currentOrder; // "any"

let currentOrder:Number|undefined;

for(let order of orders){
    if(order===21){
        currentOrder=order;
    }
}
console.log(currentOrder);// undefined if order=21;
// console.log(currentOrder);// Output: 20 {if order=20}
