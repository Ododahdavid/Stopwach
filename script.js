

// let minutes = document.querySelector('.minutes');
// let seconds = document.querySelector('.seconds');
// let milliseconds = document.querySelector('.milliseconds');
// let powerButton = document.querySelector('#powerButton');
// let resetButton = document.querySelector('#resetButton');
// let clickCount = 0;
// let timer;

// minutes.textContent = '00';
// seconds.textContent = '00';
// milliseconds.textContent = '00';

// function startTimer() {
//     timer = setInterval(function () {
//         let mil = parseInt(milliseconds.textContent);
//         let sec = parseInt(seconds.textContent);
//         let min = parseInt(minutes.textContent);

//         mil++;
//         if (mil >= 100) {
//             mil = 0;
//             sec++;
//         }
//         if (sec >= 60) {
//             sec = 0;
//             min++;
//         }

//         // Pad the numbers with leading zeros
//         milliseconds.textContent = String(mil).padStart(2, '0');
//         seconds.textContent = String(sec).padStart(2, '0');
//         minutes.textContent = String(min).padStart(2, '0');
//     }, 1)

// }
// powerButton.addEventListener('click', function () {
//     powerButton.textContent = "STOP"
//     clickCount++;
//     if (clickCount === 1) {

//         startTimer();
//         powerButton.classList.add("stopButton")

//     }
//     if (clickCount === 2) {
//         clickCount = 0;
//         powerButton.textContent = "START"
//         powerButton.classList.remove("stopButton")
//         clearInterval(timer);
//     }
// });

// resetButton.addEventListener('click', function () {
//     milliseconds.textContent = '00';
//     seconds.textContent = '00';
//     minutes.textContent = '00';

//     clearInterval(timer);
//     clickCount = 0;
//     powerButton.textContent = "START"
//     powerButton.classList.remove("stopButton")


// })

let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let milliseconds = document.querySelector('.milliseconds');
let powerButton = document.querySelector('#powerButton');
let resetButton = document.querySelector('#resetButton');
let clickCount = 0;
let timer;
let startTime;
let elapsedTime = 0;
let flagButton = document.querySelector('#flagButton');
let flaggedTimeContainer = document.querySelector('.flaggedTimeContainer');

minutes.textContent = '00';
seconds.textContent = '00';
milliseconds.textContent = '00';

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function () {
        elapsedTime = Date.now() - startTime;

        let mil = Math.floor((elapsedTime % 1000) / 10);
        let sec = Math.floor((elapsedTime / 1000) % 60);
        let min = Math.floor((elapsedTime / 1000 / 60) % 60);

        // Pad the numbers with leading zeros
        milliseconds.textContent = String(mil).padStart(2, '0');
        seconds.textContent = String(sec).padStart(2, '0');
        minutes.textContent = String(min).padStart(2, '0');
    }, 10); // Update every 10 milliseconds for smoother display
}


powerButton.addEventListener('click', function () {
    flagButton.style.display = 'block';
    clickCount++;
    if (clickCount % 2 !== 0) {
        powerButton.textContent = "PAUSE";
        startTimer();
        powerButton.classList.add("stopButton");
    } else {
        powerButton.textContent = "RESUME";
        powerButton.classList.remove("stopButton");
        clearInterval(timer);
    }
});

resetButton.addEventListener('click', function () {
    milliseconds.textContent = '00';
    seconds.textContent = '00';
    minutes.textContent = '00';

    clearInterval(timer);
    clickCount = 0;
    elapsedTime = 0;
    powerButton.textContent = "START"
    powerButton.classList.remove("stopButton")

    flagButton.style.display = 'none';
    flaggedTimeContainer.innerHTML = "";
})

flagButton.addEventListener('click', function(){
    let flaggedTimeElement = document.createElement("div");
    flaggedTimeContainer.setAttribute("style", "outline: solid white 2px");
    flaggedTimeElement.style.width = "100%";
    flaggedTimeElement.style.height = "40px";
    flaggedTimeElement.style.textAlign = "center";
    flaggedTimeElement.style.color = "white";
    flaggedTimeElement.style.display = "flex";
    flaggedTimeElement.style.justifyContent = "center";
    flaggedTimeElement.style.alignItems = "center";
    flaggedTimeElement.textContent = `${minutes.textContent}:${seconds.textContent}:${milliseconds.textContent}`;
    flaggedTimeContainer.appendChild(flaggedTimeElement);

});
