let count = 3;
let test;
/**
 * This function display 3 2 1 and after remove the countdown
 */
function countdown() {
    
    $("section").append("<span class=cpt>" + count + " </span>");
    
    if(count == 0){
        clearInterval(test);
        $(".cpt").remove();
    }
    count--;
};

$("document").ready(function () {
    $("section").append("<span class=cpt>Le quiz commencera dans : </span>");
    test = setInterval(countdown, 1000);
});