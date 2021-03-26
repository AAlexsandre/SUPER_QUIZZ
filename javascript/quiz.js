let parameters = new URL(document.location.href).searchParams.get("choiceQuizz");
let difId = 0;
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

/**
 * this function creates and displays the selected quiz on the home page 
 */
function DisplayTheQuiz() {
    let index = 0;
    $("section").append("<form action=resultats.html></form>")


    for (let i = 1; i <= quizzes[parameters].data.length; i++) {
        $("form").append("<img src=../images/" + parameters + "/img" + i + ".jpg></img>");
        $("form").append("<div name=" + parameters + ">" + quizzes[parameters].data[i - 1].question + "</div");

        for (let j = 0; j < quizzes[parameters].data[i - 1].reponses.length; j++) {
            $("form").append("<input type=radio id=answer" + difId + "   name=answer" + i + " value=" + index + ">");
            $("input:last").after("<label for=answer"+difId+">"+ quizzes[parameters].data[i - 1].reponses[j]+"</label>");
            index++;
            difId++;
        }

        $("form").append("<br>");
        index = 0;
    }
    $("form").append("<input name=choiceQuizz type=hidden value=" + parameters + ">");
    $("form").append("<button class=check type=submit>Verification</button>");

}

$("document").ready(function () {
    recupId();
    DisplayTheQuestionsInConsole();
    setTimeout(DisplayTheQuiz, 4050);
});