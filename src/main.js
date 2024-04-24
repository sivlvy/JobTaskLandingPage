const form = document.querySelector('form');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

const iti = intlTelInput(phoneInput, {
  initialCountry: 'de',
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js',
});

phoneInput.addEventListener('blur', () => {
  if (iti.isValidNumber()) {
    phoneInput.setCustomValidity('');
  } else {
    phoneInput.setCustomValidity('Invalid phone number');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const number = iti.getNumber();
  const isValid = iti.isValidNumber();
  const errorCode = iti.getValidationError();

  // Обробка даних форми
  console.log({ name, email, number, isValid, errorCode });

  // Очищення інпутів після відправки форми
  nameInput.value = '';
  emailInput.value = '';
  iti.setNumber('');

  // Показати модальне вікно після відправки форми
  modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
