document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const errorMsg = document.querySelector(".error-message");
  const togglePassword = document.querySelector("#togglePassword");
  const passwordInput = document.querySelector("#password");

  // Toggle eye icon and password visibility
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // Toggle between eye and eye-slash
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });

  // Handle login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    if (username === "" || password === "") {
      showError("Please fill in both fields.");
      return;
    }

    // Basic credential check (for demo purposes)
    if (username === "admin" && password === "admin123") {
      hideError();
      alert("✅ Login successful! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    } else {
      showError("Invalid username or password.");
    }
  });

  function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
  }

  function hideError() {
    errorMsg.textContent = "";
    errorMsg.style.display = "none";
  }
});
