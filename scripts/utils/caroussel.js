
// ENGLOBER TOUTES LES FONCTIONS DU UNE FONCTION GESTION DU CAROUSSEL ? 

// OUVERTURE DU CAROUSSEL

const carousselBox = document.getElementById("caroussel_modal_box");

// launch caroussel - fonction d'ouverture du caroussel
function launchCaroussel() { 
    carousselBox.style.display = "block";
    console.log("caroussel ouvert");
};

// Constante bouton ouverture formulaire - "je m'inscris".
const carousselBtn = document.getElementsByClass("bannerPhotographerBox");
/* launchModal event */
carousselBtn.addEventListener("click", launchCaroussel);




//AUTRE FONCTION
// Récupérer le nom de la photo cliquée
// La placer au centre 
// CSS : cacher ce qui depasse de la fenêtre.

//AUTRE FONCTION
// Décaler l'écran de 100% au click sur les flêches ou sur les boutons du clavier.




// FERMETURE DU FORMULAIRE
// close modal form - fonction de fermeture du formulaire
function closeCaroussel() {
    carousselBox.style.display = "none";
    console.log("modale fermée"); 
};
// Constante croix fermeture formulaire.
const closeCarousselBtn = document.getElementById("closeCarousselBtn");
/* closeModal event  */
closeBtn.addEventListener("click", closeCaroussel);





