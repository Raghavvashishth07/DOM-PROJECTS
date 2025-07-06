const buttons = document.querySelectorAll('.btn');
const body = document.body;
const colorName = document.querySelector('.color-name');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.id;
        body.style.backgroundColor = color;
        colorName.textContent = `Current Color: ${color.toUpperCase()}`;
    });
});

// Random Color Button
document.getElementById('random').addEventListener('click', () => {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    colorName.textContent = `Current Color: ${randomColor.toUpperCase()}`;
});

// Reset Button
document.getElementById('reset').addEventListener('click', () => {
    body.style.backgroundColor = '#f5f5f5';
    colorName.textContent = 'Current Color: Default';
});

// Dark Mode Toggle
// document.getElementById('toggle-mode').addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });

    // Dark Mode Toggle
// const toggleBtn = document.getElementById('toggle-mode');

// toggleBtn.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');

//     if (body.classList.contains('dark-mode')) {
//         toggleBtn.textContent = "Light Mode";
//     } else {
//         toggleBtn.textContent = "Dark Mode";
        
//     }
// });
const toggleBtn = document.getElementById('toggle-mode');
let isDark = false;

toggleBtn.addEventListener('click', () => {
    if (!isDark) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggleBtn.textContent = "Light Mode";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        toggleBtn.textContent = "Dark Mode";
    }
    isDark = !isDark;
});



// Helper function for random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
