const screenClear = document.getElementById('C');
const percentage = document.getElementById('%');
const digitClear = document.getElementById('X');
const division = document.getElementById('/');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const multiplication = document.getElementById('*');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const substraction = document.getElementById('-');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const addition = document.getElementById('+');
const zero = document.getElementById('0');
const dot = document.getElementById('.');
const equal = document.getElementById('=');

const display = document.getElementById('display')

seven.addEventListener('click', () => {
    display.innerText = '7'
})