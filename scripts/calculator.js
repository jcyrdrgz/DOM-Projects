let calculation = '';
function updateCalculation(userInput) {
  calculation += userInput;
  document.querySelector('.js-calculator-result').innerHTML = calculation;
  // console.log(calculation);
}