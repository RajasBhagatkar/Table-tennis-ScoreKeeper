const p1Button = document.querySelector("#p1Button")
const p2Button = document.querySelector("#p2Button")
const reset = document.querySelector("#reset")
const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")
const playTo = document.querySelector("#playto")

let winningScore = playTo.value;

// console.log(winningScore);
// console.log(typeof(winningScore));
let p1Score = 0
let p2Score = 0
let isGameOver = false


playTo.addEventListener("input", function() {
    winningScore = this.value
    console.log(typeof(winningScore))

})


p1Button.addEventListener("click", () => {
    if (!isGameOver) {
        p1Score++
        p1Display.innerText = p1Score
        if (p1Score == winningScore) {
            isGameOver = true
            p1Button.disabled = true
            p2Button.disabled = true
            p1Display.style.color = 'green';
            p2Display.style.color = 'red';

        }
        if (p1Score > 1 | p2Score > 1) {
            playTo.disabled = true
        }
    }
})

p2Button.addEventListener("click", () => {
    if (!isGameOver) {
        p2Score++
        p2Display.innerText = p2Score
        if (p2Score == winningScore) {
            isGameOver = true
            p1Button.disabled = true
            p2Button.disabled = true
            p2Display.style.color = 'green';
            p1Display.style.color = 'red';


        }
        if (p1Score > 1 | p2Score > 1) {
            playTo.disabled = true
        }
    }
})

function resetValues() {
    p1Display.innerText = '0'
    p2Display.innerText = '0'
    p1Score = 0
    p2Score = 0

    isGameOver = false
    p1Button.disabled = false
    p2Button.disabled = false
    playTo.disabled = false
    p2Display.style.color = 'black';
    p1Display.style.color = 'black';

}

reset.addEventListener('click', resetValues)