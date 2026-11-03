$(function () {
  const $toggles = $('.faq-toggle');
  const $answers = $('.faq-answer');
  const $status = $('#faq-status');

  $toggles.on('click', function () {
    const $button = $(this);
    const $answer = $('#' + $button.attr('aria-controls'));
    const willOpen = $button.attr('aria-expanded') === 'false';

    $toggles.not($button).attr('aria-expanded', 'false').find('.faq-arrow').text('▼');
    $answers.not($answer).stop(true, true).slideUp(250);

    $answer.stop(true, true).slideToggle(250);
    $button.attr('aria-expanded', String(willOpen)).find('.faq-arrow').text(willOpen ? '▲' : '▼');
  });

  $('.faq-helpful').on('click', function () {
    $status
      .stop(true, true)
      .text('Thanks for your feedback! (demo, nothing is saved)')
      .fadeTo(200, 1)
      .delay(2500)
      .fadeTo(400, 0);
  });
});
