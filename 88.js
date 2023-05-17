// Write a JavaScript program to check whether two given integers are similar or not,
// if a given divisor divides both integers and it does not divide either.

function check(){
    var num1= parseInt(prompt());
    var num2= parseInt(prompt());
    var num3= parseInt(prompt());

    if(num1%num3 === 0 && num2%num2 === 0 )
   {
       console.log('Trueeeee !!!');
   } 
  else{
       console.log('Falseeee !!!');
   } 

}

check();

// done 