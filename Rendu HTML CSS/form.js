let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Annule le comportement par défaut (envoi du formulaire)
  event.preventDefault();

  // Conteneur des erreurs
  let errorContainer = document.querySelector(".message-error");
  //Liste des erreurs
  let errorList = document.querySelector(".message-error ul");

  // On vide les erreurs et on cache le conteneur
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  // On récupère le champ email
  let email = document.querySelector("#email");

  // Si l'email est vide
  if (email.value === "") {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    // On ajoute le li sans la liste des erreurs
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  // On récupère le champ pseudo
  let pseudo = document.querySelector("#pseudo");

  // Si le pseudo est vide
  if (pseudo.value.length < 6) {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le pseudo ne peut pas être inférieur à 6 charactères";

    // On ajoute le li sans la liste des erreurs
    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  // On récupère le champ password
  let password = document.querySelector("#password");

  // Si le password est vide
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe ne peut pas être inférieur à 10 charactères";

    // On ajoute le li sans la liste des erreurs
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  // On récupère le champ password2
  let passwordConfirm = document.querySelector("#password2");

  if (passwordConfirm.value != password.value || passwordConfirm.value === "") {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    passwordConfirm.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le deux mots de passe doivent être identiques";

    // On ajoute le li sans la liste des erreurs
    errorList.appendChild(err);
  } else {
    passwordConfirm.classList.add("success");
  }

  // Arrivé ici, tous les checks sont passés

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}

function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}