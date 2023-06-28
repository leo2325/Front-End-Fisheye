// DECLARATION DE CONSTANTES & VARIABLES
// Element select contenant les différentes options 
const sortList = document.getElementById('sortList');

/**
 * Fonction de tri des images 
 */
function sortSystem() {
    // constante BOOK photographe
    const bookBox = document.querySelector('.photograph_book') ;
    // création d'un tableau contenant chacun des éléments du BOOK.
    const bookElements = Array.from(document.querySelectorAll('.bannerPhotographerBox'));
    //Remplacement du contenu du BOOK par une chaîne vide.
    bookBox.innerHTML = '';

    if( sortList.value === "Popularité" ){
        bookElements.sort(function (a, b) {
            const popularityA = a.getElementsByClassName("numberOfLike");
            const popularityValueA = parseInt(popularityA[0].innerText);

            const popularityB = b.getElementsByClassName("numberOfLike");  
            const popularityValueB = parseInt(popularityB[0].innerText);
            
            return popularityValueB - popularityValueA;    
        });
    }
    else if( sortList.value === "Date" ){
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

            if(titleValueA < titleValueB){
                return -1;
            }
            else if(titleValueA > titleValueB){
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    bookElements.forEach(el => bookBox.append(el));
}
sortList.addEventListener("change", sortSystem);