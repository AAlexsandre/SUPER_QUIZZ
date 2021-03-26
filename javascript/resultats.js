/**
 * This function create and display the questions, the anwsers and show there are good or bad anwser
 */
function createAndDisplayTheAnswers() {
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

    $("header").after("<section></section>");
    for (let index = 0; index < quizzes[quiz].data.length; index++) {
        $("section").append("<h2>" + quizzes[quiz].data[index].question + "</h2>");
        $("section").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index]] + "</h3>");

        if (tabAnswer[index] == quizzes[quiz].data[index].bonneReponses[0]) {
            $("section").append("<p class=good> C'est la bonne réponse</p>");

        } else {
            $("section").append("<p class=bad>faux. La bonne réponse est : " + quizzes[quiz].data[index].reponses[quizzes[quiz].data[index].bonneReponses[0]] + "</p>");
        }
    }
}

$("document").ready(function () {
    createAndDisplayTheAnswers();
});