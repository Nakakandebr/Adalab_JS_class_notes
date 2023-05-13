//creating an object
let person={
    name:"Ann",
    age:20,
    height:"5ft",
    friend:{
    name:"Beryl",
    age:25

    }

}

let person1=new Object();
console.log({person1});

person1.name="Edith";// adding new property
console.log({person1});
person1.age=40;
console.log({person1});
console.log(person1.age);//log value
person["age"]=25;//update an existing property
console.log({person});
console.log(person.friend.age);
delete person.age;
console.log({person});

let car={
namm:"angel",
age:60,
friends:{
name:"esta"


}

}
let pt=new Object();
pt.name="iop";
console.log(car.namm);