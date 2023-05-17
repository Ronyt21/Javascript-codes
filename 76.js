// write a program in js to make a new array with first and last elements of given arrays

function make(){
    var arr1 = [20,30,45,60];
    var arr2 = [56,90,70,98];
    var new_arr = [];
    new_arr.push(arr1[0]);
    new_arr.push(arr1[arr1.length-1]);
    new_arr.push(arr2[0]);
    new_arr.push(arr2[arr2.length-1]);
    console.log(new_arr);

}

make();
// done 