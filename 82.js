// write a program to sum digits of given integers without carry

function sum(){
    var num1 = parseInt(prompt());
    var num2 = parseInt(prompt());

    var temp1 = 0,temp2 = 0;
    var sum ='';
    
    if(num1<num2){
        let flag = num1;
        num1 = num2;
        num2 = flag;

    }
    
    while(num1>=1){
        temp1 = Math.floor(num1%10);
        temp2 = Math.floor(num2%10);
        
        temp1 = (temp1+temp2)%10;
        temp1 = temp1.toString();
        num1 = num1/10;
        num2 = num2/10;


        sum = temp1 + sum;

    }

    console.log(sum);
}

sum();

// done 