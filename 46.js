// write a program to check whether one of the given two integers is multiple of 7 or 11

function check(){
    var num1 = parseInt(prompt());
    var num2 = parseInt(prompt());
    if((num1%7 === 0 || num1%11 === 0) && (num2%7 != 0 || num2%11 != 0)){
        console.log('True !!');
    }
    else if((num2%7 === 0 || num2%11 === 0) && (num1%7 != 0 || num1%11 != 0)){
        console.log('True !!');
    }
    else{
        console.log('false !!');
    }
}
check();

// done 