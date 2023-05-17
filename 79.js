// write a program to check whether 30 ,40 appear two times in an array

function check(){
    var arr = [0,40,40, 15 , 16];
    var temp = 0;

    for(i=0;i<arr.length;i++){

        if(arr[i]===30 || arr[i] === 40){
            temp++;
        }
    }

    if(temp === 2){
        console.log('turuuuuu');

    }
    else {
        console.log('falseeee');
    }
}
check();

// done 