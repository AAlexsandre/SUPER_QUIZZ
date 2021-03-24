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
function DisplayTheQuestionsInConsole() {
    for (let i = 0; i < quizzes[parameters].data.length; i++) {
        console.log(quizzes[parameters].data[i].question);
    }
}

function DisplayTheQuiz() {
    $("section").append("<form action=resultats.html></form>")

    for (let i = 1; i < quizzes[parameters].data.length; i++) {
        $("form").append("<img src=../images/"+parameters+"/img" + i + ".jpg></img>");
        $("form").append("<div>" + quizzes[parameters].data[i - 1].question + "</div");

        for (let j = 0; j < 3; j++) {
            $("form").append("<input type=radio name=answer"+i+">" + quizzes[parameters].data[i - 1].reponses[j] );
        }
        $("form").append("<br>");
    }
    $("form").append("<button type=submit>Verification</button>");
}

$("document").ready(function () {
    recupId();
    DisplayTheQuestionsInConsole();
    setTimeout(DisplayTheQuiz, 4000);
});