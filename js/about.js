document.addEventListener('DOMContentLoaded', () => {


  const nameInput = document.getElementById('username-input');
  const welcomeBtn = document.querySelector('#welcome-btn');
  const welcomeMessage = document.getElementById('welcome-message');


  if (welcomeBtn && nameInput && welcomeMessage) {
    welcomeBtn.addEventListener('click', () => {
     
      const trimmedValue = nameInput.value.trim();

      if (trimmedValue === '') {
  
        welcomeMessage.textContent = 'Please enter a valid name (cannot be empty or whitespace).';
        welcomeMessage.style.color = 'red';
      } else {
   
        welcomeMessage.textContent = `Welcome to Buy Rocks, ${trimmedValue}! We're thrilled to have you.`;
        welcomeMessage.style.color = 'green';
      }
    });
  }


  const faqButtons = document.querySelectorAll('.faq-toggle');

  if (faqButtons.length > 0) {
   
    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        
        const answer = button.nextElementSibling;
        const isHidden = answer.hidden;

      
        answer.hidden = !isHidden;

        button.setAttribute('aria-expanded', String(isHidden));
      });
    });
  }

});
