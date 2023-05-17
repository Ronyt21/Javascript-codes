// write a program to find types of angle 
// 0-90 = acute angle 
// 90 = right angle 
// 90-180 = obtuse angle 
// 180 straight angle 


function angle(){
    var angle = parseInt(prompt());

    if(angle<90 && angle>0){
        console.log('acute angle');
    }
   else if(angle === 90){
        console.log('right angle');
    }
    else if(angle<180 && angle>90){
        console.log('obtuse angle');

    }
    else if(angle === 180){
        console.log('straight angle');
    }
    else {
        console.log('invalid angle ');
    }
}

angle();

// done 