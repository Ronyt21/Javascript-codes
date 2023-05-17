// write a program to concat two strings if length of two srings are not same then
// remove extra string from the longest string 

function creates(){
    var str1 = prompt();
    var str2 = prompt();

    var len1 = str1.length;
    var len2 = str2.length;

    if(len1 != len2){
        if(len1>len2){
            let diff = len1 - len2;
            console.log( str1.slice(0,-diff)+str2 );
            console.log(diff);
        }
        else{
            let diff = len2 - len1;
            console.log( str1 + str2.slice(0,-diff) );
            console.log(diff);
        }
    }
}
creates();

// done 