// write a javascript program to calculate sum of three elemnts of given array

function sum(){
    var nums = [];
    var sum =0;
    for(i=0;i<3;i++){
        nums[i] = parseInt(prompt());
    }
    for(i=0;i<3;i++){
        sum  = sum + nums[i];
    }
     console.log(sum);
}

sum();

// done 