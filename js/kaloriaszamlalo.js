const calculator = document.getElementById('calculator');
const weightInput = calculator.querySelector('#weight');
const speedInput = calculator.querySelector('#speed');
const resultDiv = document.getElementById('result');
                  
calculator.addEventListener('submit', (e) => {
e.preventDefault();
const weight = parseFloat(weightInput.value);
const speed = parseFloat(speedInput.value);
const time = 70 / speed;
const bmr = 10 * weight; // Egyszerűsített BMR (Basal Metabolic Rate = Alap Anyagcsere Sebesség) formula egy 40 éves, mozgásszegény életmódot folytató férfi számára
const calories = (bmr / 24) * 6.8 * time;
resultDiv.textContent = `Elégetett kalóriák: ${calories.toFixed(2)} kcal`;
});
