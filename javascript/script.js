startBtn.addEventListener("click", function () {
    var name = prompt("What is your name?");
    var hobby = prompt("What is your favorite hobby?");
    var food = prompt("What is your favourite movie?");

    if (!name) {
        name = "Ghost";
    }
    
    if (!hobby) {
        hobby = "nothing?!";
    }
    
    if (!movie) {
        movie = "nothing?!"
    }

    var msg = `Your name is ${name}, your favorite hobby is ${hobby} and your favorite movie is ${movie}`;
    document.getElementById("outputArea").innerHTML = msg;

});