// write a javascript program to find atleast one element similar in given two sorted arrays

function check(){
    let arr1 = [1,2,3,4,5,6,7,8];
    let arr2 = [8,9,10,11,12,13,14], i=0,j=0;

    while(i<arr1.length){
        j = 0;
       while(j<arr2.length){
           if(arr1[i] === arr2[j]){
               return true;
             }
             j++;
       }
       i++;
    }
    return false;
}

console.log(check());
// done