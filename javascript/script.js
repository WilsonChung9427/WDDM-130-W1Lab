startBtn.addEventListener("click", function () {
    var name = prompt("What is your name?");
    var hobby = prompt("What is your favorite hobby?");
    var food = prompt("What is your favourite food?");

    if (!name) {
        name = "Ghost";
    }
    
    if (!hobby) {
        hobby = "nothing?!";
    }
    
    if (!food) {
        food = "nothing?!"
    }

    var msg = `Your name is ${name}, your favorite hobby is ${hobby} and Your favorite food is ${food}`;
    document.getElementById("outputArea").innerHTML = msg;

});