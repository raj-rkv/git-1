let overalltotalSeconds = 0;
let intervalId = null;


const daysBox = document.getElementById("box-1");
const hoursBox = document.getElementById("box-2");
const minutesBox = document.getElementById("box-3");
const secondsBox = document.getElementById("box-4");



const inputDays = document.getElementById("rec-1");
const inputHours = document.getElementById("rec-2");
const inputMinutes = document.getElementById("rec-3");
const inputSeconds = document.getElementById("rec-4");

function Timer() {
    
    let seconds = overalltotalSeconds;
    let days = Math.floor(seconds / (86400));
    seconds = seconds % 86400;
    let hours = Math.floor(seconds / (3600));
    seconds = seconds % 3600;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

daysBox.innerHTML = `<p>${days}<br>Days</p>`;
hoursBox.innerHTML = `<p>${hours}<br>Hours</p>`;
minutesBox.innerHTML = `<p>${minutes}<br>Minutes</p>`;
secondsBox.innerHTML = `<p>${seconds}<br>Seconds</p>`;
}


document.getElementById("set-timer").addEventListener("click", () => {
    const days = parseInt(inputDays.value) || 0;
    const hours = parseInt(inputHours.value) || 0;
    const minutes = parseInt(inputMinutes.value) || 0;
    const seconds = parseInt(inputSeconds.value) || 0;

    overalltotalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
    Timer();
});


document.getElementById("start-resume").addEventListener("click", () => {
    if (intervalId !== null) {
    return;
}
    intervalId = setInterval(() => {
        if (overalltotalSeconds > 0) {
            overalltotalSeconds--;
            Timer();
        }
    }, 1000);
    
});


document.getElementById("pause").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});



document.getElementById("re-set").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    overalltotalSeconds = 0;
    inputDays.value = inputHours.value = inputMinutes.value = inputSeconds.value = "";
    Timer();
});



