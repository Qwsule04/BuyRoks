$(function () {
  const $nameInput = $('#username-input');
  const $welcomeMessage = $('#welcome-message');
  const $contactForm = $('#contactForm');
  const phoneRegex = /^(\+7|8)[\s\-]?\(?7\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;

  $('#welcome-btn').on('click', function () {
    const name = $nameInput.val().trim();

    if (name === '') {
      $welcomeMessage
        .text('Please enter a valid name (cannot be empty or whitespace).')
        .removeClass('text-success')
        .addClass('text-danger');
    } else {
      $welcomeMessage
        .text(`Welcome to Buy Rocks, ${name}! We're thrilled to have you.`)
        .removeClass('text-danger')
        .addClass('text-success');
    }
  });

  $nameInput.on('input', function () {
    if ($(this).val().trim() === '') {
      $welcomeMessage.text('');
    }
  });

  $contactForm.on('submit', function (event) {
    event.preventDefault();
    const $phoneInput = $('#contact-phone');
    const phoneVal = $phoneInput.val().trim();

    // Телефон паттернін тексеру
    if (!phoneRegex.test(phoneVal)) {
      $phoneInput[0].setCustomValidity('Invalid phone format');
    } else {
      $phoneInput[0].setCustomValidity('');
    }

    if (!this.checkValidity()) {
      $contactForm.addClass('was-validated');
      return;
    }

    alert('Thank you! Your message has been sent.');
    this.reset();
    $contactForm.removeClass('was-validated');
  });

  $('#contact-phone').on('input', function () {
    this.setCustomValidity('');
  });
});
