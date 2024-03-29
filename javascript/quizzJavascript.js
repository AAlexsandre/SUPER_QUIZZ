/**
 * This function display in the console the id of quizz and titles
 */
function browseTable() {
    for (const key in quizzes) {
        console.log(key + " = " + quizzes[key].title);
    }
}

/**
 * this function creates a form and dynamically adds the drop-down list 
 */
function createList() {
    $("form").append("<select name=choiceQuizz></select>");

    for (const key in quizzes) {
        $("select").append("<option value=" + key + ">" + quizzes[key].title + "</option>");
    }
    $("form").append("<button type=submit>Commencer</button>");
}

$("document").ready(function () {
    browseTable();
    createList();
});