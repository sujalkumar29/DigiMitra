document.addEventListener("DOMContentLoaded", () => {
  const unlockButton = document.querySelector('.cta-button');

  if (unlockButton) {
    unlockButton.addEventListener('click', (e) => {
      e.preventDefault(); // prevent page jump
      showNotification("✨ Start unlocking your potential today!");
    });
  }
});

// Non-blocking animated notification with mobile adjustments
function showNotification(message) {
  const notice = document.createElement('div');
  notice.classList.add('notification-box');
  notice.textContent = message;

  Object.assign(notice.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    background: '#00ffb3',
    color: '#000',
    padding: '12px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 255, 179, 0.4)',
    fontWeight: 'bold',
    zIndex: '1000',
    transition: 'opacity 0.5s ease',
    maxWidth: 'calc(100% - 40px)',
  });

  document.body.appendChild(notice);

  setTimeout(() => {
    notice.style.opacity = '0';
    setTimeout(() => notice.remove(), 500);
  }, 2500);
}
