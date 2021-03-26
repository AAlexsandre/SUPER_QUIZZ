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
        $("section").append("<p>" + quizzes[quiz].data[index].question + "</p>");
        $("section").append("<p>" + quizzes[quiz].data[index].reponses[tabAnswer[index]] + "</p>");
    }
}

$("document").ready(createAndDisplayTheAnswers);