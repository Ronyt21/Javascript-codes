// write a javascript program to compute the sum of absolute differences of 
//consequtive of given array of integers 
let sum=0;
function abs_sum_of_diff(){
    let arr = [1,2,3,2,-5];
    let arr_diff = [0];

    for(i=0;i<(arr.length)-1;i++){
        arr_diff[i] = Math.abs(arr[i]-arr[i+1]);

    }
arr_diff.forEach((item, index)=>{
    sum = sum + arr_diff[index];
})
 console.log(sum);
}

abs_sum_of_diff();