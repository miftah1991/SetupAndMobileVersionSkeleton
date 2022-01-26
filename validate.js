const form = document.querySelector('#contact-form');
const email = document.getElementById('email');
const erroMessage = document.getElementById('email-error-message');

function validateEmail(email) {
  const regEx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if (regEx.test(email)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
    if (!validateEmail(email.value)) {
      erroMessage.innerHTML = '(*) Please enter a valid email address';
       // alert()
    e.preventDefault();
  } else {
    form.submit();
  }
});