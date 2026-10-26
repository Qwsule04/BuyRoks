const wishlistForm = document.getElementById('wishlist-form');
const wishlistInput = document.getElementById('wishlist-input');
const wishlistList = document.getElementById('wishlist-list');
const wishlistCount = document.getElementById('wishlist-count');
const wishlistError = document.getElementById('wishlist-error');
const wishlistEmpty = document.getElementById('wishlist-empty');

function updateCount() {
  const count = wishlistList.children.length;
  wishlistCount.textContent = `Items in wishlist: ${count}`;
  wishlistEmpty.hidden = count > 0;
}

wishlistForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const text = wishlistInput.value.trim();

  if (text === '') {
    wishlistError.hidden = false;
    wishlistInput.focus();
    return;
  }
  wishlistError.hidden = true;

  const item = document.createElement('li');
  item.className = 'wishlist-item';

  const name = document.createElement('span');
  name.textContent = text;

  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'wishlist-remove';
  removeButton.textContent = 'Remove';
  removeButton.setAttribute('aria-label', `Remove ${text}`);

  removeButton.addEventListener('click', function () {
    item.remove();
    updateCount();
    wishlistInput.focus();
  });

  item.append(name, removeButton);
  wishlistList.appendChild(item);

  wishlistInput.value = '';
  wishlistInput.focus();
  updateCount();
});

wishlistInput.addEventListener('input', function () {
  wishlistError.hidden = true;
});

updateCount();
