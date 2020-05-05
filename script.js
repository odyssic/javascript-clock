function setDate() {
    const now = new Date();
    const secondHand = document.querySelector(".second-hand");
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    const minuteHand = document.querySelector(".minute-hand");
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;

    const hourHand = document.querySelector(".hour-hand");
    const hours = now.getHours();
    const hoursDegrees = (hours / 60) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);