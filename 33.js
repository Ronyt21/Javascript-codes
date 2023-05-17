// write a program to check given two numbers are in the range of 40..60 or 70..100

function check(){
   var num1 = prompt();
   var num2 = prompt();
   num1 = parseInt(num1);
   num2 = parseInt(num2);

   if(num1>=40 && num1<=60){
    if(num2>=40 && num2<=60){
        console.log("given numbers are in range of 40..60");

    }
    else{
        console.log("not in range");

    }
   }
   else if(num1>=70 && num1<=100){
    if(num2>=70 && num2<=100){
        console.log("given numbers are in range of 70..100");

    }
    else{
        console.log("not in range");

    }  
   }
   else{
    console.log("not in range");
   }
}

check();


// done