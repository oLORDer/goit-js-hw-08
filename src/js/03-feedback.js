import throttle from 'lodash.throttle';
import LSApi from './localstorage';

const LS_KEY = 'feedback-form-state';
const formEl  = document.querySelector('.feedback-form');
const userData = {};


const checkLS = () => {
  const dataFormLS = LSApi.load(LS_KEY);

  if (!dataFormLS) return;

  for (const key in dataFormLS) {
    if(dataFormLS.hasOwnProperty(key)) {
      formEl.elements[key].value = dataFormLS[key];
      userData[key] = dataFormLS[key];
    }
  }
}

const onFormChange = (e) => {
  userData[e.target.name] = e.target.value;
  LSApi.save(LS_KEY, userData);
};

const onFormSubmit = (e) => {
  e.preventDefault();

  console.log(userData);
  LSApi.remove(LS_KEY);
  e.currentTarget.reset();
}

formEl.addEventListener('input', throttle(onFormChange, 500));
formEl.addEventListener('submit', throttle(onFormSubmit, 500));

checkLS();

// just@faf.ewf
// const fillFormFields = () => {
//   const formLS = LSApi.load(LS_KEY);

//   if (!formLS) return;

//   for (const key in formLS) {
//     if (formLS.hasOwnProperty(key)) {
//       formEl.elements[key].value = formLS[key];
//     }
//   }
// }

// const onFormElChange = e => {
//   userData[e.target.name] = e.target.value;

//   LSApi.save(LS_KEY, userData);
// };

// const onContactFormSubmit = e => {
//   e.preventDefault();

//   LSApi.remove(LS_KEY);
//   e.currentTarget.reset();
// };

// formEl.addEventListener('input', throttle(onFormElChange, 500));
// formEl.addEventListener('submit', throttle(onContactFormSubmit, 500));

// fillFormFields();
