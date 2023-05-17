// write a javascript program and cut the first and last digit of the string 
//if strings first and last character is 'p' otherwise return original

function creates(){
    var str = prompt();
    var first_char = str.slice(0,1);
    var last_char =  str.slice(-1);

    // console.log(first_char + last_char);

    if(first_char === 'p' && last_char === 'p'){
        console.log(str.slice(1,-1));
    }
    else{
        console.log(str);
    }

}

creates();

// done 