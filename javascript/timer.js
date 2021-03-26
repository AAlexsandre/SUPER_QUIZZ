/**
 * This function display 3 2 1 and after remove the countdown
 */
function countdown() {

    $("section").append("<span>Le quiz commencera dans : </span>");
    setTimeout(function () { $("section").append("<span>3 </span>") }, 1000);
    setTimeout(function () { $("section").append("<span>2 </span>") }, 2000);
    setTimeout(function () { $("section").append("<span>1 </span>") }, 3000);
    setTimeout(function () { $("span").remove() }, 4000);
};

$("document").ready(function () {
    countdown();
});