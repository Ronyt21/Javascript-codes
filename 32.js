// write a program to check which of the given integer is nearest to the 100 

function check(){
    var num1 = prompt();
    var num2 = prompt();
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var diff1 = Math.abs(100 - num1);
    var diff2 = Math.abs(100-num2);

    if(diff1>diff2){
        console.log(num2 + " is the nearest integer to 100")
    }
    else{
        console.log(num1 + " is the nearest integer to 100")

    }


}

check();


// done