//write a js program to make a new array from middle elements of two given arrays 

function make(){
    var arr1 = [20,30,45,60,80];
    var arr2 = [90,70,66,54,65];
    var new_arr = [];
    var temp =Math.floor((arr1.length)/2);
    new_arr.push(arr1[temp]);
    new_arr.push(arr2[temp]);



    console.log(Math.floor(Math.floor(arr1.length)/2)); 
    console.log(Math.floor(Math.floor(arr2.length)/2)); 
    console.log(new_arr);

}

make();
// done 