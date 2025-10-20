
//in fuction declaration , function can be called before declaration (hoisted) 


function addition(a,b){

    console.log(a+b);
}


addition(3,4);


function ageCheck(age){

    if(age <=18 ){
        return 'An adult'
    }else{
        return 'Not an adult'
    }
}

console.log(ageCheck(12));
console.log(ageCheck(22));

//BMI formula  = weight in kg / (height in m) * (height in m)

function getBMI(weight,height){

    let bmi = weight/(height *height);

    console.log(bmi);
}

getBMI(60,1.56);



//function expression (can't hoisted , that means you can't called the function before define it )


/* ---------------------- function expression -------------------------- */


const sayHiExpress = function(){

    console.log('Hello !!!');

}

sayHiExpress();



/*------------------ Arrow function -------------------------*/


const sayHiArrow = () => console.log('Hello from Arrow !');

sayHiArrow();


//test comment 