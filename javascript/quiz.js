/**
 * This function recup and display the Title and description of the quizzes
 */
function recupId() {
    let parameters = new URL(document.location.href);
    let name = parameters.searchParams.get("choiceQuizz");

    $("header").after("<section><h1>Super Quizzzz</h1></section>");
    $("section").append("<p>"+quizzes[name].title+"<p>");
    $("section").append("<p>"+quizzes[name].description+"<p>");    
}

$("document").ready(function () {
    recupId();
});