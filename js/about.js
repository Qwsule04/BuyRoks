document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // TASK 0: Select elements and update content
  // ==========================================
  const nameInput = document.getElementById('username-input');
  const welcomeBtn = document.querySelector('#welcome-btn');
  const welcomeMessage = document.getElementById('welcome-message');

  // Элементтер бетте бар ма, жоқ па тексеру (null error болмау үшін)
  if (welcomeBtn && nameInput && welcomeMessage) {
    welcomeBtn.addEventListener('click', () => {
      // Мәтінді оқып, шетіндегі бос орындарды қиып тастау (.trim())
      const trimmedValue = nameInput.value.trim();

      if (trimmedValue === '') {
        // Егер мәтін бос немесе тек пробел болса - ескерту
        welcomeMessage.textContent = 'Please enter a valid name (cannot be empty or whitespace).';
        welcomeMessage.style.color = 'red';
      } else {
        // Қауіпсіз түрде textContent арқылы сәлемдесу шығару
        welcomeMessage.textContent = `Welcome to Buy Rocks, ${trimmedValue}! We're thrilled to have you.`;
        welcomeMessage.style.color = 'green';
      }
    });
  }

  // ==========================================
  // TASK 2: Show and hide information (FAQ)
  // ==========================================
  const faqButtons = document.querySelectorAll('.faq-toggle');

  if (faqButtons.length > 0) {
    // Цикл арқылы әр батырмаға Event Listener тағамыз
    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Батырманың астында тұрған жауап элементін табамыз
        const answer = button.nextElementSibling;
        const isHidden = answer.hidden;

        // hidden қасиетін керісінше өзгертеміз (true -> false, false -> true)
        answer.hidden = !isHidden;

        // aria-expanded атрибутын ағымдағы күйіне сәйкес жаңартамыз
        button.setAttribute('aria-expanded', String(isHidden));
      });
    });
  }

});
