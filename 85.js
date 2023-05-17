// write a program to separate array into two part like first element go to first part 
// second element go to second part , third element go to third part and so on 

function separate(){
    var arr = [1,2,3,4,5,6];
    var first_part = [];
    var second_part = [];

    for(i=0;i<arr.length;i=i+2){
        first_part.push(arr[i]);
    }
    for(i=1;i<arr.length;i=i+2){
        second_part.push(arr[i]);
    }

    console.log('first part = ' + first_part);
    console.log('second part = ' + second_part);


}

separate();

// done 