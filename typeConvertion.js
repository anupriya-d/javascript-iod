//type conversion

//explicit & implicit 

let myBoolean = false;

console.log(myBoolean);

console.log(typeof myBoolean);


console.log(String(myBoolean)); // explicit

console.log("1" + 1+ 2); //implicit

console.log(1+1+"2");

console.log(1*1*"2");

console.log(Number("4")+ Number("4"));


console.log(Boolean(0));

console.log(Boolean("false")); // true - any non empty string will be true

console.log(Boolean(-1)); //true

if("") {
    console.log("Value is true");
}else{
    console.log("Value is false")
}



let age = 10;

let isAdult = (age >= 18) ? 'is an adult' : 'is not an adult'

console.log(isAdult);