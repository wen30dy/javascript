var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var inp = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var winningScore = 1;
var gameOver = false;

p1.addEventListener("click", function() {
    if (!gameOver) {
        p1score++;
        score1.textContent = p1score;
    }
    if (p1score === winningScore) {
        gameOver = true;
        score1.classList.add("green");

    }
});
p2.addEventListener("click", function() {
    if (!gameOver) {
        p2score++;
        score2.textContent = p2score;
    }
    if (p2score === winningScore) {
        gameOver = true;
        score2.classList.add("green");

    }
});
reset.addEventListener("click", function() {
    p1score = p2score = 0;
    score1.textContent = score2.textContent = 0;
    score1.classList.remove("green");
    score2.classList.remove("green");
    gameOver = false;
    winningScoreDisplay.textContent = 0;

})

function resettt() {
    p1score = p2score = 0;
    score1.textContent = score2.textContent = 0;
    score1.classList.remove("green");
    score2.classList.remove("green");
    gameOver = false;

}
inp.addEventListener("change", function() {

    winningScoreDisplay.textContent = this.value;
    winningScore = Number(inp.value);
    resettt();
})