// write a program to test whether a string end with script or not 

function test(){
    var str = prompt();
    var last5 = str.slice(-6);
    if(last5 === 'script'){
        console.log('true');
    }
    else{
        console.log('false');
    }    
}

test();

// done 