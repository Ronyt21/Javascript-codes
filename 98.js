//Write a JavaScript program to switch case of the minimum possible number of 
//letters to make a given string written in the upper case or in the lower case.

function caps(text){
    let small = 0,large = 0;
    for(i=0;i<text.length;i++){
        if(text[i] === text[i].toUpperCase()){
            large++;
        }
        else{
            small++;
        }
    }
    if(small<large){
        return text.toLowerCase();
    }
    else{
        return text.toUpperCase();
    }
}

console.log(caps("ronIT"));
// done