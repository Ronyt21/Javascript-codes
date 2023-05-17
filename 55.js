// write a program to check whether string have equal number of p's and t's

function check(){
    var str = prompt();
    var count_p = 0, count_t = 0;
    str = str.split('');
    for(i=0;i<str.length;i++){
        if(str[i]==='p'){
           count_p++;
        }
        if(str[i]==='t'){
            count_t++;
         }
    }

    if(count_p === count_t){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
check();

// done 