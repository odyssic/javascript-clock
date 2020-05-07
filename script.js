function setDate() {
    const now = new Date();
    const secondHand = document.querySelector(".second-hand");
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    const minuteHand = document.querySelector(".minute-hand");
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360;

    const hourHand = document.querySelector(".hour-hand");
    const hours = now.getHours();
    const hoursDegrees = (hours / 60) * 360;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

function displayWords() {
    const now = new Date();
    second = now.getSeconds();
    words = document.querySelector(".words");
    console.log(second);
    if (seconds % 5 === 0) {
        words.style.display = "block";
    } else {
        words.style.display = "none";
    }
}

function displayClock() {
    clock = document.querySelector("body");
    clock.style.display = "block";
}

setTimeout(() => {
    displayClock();
    displayWords();
}, 1000);