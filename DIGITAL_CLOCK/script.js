// const clock=document.getElementById('clock');
// setInterval(function() {
//     let date=new Date();
//     clock.innerHTML=date.toLocaleTimeString();
// },1000)
const clock = document.getElementById('clock');
const dateBox = document.getElementById('date');
const greeting = document.getElementById('greeting');
const toggleBtn = document.getElementById('toggleFormat');

let is24Hour = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let session = '';
    if (!is24Hour) {
        session = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // convert to 12-hour format
    }

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}${session ? ' ' + session : ''}`;
    clock.innerHTML = formattedTime;

    // Date
    const formattedDate = now.toDateString();
    dateBox.innerHTML = formattedDate;

    // Greeting
    const hour = now.getHours();
    if (hour < 12) greeting.innerHTML = 'Good Morning!';
    else if (hour < 18) greeting.innerHTML = 'Good Afternoon!';
    else greeting.innerHTML = 'Good Evening!';
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Format Toggle
toggleBtn.addEventListener('click', () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
    updateClock();
});

// Start clock
setInterval(updateClock, 1000);
updateClock();
