// write a program to find the shortest possible string which can create string to
// make it a pallindrom by adding characters to the end of it

function finds(text){
    let temp = 0, flag = 0;
    let text_len = text.length;
   for(i=0;i<text_len;i++){
     if(text[i]===text[text_len - i]){
         flag = text_len-i;
         temp = 1;
     }
     else{
         flag=0;
         temp = 0;
     }
   }
   return {
       flags: flag,
       temps:temp
   }
}

console.log(finds(ronorit))
