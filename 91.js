// write a program to find maximum sum of k consecutive integers of given array

function maxSum(){
     var arr = [10,20,70,50,40,60];
     var sum =0 , k = parseInt(prompt()),temp;

     for(i=-0;i<= (arr.length)-k;i++){
         temp = 0;
         for(j=0;j<k;j++){
           temp = temp + arr[i+j];
         }
         if(temp>sum){
             sum = temp;
         }
     }
     console.log('maximum sum of '+k+' element is = '+sum)
    }

     maxSum();

    //  done 