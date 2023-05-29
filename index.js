// Import stylesheets
import './style.css';

// Write Javascript code!
document
  .getElementById('buttonResult')
  .addEventListener('click', ageCount, century);
document.getElementById('buttonResult').addEventListener('click', century);
document.getElementById('inputText').addEventListener('blur', calculateDays);
function ageCount() {
  let today = new Date();
  let birthDate = new Date(document.getElementById('inputText').value);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  console.log(age);
  document.getElementById('ageResult').innerText = `You are ${age} now`;
}
function calculateDays() {
  let today = new Date();
  let birthDate = new Date(document.getElementById('inputText').value);
  // let birthDate = new Date('11.05.1992');
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  let nextBday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );
  if (today > nextBday) {
    nextBday.setFullYear(today.getFullYear() + 1);
  }
  let one_day = 24 * 60 * 60 * 1000;
  let daysLeft = Math.ceil((nextBday.getTime() - today.getTime()) / one_day);
  document.getElementById(
    'result'
  ).innerText = `In ${daysLeft} day(s), you will be ${age + 1}!`;
}
function century() {
  let today = new Date();
  let currCentury = Math.ceil(today.getFullYear() / 100);
  console.log(currCentury);
  document.getElementById(
    'cenResult'
  ).innerText = `Current Century is century ${currCentury}`;
}
const x = new Date('11/05/1992');
console.log(x);
