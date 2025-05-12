const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateName() {
    const name = nameInput.value.trim();
    if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        nameError.classList.remove('hidden');
        nameInput.classList.add('border-red-500');
        return false;
    }
    nameError.classList.add('hidden');
    nameInput.classList.remove('border-red-500');
    return true;
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value.trim();
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.remove('hidden');
        emailInput.classList.add('border-red-500');
        return false;
    }
    emailError.classList.add('hidden');
    emailInput.classList.remove('border-red-500');
    return true;
}

function validateMessage() {
    const message = messageInput.value.trim();
    if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        messageError.classList.remove('hidden');
        messageInput.classList.add('border-red-500');
        return false;
    }
    messageError.classList.add('hidden');
    messageInput.classList.remove('border-red-500');
    return true;
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

form.addEventListener('submit', function(e) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA');
        e.preventDefault();
        return;
    }

    if (!(isNameValid && isEmailValid && isMessageValid)) {
        e.preventDefault();
    }
});