// write a program create a specified copies of given strings 
 function creates(){
     var str= prompt();
     var num = parseInt(prompt());
     var new_str='';

     for(i=1;i<=num;i++){
         new_str = new_str + str;
     }
     console.log(new_str);

 }

 creates();