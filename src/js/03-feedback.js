import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formTextarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
formInput.addEventListener('input', onFormInput);
formTextarea.addEventListener('input', onFormTextarea);

function onFormSubmit(e) {
  e.preventDefault();

  
}

function onFormInput(e) {
  localStorage.setItem("feedback-form-state", JSON.stringify({'email': e.target.value}))

  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
}

function onFormTextarea(e) {
  localStorage.setItem("feedback-form-state", JSON.stringify({'textarea': e.target.value}))
}
