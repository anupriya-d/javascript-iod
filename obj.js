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