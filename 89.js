// write a javascript program to replace $ from '+ - * /' in the given expression

function replacee(){
    var exp = 'x $ y = z';
    var opr = prompt();
   exp = exp.replace('$' , opr);

    console.log(exp);
}

replacee();

// done 