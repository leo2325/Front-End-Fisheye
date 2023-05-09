// OUVERTURE DU FORMULAIRE 
// Constante formulaire.
const modal = document.getElementById("contact_modal");

// launch modal form - fonction d'ouverture du formulaire
function launchModal() { 
        modal.style.display = "block";
        console.log("modale ouverte");
};

// Constante bouton ouverture formulaire - "je m'inscris".
const modalBtn = document.getElementById("contact_button");

/* launchModal event */
modalBtn.addEventListener("click", launchModal());

// FERMETURE DU FORMULAIRE
// close modal form - fonction de fermeture du formulaire
function closeModal() {
        modal.style.display = "none";
        console.log("modale fermée"); 
};

// Constante bouton fermeture formulaire.
const closeBtn = document.getElementById("closeModal_Btn");

/* closeModal event  */
closeBtn.addEventListener("click", closeModal);


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
})


let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
        let message = document.getElementById('message'); 
        function getInputValue(){
                console.log(firstName.value);
                console.log(lastName.value);
                console.log(email.value);
                console.log(message.value);
        }
let sendingBtn = document.getElementById("sendingBtn");
        sendingBtn.addEventListener("click", getInputValue);
