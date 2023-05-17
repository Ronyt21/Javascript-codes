// write a javascript program to find the number which appears most in the array

function find(){
    let arr = [1,2,3,4,5,5,5,5,6,6,6,4,4,4,4];
    let max_app = 0;let flag =0,temp = 1;;

    for(i=0;i<(arr.length-1);i++){
        flag = 1;
        for(j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                flag++;
            }
        }
        

        if(flag>temp){
         temp = flag;
         max_app = i;
         
        }
        // console.log(flag+ ' ' + i);
       if(flag>=1){
            i = i + (flag-1);
        }
    }
   console.log(arr[max_app] + ' '+ temp);
}

find();