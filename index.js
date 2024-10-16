// 

function updateClock() {

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString();
    const seconds = now.getSeconds().toString();
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock(); 
setInterval();