/**
 * This function create and display the questions, the anwsers and show there are good or bad anwser
 */
function createAndDisplayTheAnswers() {
    $("#placeForLoadBar").remove();
    let quiz = new URL(document.location.href).searchParams.get("choiceQuizz");
    let tabAnswer = [];
    let i = 0;

    addValueInTab(quiz, tabAnswer, i);

    for (let index = 0; index < quizzes[quiz].data.length; index++) {
        $("#displayAnswers").append("<img src=../images/" + quizzes[quiz].data[index].image + ">");
        $("#displayAnswers").append("<h2>" + quizzes[quiz].data[index].question + "</h2>");

        if (quizzes[quiz].data[index].bonneReponses.length > 1) { checkTheAnswersFromCheckbox(quiz, tabAnswer, index); }

        else { checkTheAnswersFromRadio(quiz, tabAnswer, index); }

    }
    $("#displayAnswers").append("<button id=returnAccueil><a href=index.html>Button pour retourner à la page d'accueil</a></button>")
}

/**
 * This function add in array the name and value of the form from the previous page 
 * @param {string} quiz this is the select quiz in the home page
 * @param {Array number} tabAnswer this is the array of value from form from the previous page
 * @param {number} i this parameter is to change a in data []
 */
function addValueInTab(quiz, tabAnswer, i) {
    while (i < quizzes[quiz].data.length) {
        tabAnswer.push(new URL(document.location.href).searchParams.getAll("answer" + (i)));
        i++;
    }
}

/**
 * This function display the good or not answer from form with input checkbox
 * @param {string} quiz this variable contains the value of the quiz chosen by the user 
 * @param {Array number} tabAnswer this is the array of value from form from the previous page
 * @param {number} i this parameter is to change a in data []
 */
function checkTheAnswersFromCheckbox(quiz, tabAnswer, index) {
    let startHeight = quizzes[quiz].data[index].bonneReponses.length;
    while (startHeight > 0) {
        browseOfArrays(quiz, tabAnswer, index);
        startHeight--;
    }

    for (let q = 0; q < quizzes[quiz].data[index].bonneReponses.length; q++) {
        $("#displayAnswers").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index][q]] + "</h3>");
        $("#displayAnswers").append("<p class=bad>faux. La bonne réponse est : " +
            quizzes[quiz].data[index].reponses[quizzes[quiz].data[index].bonneReponses[q]] + "</p>");
    }

}

/**
 * This function checks if the two tables have a match
 * @param {string} quiz this variable contains the value of the quiz chosen by the user 
 * @param {Array number} tabAnswer this is the array of value from form from the previous page
 * @param {number} i this parameter is to change a in data []
 */
function browseOfArrays(quiz, tabAnswer, index) {
    for (let j = 0; j < tabAnswer[index].length; j++) {
        for (let k = 0; k < quizzes[quiz].data[index].bonneReponses.length; k++) {
            if (tabAnswer[index][j] == quizzes[quiz].data[index].bonneReponses[k]) {
                $("#displayAnswers").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index][j]] + "</h3>");
                $("#displayAnswers").append("<p class=good> C'est la bonne réponse</p>");
                quizzes[quiz].data[index].bonneReponses.splice(k, 1);
                tabAnswer[index].splice(j, 1);
            }
        }
    }
}

/**
 *  * This function display the good or not answer from form with input radio
 * @param {string} quiz this variable contains the value of the quiz chosen by the user 
 * @param {Array number} tabAnswer this is the array of value from form from the previous page
 * @param {number} i this parameter is to change a in data []
 */
function checkTheAnswersFromRadio(quiz, tabAnswer, index) {
    $("#displayAnswers").append("<h3> Votre réponse : " + quizzes[quiz].data[index].reponses[tabAnswer[index]] + "</h3>");
    if (tabAnswer[index][0] == quizzes[quiz].data[index].bonneReponses[0]) {
        $("#displayAnswers").append("<p class=good> C'est la bonne réponse</p>");

    } else {
        $("#displayAnswers").append("<p class=bad>faux. La bonne réponse est : "
            + quizzes[quiz].data[index].reponses[quizzes[quiz].data[index].bonneReponses[0]] + "</p>");
    }
}


/**
 * This function is personnal it creates and display a load barre before the result
 */
function loadingQuiz() {
    $("#displayAnswers").append("<div id=placeForLoadBar><h1>TRAITEMENT EN COURS</h1></div>");

    $("#placeForLoadBar").append("<div id=loadBar></div>");
    $("#loadBar").append("<div id=loading ></div>");

    for (let i = 0; i < 4; i++) {
        $("#loading").animate({ left: "38em" }, 500);
        $("#loading").animate({ left: "0em" }, 500);
    }
}

$("document").ready(function () {
    loadingQuiz();
    setTimeout(createAndDisplayTheAnswers, 4200);
});