//write a javascript program to capatlise first letter of every word in sentence 

function capatlyse(){
    var new_str = '';
    var new_word = '';
    var str = prompt();
    str = str.split(" ");
    // console.log(str);
    for(i=0;i<str.length;i++){
       let first_char = str[i][0].toUpperCase();
       let rest_char = str[i].slice(1);
       new_str = new_str + (first_char+rest_char+" ");
    //    console.log(first_char+rest_char+" ");

    }
    console.log(new_str);
}

capatlyse();