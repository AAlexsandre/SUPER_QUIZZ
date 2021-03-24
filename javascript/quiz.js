let parameters = new URL(document.location.href).searchParams.get("choiceQuizz");
/**
 * This function recup and display the Title and description of the quizzes
 */
function recupId() {

    $("header").after("<section><h1>Super Quizzzz</h1></section>");
    $("section").append("<p>" + quizzes[parameters].title + "</p>");
    $("section").append("<p>" + quizzes[parameters].description + "</p>");
}

/**
 * This function display all questions of quiz
 */
function DisplayTheQuestions() {
    for(let i = 0; i < quizzes[parameters].data.length; i++){
        console.log(quizzes[parameters].data[i].question);
    }
}

$("document").ready(function () {
    recupId();
    DisplayTheQuestions();
});