let success=false;
let promise=new Promise(function(resolve,reject){
    if(success){
        resolve("I have everything");


    }
    else{
        reject('I am still poor');



    }



}).then(()=>{console.log("it is a dream come true");})
.catch(()=>{console.log("I will make my own money")})
.finally(()=>{console.log("Iam still happy");});
console.log({promise});