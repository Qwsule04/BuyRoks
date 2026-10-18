// Registration form: Bootstrap validation + password match check.
// HTML attributes (required, minlength, type="email") do the basic checks;
// JavaScript only adds what HTML cannot do: comparing two fields.

const form = document.getElementById('register-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const confirmFeedback = document.getElementById('confirm-feedback');
const successMessage = document.getElementById('success-message');

// Marks "Confirm password" invalid when it differs from "Password"
// and clears the error as soon as the values match again.
function checkPasswordsMatch() {
  if (confirmPassword.value !== '' && confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity('Passwords do not match.');
  } else {
    confirmPassword.setCustomValidity('');
  }

  // Show the message that matches the actual problem
  if (confirmPassword.validity.valueMissing) {
    confirmFeedback.textContent = 'Repeat your password.';
  } else if (confirmPassword.validity.customError) {
    confirmFeedback.textContent = 'Passwords do not match.';
  } else if (confirmPassword.validity.tooShort) {
    confirmFeedback.textContent = 'The password must be at least 8 characters.';
  }
}

password.addEventListener('input', checkPasswordsMatch);
confirmPassword.addEventListener('input', checkPasswordsMatch);

// Any change after a successful check hides the old success message
form.addEventListener('input', function () {
  successMessage.classList.add('d-none');
});

form.addEventListener('submit', function (event) {
  // There is no backend, so the form is never really sent
  event.preventDefault();
  checkPasswordsMatch();

  // .was-validated makes Bootstrap show green/red states and feedback texts
  form.classList.add('was-validated');

  if (form.checkValidity()) {
    successMessage.classList.remove('d-none');
  } else {
    successMessage.classList.add('d-none');
    form.querySelector('input:invalid, select:invalid').focus();
  }
});

// The reset button clears the values by itself;
// here we also remove the validation colours, messages and the success alert.
form.addEventListener('reset', function () {
  form.classList.remove('was-validated');
  confirmPassword.setCustomValidity('');
  confirmFeedback.textContent = 'Repeat your password.';
  successMessage.classList.add('d-none');
});
