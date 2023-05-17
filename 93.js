// coder reborn
// write a javascript program to find maximal difference between all possible pair of array element

function diff(){
    let arr = [1,10,9,4,5];
    let max_diff =0;
    for(i=0;i<(arr.length-1);i++){
        for(j=i+1;j<arr.length;j++){
         if( max_diff < Math.abs(arr[i]-arr[j])){
             max_diff = Math.abs(arr[i]-arr[j]);
         }
        }
    }
    return max_diff;
}

console.log(diff());