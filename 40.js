// write a javascript program to check from given two given integer one of them is
//  8 or their sum or there diff is 8

function check(){
    var num1 = prompt();
    var num2 = prompt();
    num1 = parseInt(num1);
    num2= parseInt(num2);
   if(num1 === 8 || num2 === 8){
       console.log(true);
   }
   else if(num1+num2 === 8 || num1-num2 === 8){
       console.log(true)
   }
   else{
       console.log('false');
   }
}
check();

// done 