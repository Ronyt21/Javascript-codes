//write a program to to replace each and every character to the alphabet following by them

function rep(){
    var str = prompt();
    var new_str ='';
    // str = str.split('');
    var max = (str.length)-1;
    for(i=0;i<=max;i++){
         let code = str.charCodeAt(i);
        new_str = new_str + String.fromCharCode(code+1);
    }
   
    console.log(new_str);
}
rep();

// done 