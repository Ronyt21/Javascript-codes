// write a program to find largest element in array , and set all the values of array to that value

function find(){
    var arr = [20,30,40,50,60];
    var largest_element = large(arr);

    for(i=0;i<arr.length;i++){
        arr[i] = largest_element;
    }
    console.log(arr);

}

function large(a){
    let temp = a[0];
    for(i=1;i<a.length;i++){
        if(temp<a[i]){
            temp = a[i];
        }
    }
    console.log(temp);
    return temp;
}

find();