// SELECTING ELEMENTS
const form = document.querySelector("#form");
const signUp = document.querySelector(".sign-up");
const emailInput = document.querySelector("#email");

// EMAILADRES REGEX
function validateEmail(email) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;
  return validRegex.test(email);
}

// INTERACTIE VAN HET FORM
function checkForm() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
      if (document.querySelector(".thank-card").classList.contains("hide")) {
        document.querySelector(".thank-card").classList.remove("hide"); // Verwijderd de class of hide en maakt de thank-card zichtbaar
      }
      signUp.classList.add("hide"); // Zorgt voor het verdwijnen van het formulier
      document.querySelector(".attribution").classList.add("hide");
    } else {
      emailInput.classList.add("invalid-input");
      document.querySelector(".valid").classList.remove("hide");
      document.querySelector(".valid").style.color = "hsl(4, 100%, 67%)";
    }
  });
}
checkForm();

// INTERACTIE INPUTFIELD
function checkEmailValidity() {
  const emailInput = document.querySelector("#email");
  const invalidMessage = document.querySelector(".valid");

  emailInput.addEventListener("input", function () {
    if (validateEmail(emailInput.value)) {
      // Verwijder de 'invalid-input' klasse en verberg het validatiebericht
      emailInput.classList.remove("invalid-input");
      invalidMessage.classList.add("hide");
    } else {
      // Voeg de klasse 'invalid-input' toe aan het invoerveld
      emailInput.classList.add("invalid-input");
      invalidMessage.classList.remove("hide");
      invalidMessage.style.color = "hsl(4, 100%, 67%)";
    }
  });
}

// Roep de functie aan om de continue validatie in te stellen
checkEmailValidity();

// UPDATE EMAILADRES
function handleInput() {
  const span = document.querySelector(".adres");
  span.innerText = emailInput.value;
  if (validateEmail(emailInput.value)) {
    emailInput.classList.remove("invalid-input");
    document.querySelector(".valid").classList.add("hide");
  }
}

emailInput.addEventListener("input", handleInput);

// INTERACTIE DISMISS
function dismiss() {
  const dismissBtn = document.querySelector("#dismiss");
  dismissBtn.addEventListener("click", () => {
    if (signUp.classList.contains("hide")) {
      signUp.classList.remove("hide"); // Verwijderd de class of hide en maakt het formulier zichtbaar
    }
    document.querySelector(".thank-card").classList.add("hide"); // Zorgt voor het verdwijnen van de thank-card
    document.querySelector(".attribution").classList.remove("hide");
    document.querySelector(".valid").classList.add("hide");
  });
}
dismiss();
