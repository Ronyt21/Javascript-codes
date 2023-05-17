//write a program to arrange each letter of given string into alphabetical order

function convert(){
    var new_str=[];
    var fresh_str='';
    var str = prompt();
    str = str.split('').sort().join('');
    console.log(str);
}
convert();

// done 