const questions = [
    "Do you love me? ❤️",
    "Will you always be mine? 💕",
    "Am I the cutest? 😍",
    "Do you promise to stay with me forever? 💖",
    "Will you marry me? 💍"
];

const funnyResponses = [
    "Are you sure? Think again! 🤔",
    "Oh no! That can't be right! 😢",
    "Try again, my love! 💕",
    "You're breaking my heart! 😭",
    "No is not an option, love! 😘"
];

let index = 0;
let noClicks = 0;

document.getElementById("yes").addEventListener("click", () => {
    noClicks = 0;
    index++;
    if (index < questions.length) {
        document.getElementById("question").innerText = questions[index];
    } else {
        document.getElementById("question").innerText = "Yay! I love you! ❤️🎉";
        document.querySelector(".buttons").style.display = "none";
    }
});

document.getElementById("no").addEventListener("click", () => {
    document.getElementById("question").innerText = funnyResponses[noClicks % funnyResponses.length];
    noClicks++;
});
