// find the largest number between two numbers . the number must be in 40..60 range 

function check(){
    var num1 =  prompt();
    var num2 =  prompt();
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(num1>=40 && num1<= 60){
    if(num2>=40 && num2<= 60){
         console.log(greatestNum(num1,num2));
    }
    else{
        console.log("not in range");

    }
    }
    else{
        console.log("not in range");
        
    }

}

function greatestNum(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

check();

// done 