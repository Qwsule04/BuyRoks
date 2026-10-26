const input = document.getElementById('search');
const cards = document.querySelectorAll('.catalog-grid .product-card');
const count = document.getElementById('result-count');
const noResults = document.getElementById('no-results');

function filterCards() {
  const query = input.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const match = title.includes(query);
    card.hidden = !match;
    if (match) visible++;
  });

  count.textContent = `Found: ${visible}`;
  noResults.hidden = visible !== 0;
}

input.addEventListener('input', filterCards);
filterCards();