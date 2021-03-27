/**
 * This function create and display the questions, the anwsers and show there are good or bad anwser
 */
function createAndDisplayTheAnswers() {
    $("#placeForLoadBar").remove();
    let quiz = new URL(document.location.href).searchParams.get("choiceQuizz");
    let tabAnswer = [];
    let i = 1;

    tabAnswer[i] = new URL(document.location.href).searchParams.get("answer" + (i));

    while (tabAnswer[i] != null) {
        i++;
        tabAnswer[i] = new URL(document.location.href).searchParams.get("answer" + (i));
    }
    tabAnswer.shift();
    tabAnswer.pop();

    $("header").after("<section id=displayAnswers></section>");
    for (let index = 0; index < quizzes[quiz].data.length; index++) {
        $("#displayAnswers").append("<h2>" + quizzes[quiz].data[index].question + "</h2>");
        $("#displayAnswers").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index]] + "</h3>");

        if (tabAnswer[index] == quizzes[quiz].data[index].bonneReponses[0]) {
            $("#displayAnswers").append("<p class=good> C'est la bonne réponse</p>");

        } else {
            $("#displayAnswers").append("<p class=bad>faux. La bonne réponse est : " + quizzes[quiz].data[index].reponses[quizzes[quiz].data[index].bonneReponses[0]] + "</p>");
        }
    }
}

/**
 * This function is personnal it creates and display a load barre before the result
 */
function loadingQuiz() {
    $("header").after("<section id=placeForLoadBar><h1>TRAITEMENT EN COURS</h1></section>");

    $("#placeForLoadBar").append("<div id=loadBar></div>");
    $("#loadBar").append("<div id=loading ></div>");

    for (let i = 0; i < 2; i++) {
        $("#loading").animate({ left: "38em" }, 1000);
        $("#loading").animate({ left: "0em" }, 1000);
    }

}

$("document").ready(function () {
    loadingQuiz();
    setTimeout(createAndDisplayTheAnswers,4500);
});