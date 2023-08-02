// OUVERTURE/FERMETURE DU FORMULAIRE
// Déclaration des constantes DOM
// Conteneur formulaire
const modal = document.getElementById("contact_modal");
// Bouton ouverture formulaire - "je m'inscris"
const modalBtn = document.getElementById("contact_button");
// Icône fermeture formulaire
const closeBtn = document.getElementById("closeModal_Btn");
// Formulaire
const form = document.querySelector('form');

/**
 * launch modal form - fonction d'ouverture du formulaire
 */
function launchModal() { 
        modal.style.display = "block";
}
modalBtn.addEventListener("click", launchModal);
/**
 * close modal form - fonction de fermeture du formulaire
 */
function closeModal() {
        modal.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);
/**
 * empêcher le comportement par défault du formulaire
 */
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// RECUPERER LES VALEURS DU FORMULAIRE
// Déclarations des variables DOM
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let message = document.getElementById('message'); 
// Bouton d'envoi du formulaire
let sendingBtn = document.getElementById("sendingBtn"); 

/**
 * Affiche les valeurs récupérées dans la console
 */
function getInputValue(){
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(email.value);
        console.log(message.value);
        closeModal();
}
sendingBtn.addEventListener("click", getInputValue);