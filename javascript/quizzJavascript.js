//-------------------------------------------------------//
function browseTable() {
    for (const key in quizzes) {
        console.log(key + " = " + quizzes[key].title);
    }
}

$("document").ready(function () {
    browseTable();
});
//-------------------------------------------------------//
//-------------------------------------------------------//
function createListe(){
    $("header").after("<form action=>CHOIX DU QUIZZ</form>");
    $("form").append("<select></select>");
    for (const key in quizzes) {
        $("select").append("<option>"+quizzes[key].title+"</option>");
    }
    $("form").append("<button type=submit> Commencer </button>");
}

$("document").ready(function () {
    createListe();
});