import throttle from 'lodash.throttle';


const form = document.querySelector('form');


form.addEventListener('input', saveData)
function saveData(event) {
const {name, value} = event.target;
const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
data[name] = value
 localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event){
event.preventDefault();
console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
form.reset();
localStorage.removeItem('feedback-form-state');
};


