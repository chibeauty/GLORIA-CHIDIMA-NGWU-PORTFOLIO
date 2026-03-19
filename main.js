// main.js — lightweight interactions for the portfolio

// Smooth scroll for internal anchor links
document.addEventListener('click', function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (href === '#' || href === '#!') return; // ignore placeholder links
  if (href.startsWith('#')) {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }
  }
});

// Simple contact form validation and submit handling (no backend)
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');

    // basic validation
    const errors = [];
    if (!name.value.trim()) errors.push('Name is required');
    if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) errors.push('A valid email is required');
    if (!subject.value.trim()) errors.push('Subject is required');
    if (!message.value.trim()) errors.push('Message is required');

    // show simple inline feedback
    let feedback = form.querySelector('.form-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'form-feedback';
      form.insertBefore(feedback, form.firstChild);
    }
    feedback.textContent = errors.length ? errors.join('; ') : 'Message ready to send (demo)';
    feedback.style.color = errors.length ? '#b91c1c' : '#065f46';

    if (errors.length === 0) {
      // Here we would normally send data to a server. For the static demo, just clear the form.
      form.reset();
      setTimeout(() => {
        feedback.textContent = 'Thanks — I will get back to you soon.';
      }, 600);
    }
  });
})();

// Lightweight project modal: use data attributes on .project-card elements
(function () {
  const projectCards = document.querySelectorAll('.project-card');
  if (!projectCards.length) return;

  // create modal elements
  const modal = document.createElement('div');
  modal.className = 'project-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="project-modal-inner">
      <button class="modal-close" aria-label="Close project details">×</button>
      <div class="project-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalBody = modal.querySelector('.project-modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  function openModal(card) {
    const title = card.dataset.title || card.querySelector('h3')?.textContent || 'Project';
    const desc = card.dataset.description || card.querySelector('p')?.textContent || '';
    const img = card.dataset.img ? `<img src="${card.dataset.img}" alt="${title}" class="modal-img"/>` : '';
    const details = card.dataset.details || '';

    modalBody.innerHTML = `
      <h3>${title}</h3>
      <div class="modal-grid">
        <div class="modal-media">${img}</div>
        <div class="modal-info">
          <p>${desc}</p>
          <div class="modal-details">${details}</div>
        </div>
      </div>
    `;

    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', function (e) {
      // ignore clicks on links inside the card
      if (e.target.closest('a')) return;
      openModal(card);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
