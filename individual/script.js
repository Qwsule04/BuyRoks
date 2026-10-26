document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // TASK 6: Counter with click events
  // ==========================================
  let count = 0;
  const counterSpan = document.getElementById('counter-value');
  const btnIncrease = document.getElementById('btn-increase');
  const btnDecrease = document.getElementById('btn-decrease');
  const btnReset = document.getElementById('btn-reset');

  function updateCounter(newVal) {
    count = newVal;
    counterSpan.textContent = count;
  }

  btnIncrease.addEventListener('click', () => {
    updateCounter(count + 1);
  });

  btnDecrease.addEventListener('click', () => {
    if (count > 0) { // Теріс мәндерге жол бермеу
      updateCounter(count - 1);
    }
  });

  btnReset.addEventListener('click', () => {
    updateCounter(0);
  });


  // ==========================================
  // TASK 7: Live text preview
  // ==========================================
  const liveInput = document.getElementById('live-input');
  const textPreview = document.getElementById('text-preview');
  const charCount = document.getElementById('char-count');
  const btnClearText = document.getElementById('btn-clear-text');

  liveInput.addEventListener('input', () => {
    const val = liveInput.value;
    charCount.textContent = val.length;

    if (val.trim() === '') {
      textPreview.textContent = 'Your text will appear here';
      textPreview.classList.add('text-muted');
    } else {
      textPreview.textContent = val;
      textPreview.classList.remove('text-muted');
    }
  });

  btnClearText.addEventListener('click', () => {
    liveInput.value = '';
    textPreview.textContent = 'Your text will appear here';
    textPreview.classList.add('text-muted');
    charCount.textContent = '0';
    liveInput.focus(); // Фокусты қайта енгізу жолағына қайтару
  });


  // ==========================================
  // TASK 8: Change an image with a select control
  // ==========================================
  const imageSelect = document.getElementById('image-select');
  const petImage = document.getElementById('pet-image');
  const imageCaption = document.getElementById('image-caption');

  const rockData = {
    classic: {
      src: '../images/photo.jpg',
      alt: 'Classic Grey Rock',
      caption: 'Classic Grey Rock - Sourced naturally and loyal.'
    },
    polished: {
      src: '../images/logo.png',
      alt: 'Polished River Stone',
      caption: 'Polished River Stone - Smooth, elegant, and stress-free.'
    },
    crystal: {
      src: '../images/photo.jpg',
      alt: 'Crystal Quartz Rock',
      caption: 'Crystal Quartz Rock - Premium collector rock with special shine.'
    }
  };

  imageSelect.addEventListener('change', (e) => {
    const selectedKey = e.target.value;
    const data = rockData[selectedKey];

    if (data) {
      petImage.src = data.src;
      petImage.alt = data.alt;
      imageCaption.textContent = data.caption;
    }
  });


  // ==========================================
  // TASK 9: Keyboard events
  // ==========================================
  const keyInput = document.getElementById('key-input');
  const keyStatus = document.getElementById('key-status');
  const submittedResult = document.getElementById('submitted-result');

  keyInput.addEventListener('keydown', (event) => {
    keyStatus.textContent = `Pressed key: "${event.key}" (Code: ${event.code})`;

    if (event.key === 'Enter') {
      event.preventDefault();
      submittedResult.textContent = keyInput.value;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      keyInput.value = '';
      submittedResult.textContent = '';
      keyStatus.textContent = 'Input cleared with Escape.';
    }
  });


  // ==========================================
  // TASK 10: Mouse and focus events
  // ==========================================
  const interactiveCard = document.getElementById('interactive-card');
  const cardInstruction = document.getElementById('card-instruction');

  function setHighlight() {
    interactiveCard.classList.add('highlight-card');
    cardInstruction.textContent = 'Card is active (Highlighted)! Press Tab or hover away to reset.';
  }

  function removeHighlight() {
    interactiveCard.classList.remove('highlight-card');
    cardInstruction.textContent = 'Hover over this card or focus on it using the Tab key.';
  }

  // Mouse events
  interactiveCard.addEventListener('mouseenter', setHighlight);
  interactiveCard.addEventListener('mouseleave', removeHighlight);

  // Focus & Blur events
  interactiveCard.addEventListener('focus', setHighlight);
  interactiveCard.addEventListener('blur', removeHighlight);

});
