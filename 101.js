//write a program to check whethr given integer is latin and  are two capital or small arent adjacent 



let is_lowerCase = function(symbol){
     if('a'<= symbol && 'z' >= symbol ){
         return true;
     }
     else {
         return false ;
     }
}

let is_upprCase = function(symbol){
    if('A'<= symbol && 'z' >= symbol ){
        return true;
    }
    else {
        return false;
    }
}

function check(x){
    
    let int_len = x.length, flag = '';
    for(i=1; i<int_len; i++){
       if(is_lowerCase(x[i])&& is_upprCase(x[i-1])){
             flag = true;
       }
       else if(is_upprCase(x[i])&& is_lowerCase(x[i-1])){
        flag = true;
          }
       else return false;
    }
    return flag;
}

console.log(check('rAj'));

// done 