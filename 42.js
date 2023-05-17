// write a program to check whether given numbers are inreasing in soft mode or strict mode 

function check(){
    var num1 = parseInt(prompt());
    var num2 = parseInt(prompt());
    var num3 = parseInt(prompt());
    
    if(num2>=num1){
        if(num3>=num2){
            console.log('strict mode');
        }
    }
    else{
        console.log('soft mode');
    }
}
check();

// done 