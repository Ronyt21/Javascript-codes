// write a javascript program to to check whether two array of integers are similar or not
// array would be consider similer if swapping most the elements doesnt change the array


function check(){
    var arr1 = [10,20,30,40];
    var arr2 = [10,30,20,40];
    var yes = 0; no = 0;

    if(arr1.length === arr2.length){
        for(i=0;i<arr1.length;i++){
          if(arr1[i] === arr2[i]){
              yes++;}
        
        else{
            no++;
        }
    }


    
    if(yes=>no)
        console.log('trueee');
        else
        console.log('false');

}
 else{
        console.log('false');
    }
    
}

check();