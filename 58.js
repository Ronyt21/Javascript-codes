//write a program to create specified copies of last three characters of given str

function creates(){
       var str = prompt();
       var num = parseInt(prompt());
       var last_three = str.slice(-3);
       var new_str = str;
       for(i=0;i<num;i++){
         new_str += last_three;
       }
       console.log(new_str);
}

creates();

// done 