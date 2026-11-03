$(function () {
  const $form = $('#register-form');
  const $success = $('#success-message');
  const $fields = $('#first-name, #last-name, #email, #password, #confirm-password, #country');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showResult($field, message) {
    const $feedback = $field.nextAll('.invalid-feedback').first();

    if (message !== '') {
      $field.addClass('is-invalid').removeClass('is-valid');
      $feedback.text(message);
      return false;
    }

    $field.removeClass('is-invalid').addClass('is-valid');
    return true;
  }

  function checkField($field) {
    const id = $field.attr('id');
    const value = $field.val().trim();

    if (id === 'first-name' || id === 'last-name') {
      if (value === '') {
        return showResult($field, 'This field is required.');
      }
      if (value.length < 2) {
        return showResult($field, 'Enter at least 2 characters.');
      }
    }

    if (id === 'email') {
      if (value === '') {
        return showResult($field, 'Email is required.');
      }
      if (!emailPattern.test(value)) {
        return showResult($field, 'Enter a valid email, for example name@example.com.');
      }
    }

    if (id === 'password' && $field.val().length < 8) {
      return showResult($field, 'The password must be at least 8 characters.');
    }

    if (id === 'confirm-password') {
      if ($field.val() === '') {
        return showResult($field, 'Repeat your password.');
      }
      if ($field.val() !== $('#password').val()) {
        return showResult($field, 'Passwords do not match.');
      }
    }

    if (id === 'country' && value === '') {
      return showResult($field, 'Choose a country.');
    }

    return showResult($field, '');
  }

  $form.on('submit', function (event) {
    event.preventDefault();
    let allValid = true;

    $fields.each(function () {
      if (!checkField($(this))) {
        allValid = false;
      }
    });

    if (allValid) {
      $success.removeClass('d-none').hide().fadeIn(300);
    } else {
      $success.addClass('d-none');
      $form.find('.is-invalid').first().trigger('focus');
    }
  });

  $fields.on('input change', function () {
    const $field = $(this);
    const $confirm = $('#confirm-password');
    $success.addClass('d-none');

    if ($field.hasClass('is-invalid') || $field.hasClass('is-valid')) {
      checkField($field);
    }

    if ($field.attr('id') === 'password' && ($confirm.hasClass('is-invalid') || $confirm.hasClass('is-valid'))) {
      checkField($confirm);
    }
  });

  $form.on('reset', function () {
    $fields.removeClass('is-invalid is-valid');
    $success.addClass('d-none');
  });
});
