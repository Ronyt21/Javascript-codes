//write a program to divide given two integers and convert the result into string
// and separate each character with comma

function convert(){
    var num1 = parseInt(prompt());
    var num2 = parseInt(prompt());
    var div = Math.floor(num1/num2);
    div = div.toString();
    console.log(typeof(div));
    div = div.split('');
    console.log(div);



}

convert();