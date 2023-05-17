// write a program to find last digit of given three integers are same or not 

function find(){
   var num1,num2,num3;
   num1 = prompt();
   num2 = prompt();
   num3 = prompt();

   num1 = parseInt(num1);
   num2 = parseInt(num2);
   num3 = parseInt(num3);

   var last1 , last2 , last3;

last1= lastDigit(num1);
last2= lastDigit(num2);
last3= lastDigit(num3);

if(last1 === last2 ){
    if(last2 === last3 ){
        console.log("true");

    }
    else{
        console.log('false');
    }
}
else{
    console.log('false');
}



}

function lastDigit(a){
    console.log(a%10);
   return a%10;
   
}

find();

// done 