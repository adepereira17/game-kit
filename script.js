// Selecionamos os elementos que vamos manipular
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const btnIniciar = document.getElementById('btnIniciar');
const board = document.getElementById('game-board');

let score = 0;
let timeLeft = 10;
let gameInterval;

//Função para mover o alvo para um lugar aleatório
function moveTarget(){
    const maxX = board.clientWidth - 50;
    const maxY = board.clientHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

//Ao clicar no alvo, ganha ponto e ele muda de lugar
target.addEventListener('mousedown', () =>{
    score++;
    scoreDisplay.innerText = score;
    moveTarget();
});

//Função que inicia o jog
btnIniciar.addEventListener('click', () => {
    score = 0;
    timeleft = 10;
    scoreDisplay.innerText = score;
    btnIniciar.disabled = true;
    target.style.display = 'block';

    moveTarget();

    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if(timeLeft <= 0){
            clearInterval(gameInterval);
            target.style.display = 'none';
            btnIniciar.disabled = false;
            alert(`Fim de jogo! Você fez ${score} pontos!`);
        }
    }, 1000);
});