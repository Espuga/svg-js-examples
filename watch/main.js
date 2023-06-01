const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");


function animation(){
    const date = new Date();

    const hours = date.getHours() + date.getMinutes() / 60;
    const minutes = date.getMinutes() + date.getSeconds() / 60;
    const seconds = date.getSeconds() + date.getMilliseconds() / 1000;
    
    hoursElement.setAttribute("transform", `rotate(${(360/12) * hours})`);
    minutesElement.setAttribute("transform", `rotate(${(360/60) * minutes})`);
    secondsElement.setAttribute("transform", `rotate(${(360/60) * seconds})`);

    requestAnimationFrame(animation);
}
requestAnimationFrame(animation);
