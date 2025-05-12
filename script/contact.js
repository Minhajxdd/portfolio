const FORMSPREE_KEY = `mblozyln`;

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const recaptchaError = document.getElementById("recaptchaError");

function validateName() {
  const name = nameInput.value.trim();
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long";
    nameError.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
    return false;
  }
  nameError.classList.add("hidden");
  nameInput.classList.remove("border-red-500");
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = emailInput.value.trim();
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    emailError.classList.remove("hidden");
    emailInput.classList.add("border-red-500");
    return false;
  }
  emailError.classList.add("hidden");
  emailInput.classList.remove("border-red-500");
  return true;
}

function validateMessage() {
  const message = messageInput.value.trim();
  if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters long";
    messageError.classList.remove("hidden");
    messageInput.classList.add("border-red-500");
    return false;
  }
  messageError.classList.add("hidden");
  messageInput.classList.remove("border-red-500");
  return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  // recaptcha
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    addRecaptchaError(`Complete the verification`);
    return;
  }
  removeRecaptchaError();

  if (!(isNameValid && isEmailValid && isMessageValid)) {
    return;
  }

  const data = new FormData(form);

  handleSubmit(data);
});

async function handleSubmit(data) {
  fetch(`https://formspree.io/f/${FORMSPREE_KEY}`, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        removeRecaptchaError();
        showSuccessToast();
        form.reset();
      } else {
        addRecaptchaError(`Something went wrong!`);
      }
    })
    .catch((error) => {
      console.log(error);
      addRecaptchaError(`Something went wrong!`);
    });
}

function addRecaptchaError(err) {
  recaptchaError.textContent = err;
  recaptchaError.classList.remove("hidden");
  recaptchaError.classList.add("border-red-500");
}

function removeRecaptchaError() {
  recaptchaError.classList.add("hidden");
  recaptchaError.classList.remove("border-red-500");
}

// toast
function showSuccessToast(message = "Your action was completed successfully.") {
  const toast = document.getElementById("success-toast");
  toast.querySelector("p.text-xs").textContent = message;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}
