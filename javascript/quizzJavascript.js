function browseTable(){
    for (const key in quizzes) {
        console.log(key + " = " + quizzes[key].title);
    }
}

$("document").ready(function(){
    browseTable();
});