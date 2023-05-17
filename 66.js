// write a program to display city names if they start with 'Los' or 'New'

function find(){
     var city =  prompt();
     var initials = city.slice(0,3);

     if(initials === 'los' || initials === 'new'){
         console.log(city);
     }
     else{
         console.log('invalid city name ');
     }
}

find();

// done 