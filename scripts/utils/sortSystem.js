// DECLARATION DE CONSTANTES & VARIABLES
// elements de liste contenant les différentes options 
const byPopularity = document.getElementById('byPopularity');
const byDate = document.getElementById('byDate');
const byName = document.getElementById('byName');
const byPopularityIcon = document.getElementById('byPopularityIcon');
const ulSort = document.getElementById('sortList');
let menuVisible = false;
  
/* Fonction dérouler la sortList */
function launchSortlist() {
    byDate.classList.toggle('visible');
    byName.classList.toggle('visible');
    byPopularityIcon.classList.toggle('rotated');
    menuVisible = !menuVisible;
}
/* Evenement affichage de la classList */
ulSort.addEventListener('click', launchSortlist);

/**
 * Fonction de tri des images 
 */
function sortSystem(event) {
    if (!menuVisible) {
        return;
    }
    const selectedValue = event.target.getAttribute('id');
    // constante BOOK photographe
    const bookBox = document.querySelector('.photograph_book');
    // création d'un tableau contenant chacun des éléments du BOOK.
    const bookElements = Array.from(document.querySelectorAll('.bannerPhotographerBox'));
    //Remplacement du contenu du BOOK par une chaîne vide.
    bookBox.innerHTML = '';
    
    if (selectedValue === "byPopularity") {
        bookElements.sort(function (a, b) {
            const popularityA = a.getElementsByClassName("numberOfLike");
            const popularityValueA = parseInt(popularityA[0].innerText);

            const popularityB = b.getElementsByClassName("numberOfLike");
            const popularityValueB = parseInt(popularityB[0].innerText);
    
            return popularityValueB - popularityValueA;
        });
    }
    else if (selectedValue === "byDate") {
        bookElements.sort(function (a, b) {
            const dateA = a.getElementsByClassName('publishDate');
            const dateValueA = new Date(dateA[0].innerText);

            const dateB = b.getElementsByClassName('publishDate');
            const dateValueB = new Date(dateB[0].innerText);

            return dateValueB - dateValueA;
        });
    }
    else {
        bookElements.sort(function (a, b) {
            const titleA = a.getElementsByClassName('bannerPhotoTitle');
            const titleValueA = titleA[0].innerText;

            const titleB = b.getElementsByClassName('bannerPhotoTitle');
            const titleValueB = titleB[0].innerText;

            if (titleValueA < titleValueB) {
                return -1;
            }
            else if (titleValueA > titleValueB) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    bookElements.forEach(el => bookBox.append(el));
}

byPopularity.addEventListener('click', sortSystem);
byDate.addEventListener("click", sortSystem);
byName.addEventListener("click", sortSystem);

// Déclenchement de la fonction touche entrée
function pressEnter(e) {
    if (e.keyCode === 13 && !menuVisible) {
        launchSortlist();
        return;
    }
    if (e.keyCode === 13 && menuVisible) {
        sortSystem(e);
        launchSortlist();
    }

}
byPopularity.addEventListener("keyup", pressEnter);
byDate.addEventListener("keyup", pressEnter);
byName.addEventListener("keyup", pressEnter);