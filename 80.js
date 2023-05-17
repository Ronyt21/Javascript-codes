//wite a javascript program to swap first and last element of the array 

function swap(){
    var arr = [20,30,40,50];
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    console.log(arr);

}

swap();

// done 