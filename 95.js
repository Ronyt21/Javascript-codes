//WAP a program to replace the specified number from the given number 

function replacee(){
    let arr = [2,1,4,2,5,6,7,8];
    let x = 2; // number to replace 
    let y= 5; // number to replace with
    console.log(arr);
    for(i=0;i<arr.length;i++){
        if(arr[i] === x){
            arr[i] = y ;
        }
    }
    console.log(arr);
}

replacee();