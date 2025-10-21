//objects - key value pairs 

//create empty object 

const empty = {};


const user = {
    nameArray : ['Anupriya', 'Dayaratne'],
    nameObject : {
        fname : 'Anupriya',
        lname: 'Dayaratne'
    },
    firstName: 'Anupriya',
    lastName:'Dayaratne',
    age : 41,

    bio(){
        console.log(` hello I'm ${this.firstName} and ${this.age} old`)
    },
    introSelf(){
        console.log(`i'm ${this.nameArray[0]}`)
    }

}


console.log(user);
user.introSelf();

//modifying object

user.age = user.age+1;

console.log(user.age);

console.log(user.age ? 'Age exists': 'no age');


let goal =5;


for (let i =0; i<goal ; i++){
    console.log(`i is now ${i} of ${goal}`);
}


const phone = {
    model : 'iphone 13',
    make :'apple',
    coloer :'black',
    year : 2023
}


//for in for unknown no of elements in object iteration 

for(let key in phone){
    console.log('key :'+key);
    console.log('value :'+ phone[key]);
}



function printObj(obj){

    for(let key in obj){
        console.log('key :'+key);
    console.log('value :'+ obj[key]);
    }
}


printObj(phone);


const user1 = { name:'Anup' , age:42}

//shallow copy of user1

const user1clone = {}

for (let key in user1){
    user1clone[key] = user1[key];

}


console.log(user1clone);

const user2clone = {...user1};

console.log(user2clone);

//override values and add new properties to the object


const user3clone = {...user1, age :41 , location: 'New Zealand'}

console.log(user3clone);
console.log(user1);

//merge objects 

const car = {make:'Toyota', Year :2012}

const mergedObj = {...user1,...car};

console.log(mergedObj);


//methods in objects


const testObj = {

    name : 'Test',

    sing1 : function(){
        console.log('sing a song1');
    },

    sing2(){
        console.log('sing a song2');
    }
}


testObj.sing1();
testObj.sing2();

//context with - >  this

const person = {
    name : ' Jhon ',

    printGreeting() {
        console.log(`Hello from ${this.name} !`)
    }
}


person.printGreeting();


const userObj = {
    name: 'Bingo',
    printThis(){
        console.log(this);
        return this;
    },

    printGreeting1(){
        console.log(`Hello I'm ${this.name}`);
    }
}

userObj.printThis().printGreeting1();

userObj.printThis();


