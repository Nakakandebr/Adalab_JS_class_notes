let a=10;
let b= "10";
//implicit coercion internally
let c=b+a;
console.log({c});
//console.log("Turn to number:",b*1 );
let d =b*1;
console.log(d+a);
let e=+b+a;
console.log({e});
//Explicit coercion
console.log("number",Number(a));
console.log({b});
console.log({"string":String(a)});
console.log({"array":Array(b)});


let y=30;
let f="40"
let addition=y+f;
console.log({addition});
let r=f*1
let sum=y+r;
console.log({sum});
//explicit
console.log("number",Number(y));
console.log({"string":String(y)});
console.log({"array":Array(f)});