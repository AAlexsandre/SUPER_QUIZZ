/**
 * This function display in the console the id of quizz and titles
 */
function browseTable() {
    for (const key in quizzes) {
        console.log(key + " = " + quizzes[key].title);
    }
}

$("document").ready(function () {
    browseTable();
});


/**
 * this function creates a form and dynamically adds the drop-down list 
 */
function createListe(){
    $("header").after("<form action=><h2>CHOIX DU QUIZZ<h2></form>");
    $("form").append("<select></select>");
    for (const key in quizzes) {
        $("select").append("<option>"+quizzes[key].title+"</option>");
    }
    $("form").append("<button type=submit> Commencer </button>");
}

$("document").ready(function () {
    createListe();
});