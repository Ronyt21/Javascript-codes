// write a program to find maximum difference bwtween two adjacent integers

function max_diff(){

    var arr = [10,50,60,40,10,30];
    var diff = 0;

    for(i=0;i<(arr.length)-1;i++){
        let temp = Math.abs(arr[i]-arr[i+1]);
        if(temp>diff){
            diff = temp;
        }
    }
    console.log(diff);
}

max_diff();

// done 