document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");
    const strengthContainer = document.getElementById("strengthContainer");
    const mobileInput = document.getElementById("mobile");
    const mobileError = document.getElementById("mobileError");
    const passwordError = document.getElementById("passwordError");

    togglePassword.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });

    toggleConfirmPassword.addEventListener("click", () => {
        const isPassword = confirmPasswordInput.type === "password";
        confirmPasswordInput.type = isPassword ? "text" : "password";
        toggleConfirmPassword.classList.toggle("fa-eye");
        toggleConfirmPassword.classList.toggle("fa-eye-slash");
    });

    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        strengthContainer.style.display = password.length > 0 ? "block" : "none";
        strengthText.style.display = password.length > 0 ? "block" : "none";
        updateStrengthMeter(password);
    });

    function updateStrengthMeter(password) {
        let strength = 0;
        if (password.length >= 6) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (password.length === 0) {
            strengthBar.style.width = "0%";
            strengthText.textContent = "";
        } else if (strength <= 1) {
            strengthBar.style.width = "33%";
            strengthBar.style.backgroundColor = "#f44336";
            strengthText.textContent = "Weak";
        } else if (strength === 2 || strength === 3) {
            strengthBar.style.width = "66%";
            strengthBar.style.backgroundColor = "#ff9800";
            strengthText.textContent = "Medium";
        } else {
            strengthBar.style.width = "100%";
            strengthBar.style.backgroundColor = "#4caf50";
            strengthText.textContent = "Strong";
        }
    }
});

function handleSignup(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorMsg = document.getElementById("errorMsg");
    const mobileError = document.getElementById("mobileError");
    const passwordError = document.getElementById("passwordError");

    mobileError.style.display = "none";
    passwordError.style.display = "none";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    if (!username || !email || !mobile || !password || !confirmPassword) {
        showError("Please fill in all fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        showError("Please enter a valid email address.");
        return;
    }

    if (!mobilePattern.test(mobile)) {
        mobileError.textContent = "Please enter a valid 10-digit mobile number.";
        mobileError.style.display = "block";
        return;
    }

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long and include a special symbol.";
        passwordError.style.display = "block";
        return;
    }

    if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
    }

    errorMsg.style.display = "none";
    alert("✅ Signup successful! Redirecting to dashboard...");
    window.location.href = "dashboard.html";
}

function showError(message) {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
}
