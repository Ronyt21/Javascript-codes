// write a program to find sum of two given numbers and return 65 if number is in 
// range of 50..80 else return 80

function check(){
    var num1,num2;
num1 = prompt();
num2 = prompt();
num1 = parseInt(num1);
num2 = parseInt(num2);
var sum = num1+num2;
if(sum>=50 && sum<= 80){
    console.log(65);
}
else{
    console.log(80);
}


}
check();

// done 