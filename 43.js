// write a program to check whether given three integers have same rightmost digit 

function check(){
    var num1 = parseInt(prompt());
    var num2 = parseInt(prompt());
    var num3 = parseInt(prompt());
    
    var right1 = num1%10;
    var right2 = num2%10;
    var right3 = num3%10;

    if(right1 === right2 && right2 === right3){
          console.log('true');
     }
     else{
        console.log('false');
   }
}
check();

// done 