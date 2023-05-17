//write a program to count the number of vowelin given string 

function count_vowel(){
    var count = 0;
    var str = prompt();
    str.split('');
    for(i=0;i<str.length;i++){
        let is_vowel = 0;
        is_vowel = vowelCheck(str[i]);
        if(is_vowel === 1){
            count++;
        }
    }
    console.log(count);
}
count_vowel();

function vowelCheck(a){
    switch(a){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 1;
        default:
            return 0;
    }
}

// done 