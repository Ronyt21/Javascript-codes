// Write a JavaScript program to check from three given integers that whether
//  a number is greater than or equal to 20 and less than one of the others.

function check(){
    var num1 = parseInt(prompt());
    var num2 = parseInt(prompt());
    var num3 = parseInt(prompt());
    
    if(num1>= 20){
        if(num2>num1 || num3>num1){
            console.log('true !!');
        }
    }
    else if(num2>= 20){
        if(num1>num2 || num3>num2){
            console.log('true !!');
        }
    }
   else if(num3>= 20){
        if(num2>num3 || num1>num3){
            console.log('true !!');
        }
    }
    else{
        console.log('false')
    }
}
 
