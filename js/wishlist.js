$(function () {
  const $form = $('#wishlist-form');
  const $input = $('#wishlist-input');
  const $list = $('#wishlist-list');
  const $count = $('#wishlist-count');
  const $error = $('#wishlist-error');
  const $empty = $('#wishlist-empty');

  function updateCount() {
    const count = $list.children().length;
    $count.text('Items in wishlist: ' + count);
    $empty.prop('hidden', count > 0);
  }

  $form.on('submit', function (event) {
    event.preventDefault();
    const text = $input.val().trim();

    if (text === '') {
      $error.prop('hidden', false);
      $input.trigger('focus');
      return;
    }
    $error.prop('hidden', true);

    const $item = $('<li class="wishlist-item"></li>');
    $('<span></span>').text(text).appendTo($item);
    $('<button type="button" class="wishlist-remove">Remove</button>')
      .attr('aria-label', 'Remove ' + text)
      .appendTo($item);
    $list.append($item);

    $input.val('').trigger('focus');
    updateCount();
  });

  $list.on('click', '.wishlist-remove', function () {
    $(this).closest('li').remove();
    updateCount();
    $input.trigger('focus');
  });

  $input.on('input', function () {
    $error.prop('hidden', true);
  });

  updateCount();
});
