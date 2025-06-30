document.addEventListener("DOMContentLoaded", () => {
  const unlockButton = document.querySelector('.cta-button');

  if (unlockButton) {
    unlockButton.addEventListener('click', (e) => {
      e.preventDefault(); // Stop form submission
      showCenteredLoader("Redirecting to your DigiMitra Dashboard...");
    });
  }
});

function showCenteredLoader(message) {
  const overlay = document.createElement('div');
  overlay.classList.add('loading-overlay');

  const loaderBox = document.createElement('div');
  loaderBox.classList.add('loader-box');

  const spinner = document.createElement('div');
  spinner.classList.add('loading-spinner');

  const text = document.createElement('p');
  text.textContent = message;
  text.classList.add('loading-text');

  loaderBox.appendChild(spinner);
  loaderBox.appendChild(text);
  overlay.appendChild(loaderBox);
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
      window.location.href = "dashboard.html";
    }, 500);
  }, 2000);
}
