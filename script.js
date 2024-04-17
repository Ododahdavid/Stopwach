

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.Minutes');
let seconds = document.querySelector('.seconds');
let powerButton = document.querySelector('#powerButton');
let resetButton = document.querySelector('#resetButton');
let clickCount = 0;
let timer;

hours.textContent = '00';
minutes.textContent = '00';
seconds.textContent = '00';

function startTimer() {
    timer = setInterval(function () {
        let sec = parseInt(seconds.textContent);
        let min = parseInt(minutes.textContent);
        let hr = parseInt(hours.textContent);

        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        if (min >= 60) {
            min = 0;
            hr++;
        }

        // Pad the numbers with leading zeros
        seconds.textContent = String(sec).padStart(2, '0');
        minutes.textContent = String(min).padStart(2, '0');
        hours.textContent = String(hr).padStart(2, '0');
    }, 1000)

}
powerButton.addEventListener('click', function () {
    powerButton.textContent = "STOP"
    clickCount++;
    if (clickCount === 1) {

        startTimer();
        powerButton.classList.add("stopButton")

    }
    if (clickCount === 2) {
        clickCount = 0;
        powerButton.textContent = "START"
        powerButton.classList.remove("stopButton")
        clearInterval(timer);
    }
});

resetButton.addEventListener('click', function () {
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';

    clearInterval(timer);
    clickCount = 0;
    powerButton.textContent = "START"
    powerButton.classList.remove("stopButton")


})
