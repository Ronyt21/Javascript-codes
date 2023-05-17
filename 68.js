// write a program to create a string from first 'n' and last 'n' characters of given string 

function creates(){
    var str = prompt();
    var num = parseInt(prompt());
    
    console.log(str.slice(0,num)+str.slice(-num));

}

creates();

// done 