console.log('------------------Data Types - Numbers -------------------- ');

let four = 4 ; 

four = 'four';

// Infinity = 1/0
// -Infinity = -1/0


let Four = 44 ;

console.log(four);
console.log(Four);

let infinity = 1/0;

let negInfinity = -1/0;



console.log(infinity == Infinity); // must be true 

console.log(negInfinity == -Infinity) //must be true

let nan = 'Text'/10;

console.log(nan); // NaN -> Not a number

console.log (nan == NaN); // NaN != NaN ,, so it is false 

console.log(isNaN(nan)); // you can check using function isNaN


let textNum = "Text" + 6;
console.log(textNum);

textNum = "Text" - 6;

console.log(textNum);

textNum = "Text" * 6;

console.log(textNum);


let a = 1
a = a+1;
console.log(a);

a +=1;

console.log(a);

a++;

console.log(a); // decrement oprtr also works same way 


let b = 10;

b /= 2;

console.log(b);

console.log('-----------------------------Data Type : BigInt------------------');

//

console.log('-----------------------------Data Type : String------------------');

const singleQuotes = " String that can contains 'single quotes'";

console.log(singleQuotes);

const doubleQuotes =' String that can contains "double quotes"';

console.log(doubleQuotes);

const backTicks = `string that can include variable - ${singleQuotes}`;

console.log(backTicks);

console.log('-----------------------------Data Type : Boolean------------------');

//represent true or false value --- !(Not Operator) use to switch between two possible values 


let isChecked = false;

console.log(isChecked); // false

isChecked = !isChecked;

console.log(isChecked); // true

console.log('-----------------------------Data Type : Null ------------------');

//nothing stored

//nothing ,empty or value unknown

let age1 = null ; //deliberatly put empty

console.log(age1);


console.log('-----------------------------Data Type : undefined------------------');

//not assiged 

//variable exits but it's value not assigned 

let age2 ;
console.log(age2);


console.log(age1 == age2) //true

console.log(age1 === age2); // false

console.log('-----------------------------Data Type : objects------------------');

//not primitive data types like above which contains single value. this has collection of data 
const camera = {
    brand : "sony",
    model: "zv-e10",
    year : "2023"

}

console.log(camera);


console.log(typeof camera);

let pi = Math.PI;

console.log(typeof pi);