const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')

}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')

}
const reset = document.querySelector("#reset")
const playTo = document.querySelector("#playto")
let winningScore = playTo.value;
let isGameOver = false

// Disabling the dropdown in html
playTo.addEventListener("input", function() {
    winningScore = this.value
        // console.log(typeof(winningScore))

})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++
            player.display.innerText = player.score
        if (player.score == winningScore) {
            isGameOver = true
            player.button.disabled = true
            opponent.button.disabled = true
            player.display.style.color = 'green';
            opponent.display.style.color = 'red';

        }
        if (player.score > 1 | opponent.score > 1) {
            playTo.disabled = true
        }
    }
}


p1.button.addEventListener("click", () => {
    updateScore(p1, p2)
})

p2.button.addEventListener("click", () => {
    updateScore(p2, p1)
})

function resetValues() {
    p1.display.innerText = '0'
    p2.display.innerText = '0'
    p1.score = 0
    p2.score = 0

    isGameOver = false
    p1.button.disabled = false
    p2.button.disabled = false
    playTo.disabled = false
    p2.display.style.color = 'black';
    p1.display.style.color = 'black';

}

reset.addEventListener('click', resetValues)