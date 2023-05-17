// write a program to create a result of a student in various examination :-
// if exam-type === regular then student will get A+ only if his marks is must be in the range of 89..100
// if exam-type === final-exam then student will get A+ if his marks is grater than 90

function result_prep(){
    var exam_type = prompt("exam type:- eg. regular or final");
    var total_marks = prompt('total marks');
    total_marks = parseInt(total_marks);
    console.log(exam_type);
    console.log(total_marks);

    if(exam_type === "regular"){
        if(total_marks>=89 && total_marks<=100){
            console.log('true');
        }
    }
    else if(exam_type === "final"){
        if(total_marks>89 && total_marks<=100){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }
    else{
        console.log('false');
    }

}

result_prep();