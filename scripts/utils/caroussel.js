// Constante caroussel
const carousselBox = document.getElementById("caroussel_modal_box");

// OUVERTURE DU CAROUSSEL
// launch caroussel - fonction d'ouverture du caroussel
function launchCaroussel() { 
    carousselBox.style.display = "flex";
    console.log("caroussel ouvert");

    const imgs = document.querySelectorAll('.caroussel_modal img');
    let myImg;

    for (const img in imgs) {
        if (Object.hasOwnProperty.call(imgs, img)) {
            const element = imgs[img];
            if (element.src === e.currentTarget.firstChild.src) {
                myImg = element;
            }
        }
    };
};

// FERMETURE DU CAROUSSEL
// close modal caroussel - fonction de fermeture du caroussel
function closeCaroussel() {
    carousselBox.style.display = "none";
    console.log("caroussel fermé"); 
};

// Constante croix fermeture formulaire.
const closeCarousselBtn = document.getElementById("closeCarousselBtn");
/* closeModal event  */
closeCarousselBtn.addEventListener("click", closeCaroussel);





