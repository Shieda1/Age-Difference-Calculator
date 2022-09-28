// https://www.omnicalculator.com/everyday-life/age-difference

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');


let age1 = v1;
let age2 = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');


btn.addEventListener('click', function() {
  
    result.textContent = `Age difference = ${computeagedifference().toFixed(2)}`;
})

// calculation

function computeagedifference() {
  return Math.abs(Number(age1.value) - Number(age2.value));
}