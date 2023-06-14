// DECLARATION DE CONSTANTES & VARIABLES
// Div contenant l'ensemble du formulaire 
const sortSystemBox = document.getElementById('sortListSystem');
// Element select contenant les différentes options 
const sortList = document.getElementById('sortList');

function sortSystem() {
    // constante BOOK
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
            const dateValueA = parseInt(dateA[0].innerText);

            const dateB = b.getElementsByClassName('publishDate');
            const dateValueB = parseInt(dateB[0].innerText);
          
            return dateValueA - dateValueB;
        });
    }
    else {
     
        bookElements.sort(function (a, b) {

            const titleA = a.getElementsByClassName('bannerPhotoTitle');
            const titleValueA = titleA.value;

            const titleB = b.getElementsByClassName('bannerPhotoTitle');
            const titleValueB = titleB.value;

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
};

sortList.addEventListener("change", sortSystem);