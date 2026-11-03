$(document).ready(function () {
  const $searchInput = $('#search');
  const $cards = $('.catalog-grid .product-card');
  const $count = $('#result-count');
  const $noResults = $('#no-results');
  const $categoryBtns = $('.category-btn');

  let activeCategory = 'all';

  function filterCards() {
    const query = $searchInput.val().trim().toLowerCase();
    let visibleCount = 0;

    $cards.each(function () {
      const $card = $(this);
      const title = $card.find('h3').text().toLowerCase();
      const cardCategory = $card.data('category');

      // Проверяем категорию и текст одновременно
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = title.includes(query);

      if (matchesCategory && matchesSearch) {
        $card.show();
        visibleCount++;
      } else {
        $card.hide();
      }
    });

    // Обновляем текст с количеством найденных товаров
    $count.text(`Found: ${visibleCount}`);

    // Переключаем видимость элемента "No results found"
    if (visibleCount === 0) {
      $noResults.removeAttr('hidden');
    } else {
      $noResults.attr('hidden', true);
    }
  }

  // Поиск при вводе текста
  $searchInput.on('input', filterCards);

  // Клики по кнопкам категорий
  $categoryBtns.on('click', function () {
    $categoryBtns.removeClass('active');
    $(this).addClass('active');

    activeCategory = $(this).data('category');
    filterCards();
  });

  // Запуск фильтрации при загрузке страницы
  filterCards();
});
