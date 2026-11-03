$(function () {
  const $nameInput = $('#username-input');
  const $welcomeMessage = $('#welcome-message');
  const $contactForm = $('#contactForm');

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

    if (!this.checkValidity()) {
      $contactForm.addClass('was-validated');
      return;
    }

    alert('Demo only: your message was not sent anywhere.');
    this.reset();
    $contactForm.removeClass('was-validated');
  });
});
