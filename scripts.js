const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.createElement('div');
const ai = Math.floor(Math.random() * 3);
var text = document.createElement('h1');

function game() {
    result.appendChild(text);
    const clone = this.cloneNode(true);
    document.querySelector('body').appendChild(result);
    result.appendChild(clone);
    var com = document.querySelectorAll('img')[ai].cloneNode(true);
    result.appendChild(com);

    if ((this == rock && ai == 0) || (this == paper && ai == 1) || (this == scissors && ai == 2)) {
        text.innerText = "It's a tie!!!";
        text.style.color = "yellow";
    }
    else if ((this == rock && ai == 2) || (this == paper && ai == 0) || (this == scissors && ai == 1)) {
        text.innerText = "You win!!!";
        text.style.color = "green";
    }
    else {
        text.innerText = "You lose";
        text.style.color = "red";
    }
}



rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);