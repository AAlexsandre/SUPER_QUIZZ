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

/**
 * this function creates and displays the selected quiz on the home page 
 */
function DisplayTheQuiz() {
    let difId = 0;
    let index = 0;

    $("section").append('<form action=resultats.html onsubmit="return needToClick()"></form>')

    for (let i = 0; i < quizzes[parameters].data.length; i++) {
        $("form").append("<div id=contenu" + i + "></div>");
        $("#contenu" + i).append("<img class=test src=../images/" + quizzes[parameters].data[i].image + ">");
        $("#contenu" + i).append("<div name=" + parameters + ">" + quizzes[parameters].data[i].question + "</div");

        if (quizzes[parameters].data[i].bonneReponses.length == 1) { createInputRadio(difId, index, i); }

        else { createInputCheckbox(difId, index, i); }

        $("form").append("<br>");
        index = 0;
        difId = difId + quizzes[parameters].data[i].reponses.length;
    }
    $("form").append("<input name=choiceQuizz type=hidden value=" + parameters + ">");
    $("form").append("<button class=check type=submit onclick=RemoveError()>Verification</button>");
}

/**
 * This function creates the input type radio if there is only one correct answer
 * @param {*} difId this parameter is an id for each input responses
 * @param {*} index this parameter is an identifier for each input answer (identical for the answers of the same question)
 * @param {*} i this parameter is to change a in data []
 */
function createInputRadio(difId, index, i) {
    for (let j = 0; j < quizzes[parameters].data[i].reponses.length; j++) {
        $("#contenu" + i).append("<input type=radio class=answer id=answer" + difId + "   name=answer" + i + " value=" + index + ">");
        $("input:last").after("<label for=answer" + difId + ">" + quizzes[parameters].data[i].reponses[j] + "</label>");
        index++;
        difId++;
    }
}

/**
 * This function creates the input type checkbox if there are many possible responses
 * @param {*} difId this parameter is an id for each input responses
 * @param {*} index this parameter is an identifier for each input answer (identical for the answers of the same question)
 * @param {*} i this parameter is to change a in data []
 */
function createInputCheckbox(difId, index, i) {
    for (let j = 0; j < quizzes[parameters].data[i].reponses.length; j++) {
        $("#contenu" + i).append("<input type=checkbox id=answer" + difId + "   name=answer" + i + " value=" + index + ">");
        $("input:last").after("<label for=answer" + difId + ">" + quizzes[parameters].data[i].reponses[j] + "</label>");
        index++;
        difId++;
    }
}

/**
 * This function check if the anwsers was clicked
 */
function needToClick() {
    let allRight = true;

    for (let i = 0; i < quizzes[parameters].data.length; i++) {
        let itChecked = $("#contenu" + i).find("input:checked");
        let NumberOfAnswer = quizzes[parameters].data[i].bonneReponses;

        if (NumberOfAnswer.length < itChecked.length || NumberOfAnswer.length > itChecked.length) {
            $("#contenu" + i).append("<div class=error>Il faudrait strictement " + (NumberOfAnswer.length) + " reponse(s)</div>")
            allRight = false;
        }
    }
    return allRight;
}

/**
 * This function remove the div with error like class when the answers was clicked
 */
function RemoveError() {
    $(".error").remove();
}

$("document").ready(function () {
    recupId();
    DisplayTheQuestionsInConsole();
    setTimeout(DisplayTheQuiz, 4050);
});