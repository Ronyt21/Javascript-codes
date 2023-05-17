// write a program to create a new string from give string in which :-
// first three letter should be in small case
// all letter ecxept first should be in upper case
// if string have only three letter then return the string in uppercase

function creates(){
    var str = prompt();
    var first_part =  str.slice(0,3);
    first_part = first_part.toLowerCase();
    var second_part = str.slice(3);
    second_part = second_part.toUpperCase()
    console.log(first_part+second_part);
}
creates();


// done 

