//
// window.onload = function(){
//
// var counter = 0
// var timeleft = 150
//
// function convertSeconds(s){
//    var min = floor(s / 60);
//    var sec = s % 60;
//    return nf(min, 2) + ':' + nf(sec, 2);
// }
//
// function setup(){
//    noCanvas();
//    
//    
//
//    var timer = select ('#timer');
//    timer.html(convertSeconds(timeleft - counter));
//
//    var interval = setInterval(timeIt, 1000);
//
//    function timeIt() {
//    counter++;
//    time.html(convertSeconds(timeleft - counter));
//    if (counter == timeleft){
//        clearInterval(interval);
//        counter = 0;
//    }
//    }
//    
// };
// }
//

function check(){

    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var correct = 0;

    if (q1 === "Neil Armstrong"){
        correct++;
    }
    if (q2 === "Altair 8800"){
        correct++;
    }
    if (q3 === "Molly"){
        correct++;
    } 
    if (q4 === "10"){
        correct++;
    }

    var messages = ["Perfect!", "Almost there!", "Did you even try?"];
                    //0             1               2
    var range;
    
    if (correct < 1){
        range = 2;
    }
    
    if (correct > 0 && correct < 3){
        range = 1;
    }

    if (correct > 2 && correct < 4){
        range = 1;
    }

    

    if (correct > 3) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
