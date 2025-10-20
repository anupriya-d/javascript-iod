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

