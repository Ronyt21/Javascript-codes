//wirte a program to convert given number into hours and mins 

function convert(){
    var num = parseInt(prompt());
    var hours = Math.floor(num/60);
    var mins = num%60;

    console.log(hours+" hours "+mins+' minutes')
}
convert();

// done 