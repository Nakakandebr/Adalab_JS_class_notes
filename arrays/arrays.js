const items=[2,8,true,"seed",[7,9]];
const a = new Array(2,8,true,"seed");
console.log(items);
console.log(a);
console.log(items[3]);
console.log(items[4][1]);
//adding an item at the end of the array
items.push(6);
console.log(items);
//add at the beginning
items.unshift("fruit");
console.log(items);
//removing an itm at the end  of the array
items.pop();
console.log(items);
// remove at the sart
items.shift()
console.log(items);
//given an array with numbers,return array x with each item multiplied by 4
let num=[1,3,4,6,9,34];

 let x =num.map(function(item){
 return item*4
})
console.log(x);
let x1=[];
 num.forEach(function(item){
    x1.push(item*4)
})
console.log(x1);
//merging
//aray cncantenation
let mix =items.concat(num);
console.log(mix);
//spread operator
let b=[false,"deny" ,...num];
console.log(b);
//destructuring
let [z,w,y,...v]=[1,3,4,7,9,78];
console.log({z});
console.log({w});
console.log({y});
console.log({v});