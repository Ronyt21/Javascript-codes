// write a javascript program to check whether given string can be reaaranged to equal
// to the another given string 

function check(){
    let string1 = 'hellos' , string2 = 'ohlles';
    let str1Len = string1.length , str2Len = string2.length, temp = 1;;
    if(str1Len === str2Len){
        for(i=0;i<str1Len;i++){
            temp = string2.search(string1[i]);
            if(temp === -1){
                return false;
            }
        }
    
}
 return true;
}

console.log(check())

// done