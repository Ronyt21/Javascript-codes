//write a program to check whether one of the given number is 15 , or their sum or
// diff is 15

function check(){
    var num1 = parseInt(prompt());
    var num2 = parseInt(prompt());

    if(num1 === 15 || num2 === 15){
        console.log('Trueee !!')
    }
    else if(num1+num2 === 15 || num1-num2 === 15){
        console.log('Trueee !!');
    }
    else{
        console.log('false !!')
    }
}
check();