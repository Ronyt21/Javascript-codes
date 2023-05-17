// write a javascript program to replace each character of string to its next alphabet 

function replace(){
    var arr = ['ronit','raj','ro','nit'];
    var new_str ='';
    for(i=0;i<arr.length;i++){
         new_str = ''; 
        for(j=0;j<arr[i].length;j++){
            
            let code = arr[i].charCodeAt(j);
            new_str = new_str + String.fromCharCode(code+1);
        }
        console.log(new_str);
        arr[i] = new_str;

    }
    console.log(arr);
}

replace();

// done 