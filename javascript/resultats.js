/**
 * This function create and display the questions, the anwsers and show there are good or bad anwser
 */
function createAndDisplayTheAnswers() {
    $("#placeForLoadBar").remove();
    let quiz = new URL(document.location.href).searchParams.get("choiceQuizz");
    let tabAnswer = [];
    let i = 0;

    tabAnswer[i] = new URL(document.location.href).searchParams.getAll("answer" + (i));

    while (tabAnswer.length < quizzes[quiz].data.length) {
        i++;
        tabAnswer[i] = new URL(document.location.href).searchParams.getAll("answer" + (i));
    }

    console.log(tabAnswer);

    $("header").after("<section id=displayAnswers></section>");
    for (let index = 0; index < quizzes[quiz].data.length; index++) {
        $("#displayAnswers").append("<h2>" + quizzes[quiz].data[index].question + "</h2>");

        if (quizzes[quiz].data[index].bonneReponses.length > 1) {

            for (let j = 0; j < tabAnswer[index].length; j++) {
                i = 0;
                for (let k = 0; k < quizzes[quiz].data[index].bonneReponses.length; k++) {
                    if (tabAnswer[index][j] == quizzes[quiz].data[index].bonneReponses[k]) {
                        $("#displayAnswers").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index][j]] + "</h3>");
                        $("#displayAnswers").append("<p class=good> C'est la bonne réponse</p>");
                        i++;
                    }
                }
                if (i == 0) {
                    $("#displayAnswers").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index][j]] + "</h3>");
                    if (tabAnswer[index][j+1] == quizzes[quiz].data[index].bonneReponses[j]) {
                        $("#displayAnswers").append("<p class=bad>faux. La bonne réponse est : " + quizzes[quiz].data[index].reponses[quizzes[quiz].data[index].bonneReponses[j+(quizzes[quiz].data[index].bonneReponses.length-1)]] + "</p>");
                    }
                    if (tabAnswer[index][j+1] == quizzes[quiz].data[index].bonneReponses[j+1]) {
                        $("#displayAnswers").append("<p class=bad>faux. La bonne réponse est : " + quizzes[quiz].data[index].reponses[quizzes[quiz].data[index].bonneReponses[j]] + "</p>");
                    }
                }
            }

        } else {
            $("#displayAnswers").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index]] + "</h3>");

            if (tabAnswer[index] == quizzes[quiz].data[index].bonneReponses[0]) {
                $("#displayAnswers").append("<p class=good> C'est la bonne réponse</p>");

            } else {
                $("#displayAnswers").append("<p class=bad>faux. La bonne réponse est : " + quizzes[quiz].data[index].reponses[quizzes[quiz].data[index].bonneReponses[0]] + "</p>");
            }
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

    for (let i = 0; i < 4; i++) {
        $("#loading").animate({ left: "38em" }, 500);
        $("#loading").animate({ left: "0em" }, 500);
    }

}

$("document").ready(function () {
    loadingQuiz();
    setTimeout(createAndDisplayTheAnswers, 4500);
});