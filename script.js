const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateName() {
 const value = nameInput.value.trim();
 if (value === "") {
   nameError.textContent = "Name is required";
   nameInput.className = "error";
   return false;
 }
 nameError.textContent = "";
 nameInput.className = "valid";
 return true;
}
function validateEmail() {
 const value = emailInput.value.trim();
 if (value === "") {
   emailError.textContent = "Email is required";
   emailInput.className = "error";
   return false;
 }
 if (!emailRegex.test(value)) {
   emailError.textContent = "Invalid email format";
   emailInput.className = "error";
   return false;
 }
 emailError.textContent = "";
 emailInput.className = "valid";
 return true;
}
function validatePassword() {
 const value = passwordInput.value;
 if (value.length < 6) {
   passwordError.textContent = "Password must be at least 6 characters";
   passwordInput.className = "error";
   return false;
 }
 passwordError.textContent = "";
 passwordInput.className = "valid";
 return true;
}
function updateButton() {
 if (validateName() && validateEmail() && validatePassword()) {
   submitBtn.disabled = false;
 } else {
   submitBtn.disabled = true;
 }
}
nameInput.addEventListener("input", updateButton);
emailInput.addEventListener("input", updateButton);
passwordInput.addEventListener("input", updateButton);
form.addEventListener("submit", function (e) {
 e.preventDefault();
 if (validateName() && validateEmail() && validatePassword()) {
   alert("Registration Successful!");
   form.reset();
   submitBtn.disabled = true;
   nameInput.className = "";
   emailInput.className = "";
   passwordInput.className = "";
 }
});