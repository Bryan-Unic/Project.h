// script.js

const surpriseBtn = document.getElementById("surpriseBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

let playing = false;

// Abrir modal
surpriseBtn.addEventListener("click", () => {
    modal.classList.add("show");
    createConfetti();
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Cerrar haciendo click afuera
window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("show");
    }
});

// Música
musicBtn.addEventListener("click", () => {

    if(!playing){
        music.play();
        musicBtn.innerHTML = "⏸ Pausar";
        playing = true;
    }else{
        music.pause();
        musicBtn.innerHTML = "▶ Música";
        playing = false;
    }

});

// Confetti simple
function createConfetti(){

    for(let i = 0; i < 80; i++){

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";

        confetti.style.background =
        `hsl(${Math.random()*360}, 100%, 70%)`;

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.borderRadius = "50%";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let fall = Math.random() * 5 + 3;

        confetti.animate([
            {
                transform:"translateY(0) rotate(0deg)"
            },
            {
                transform:`translateY(110vh) rotate(720deg)`
            }
        ],{
            duration:fall * 1000,
            easing:"linear"
        });

        setTimeout(()=>{
            confetti.remove();
        }, fall * 1000);

    }

}