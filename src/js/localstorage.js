'use strict';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Remove item error: ', error.message);
  }
};

export default {
  save,
  load,
  remove,
};

// form to LS

// import throttle from 'lodash.throttle';
// import LSApi from './localstorage';

// const LS_KEY = 'feedback-form-state';
// const formEl  = document.querySelector('.feedback-form');
// const userData = {};


// const checkLS = () => {
//   const dataFormLS = LSApi.load(LS_KEY);

//   if (!dataFormLS) return;

//   for (const key in dataFormLS) {
//     if(dataFormLS.hasOwnProperty(key)) {
//       formEl.elements[key].value = dataFormLS[key];
//       userData[key] = dataFormLS[key];
//     }
//   }
// }

// const onFormChange = (e) => {
//   userData[e.target.name] = e.target.value;
//   LSApi.save(LS_KEY, userData);
// };

// const onFormSubmit = (e) => {
//   e.preventDefault();

//   console.log(userData);
//   LSApi.remove(LS_KEY);
//   e.currentTarget.reset();
// }

// formEl.addEventListener('input', throttle(onFormChange, 500));
// formEl.addEventListener('submit', throttle(onFormSubmit, 500));

// checkLS();