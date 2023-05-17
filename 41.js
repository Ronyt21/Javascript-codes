//write a program to check three given number is same or not if it is same then return 30
//otherwise return 20 ,if two numbers are same then return 40;

function check(){
    var num1 = prompt();
    var num2 = prompt();
    var num3 = prompt();

    num1= parseInt(num1);
    num2= parseInt(num2);
    num3= parseInt(num3);

    if(num1===num2){
        if(num2===num3){
            console.log(60);
        }
        else{
            console.log(40);
        }
    }
    else{
        console.log(20);
    }

    
}

check();

// done 