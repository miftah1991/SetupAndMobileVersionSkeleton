const contactForm = document.querySelector('#contact-form');

function storeData(nameData, emailData, messageData) {
  const formData = {
    nameData,
    emailData,
    messageData,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  // console.log(JSON.stringify(formData));
}
contactForm.addEventListener('keyup', (e) => {
  e.preventDefault();
  const name = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  storeData(name, email, message);
});
