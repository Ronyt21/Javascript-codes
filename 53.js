//Check whether the characters a and b are separated by exactly 3 places anywhere in a given string
 
function separate(){
    var str = prompt();
    var indexof_a = str.search('a');
    var indexof_b = str.search('b');
    var diff = Math.abs(indexof_a-indexof_b);
    console.log(indexof_a);
    console.log(indexof_b);

    if(diff === 4){
        console.log('true');
    }
    else{
        console.log('false');

    }

}

separate();

// done 