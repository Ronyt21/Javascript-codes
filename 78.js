//write a program to check whether a array contains 1 or 3 as their element or not 

function check(){
    var arr = [0,2,5,4,5];

    for(i=0;i<arr.length;i++){
        if(arr[i] === 3 || arr[i] === 1){
            console.log('trueeee');
            return 0;
        }

    }
    console.log('false');
}

check();

// done 