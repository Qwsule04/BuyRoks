$(document).ready(function() {

  const $nameInput = $('#username-input');
  const $welcomeBtn = $('#welcome-btn');
  const $welcomeMessage = $('#welcome-message');

  if ($welcomeBtn.length && $nameInput.length && $welcomeMessage.length) {
    $welcomeBtn.on('click', function() {
      const trimmedValue = $nameInput.val().trim();

      if (trimmedValue === '') {
        $welcomeMessage
          .text('Please enter a valid name (cannot be empty or whitespace).')
          .removeClass('text-success')
          .addClass('text-danger');
      } else {
        $welcomeMessage
          .text(`Welcome to Buy Rocks, ${trimmedValue}! We're thrilled to have you.`)
          .removeClass('text-danger')
          .addClass('text-success');
      }
    });
    $nameInput.on('input', function() {
      if ($(this).val().trim() === '') {
        $welcomeMessage.text('');
      }
    });
  }

  const $faqButtons = $('.faq-toggle');

  if ($faqButtons.length > 0) {
    $faqButtons.on('click', function() {
      const $button = $(this);
      const $answer = $button.next('.faq-answer'); 
      
      $answer.slideToggle(200, function() {
        const isVisible = $answer.is(':visible');
        $button.attr('aria-expanded', String(isVisible));
      });
    });
  }

});
