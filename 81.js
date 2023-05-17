// write a program to add two digit of given integer 

function add(){
    var num = parseInt(prompt());
    var temp = 0,sum = 0;
      while (num>=1) {
          temp = Math.floor(num % 10);
         sum = sum + temp;
         num = num/10;

      }
      console.log(Math.floor(sum));

}

add();

// done 