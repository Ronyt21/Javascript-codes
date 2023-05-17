// write a js program to find longest string from given array of string 

function find(){
    var arr = ['ronit','rajjjjjj','ro','nit'];
      var temp = 0;
      var str = '';

      for(i=0;i<arr.length;i++){
          if(arr[i].length > temp){
            str = arr[i];
            temp = arr[i].length;
          }
      }

      console.log(str + ' ' + temp)
}

find();

// done 