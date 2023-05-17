// write a javascript program to find kth greatest element 

function find(){
    var arr = [40,80,30,10,50,90,70,20,60];
    var position = parseInt(prompt());
    var max = arr.length;
    arr = arr.sort();
    console.log(arr[max-position]);
}

find();