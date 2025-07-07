const form = document.querySelector('#bmi-form');
const result = document.querySelector('#result');
const resetBtn = document.querySelector('#reset-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(height) || height <= 0) {
        result.textContent = `⚠️ Enter a valid height!`;
        result.className = 'result-red';
    } else if (isNaN(weight) || weight <= 0) {
        result.textContent = `⚠️ Enter a valid weight!`;
        result.className = 'result-red';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = '';
        let colorClass = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            colorClass = 'result-yellow';
            document.body.style.backgroundColor = '#fff3cd'; // light yellow
        } else if (bmi < 24.9) {
            category = 'Normal';
            colorClass = 'result-green';
            document.body.style.backgroundColor = '#d4edda'; // light green
        } else if (bmi < 29.9) {
            category = 'Overweight';
            colorClass = 'result-yellow';
            document.body.style.backgroundColor = '#fff3cd'; // light yellow again
        } else {
            category = 'Obese';
            colorClass = 'result-red';
            document.body.style.backgroundColor = '#f8d7da'; // light red
        }


        result.textContent = `Your BMI is ${bmi} — ${category}`;
        result.className = colorClass;
    }
});

resetBtn.addEventListener('click', () => {
    form.reset();
    result.textContent = '';
    result.className = '';
      document.body.style.backgroundColor = '#f0f0f0'; // original light gray
});
