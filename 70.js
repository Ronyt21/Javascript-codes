//write a program to rotate the element to the lefte of the array 

function rotate(){
    var arr = [3,4,5];

    var swap = arr[0];
    arr[0]= arr[2];
    arr[2] = swap;
 
    console.log(arr);

}

rotate();

// done 