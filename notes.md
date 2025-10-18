for mathematical operation +  ---> "Text" + 6(Number) = concatenate 
other operations -> gives result of NaN


BODMAS is an acronym that helps remember the order of operations in mathematics. It stands for Brackets, Orders (powers and roots), Division, Multiplication, Addition, and Subtraction. Division and multiplication have equal priority, so they are performed from left to right. The same applies to addition and subtraction; they are also performed from left to right after all other operations are complete. 
Brackets: Solve any calculations inside brackets first.
Orders: Next, calculate any powers or square roots (also known as indices).
Division and Multiplication: Perform all division and multiplication from left to right, as they appear.
Addition and Subtraction: Finally, perform all addition and subtraction from left to right, as they appear. 


Data Types :

Numbers 
BigInt   ----> xxxxxxxn add n end of the big number
String


🧩 Object Data Type in JavaScript
Definition

An object stores data as key–value pairs.
Each property has a name (key) and a value.

const person = {
  name: "Anupriya",
  age: 30,
  city: "Dunedin"
};

Accessing Values
console.log(person.name);     // Anupriya
console.log(person["city"]);  // Dunedin

🔄 Objects vs Arrays
Feature	Object	Array
Structure	Stores key–value pairs	Stores ordered list of values
Access by	Key name	Index number
Syntax	{ key: value }	[value1, value2, value3]
Example	{ name: "Alex", age: 25 }	["Alex", 25]
Order	Unordered	Ordered
Best for	Representing real-world entities	Lists or sequences of data
Example Comparison
// Object
const car = {
  brand: "Toyota",
  year: 2020
};

// Array
const fruits = ["apple", "banana", "mango"];

console.log(car.brand);   // Toyota
console.log(fruits[1]);   // banana

✅ Quick Summary

Use Objects when you want to store key–value pairs (like person details).

Use Arrays when you want to store a list or sequence (like a list of fruits).
