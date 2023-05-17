// write a program to check specified character lies between 2nd and 4th postion in string 

function find(){
    var str = prompt();
    var spec_char= prompt();
    var str_part = str.slice(2,5);
    // console.log(str_part.search(spec_char));
    if(str_part.search(spec_char)!= -1){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
find();

// done 