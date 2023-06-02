
// On récupère l'id du photographe contenu dans l'URL
let params = (new URL(document.location)).searchParams;
let photographID = parseInt(params.get('id'));
console.log(photographID);

//Fonction asynchrone de récupération des données
async function getPhotographById(photographID) {
    // Récupération des données depuis le fichier JSON
    const reponse = await fetch('./data/photographers.json');
    const photographFiche = await reponse.json();

    return photographFiche.photographers.find(photographer => photographer.id === photographID);
}

async function displayPhotographerData(photographer) {
    const photographSection = document.querySelector('.photograph-header');
    const bannerBottomSection = document.querySelector('body');
    const titleContactFormSection = document.querySelector('#modal header');
    const photographerModel = photographerFactory(photographer);

    const userBannerDOM = photographerModel.getUserBannerDOM();
    const userBannerDOMPortrait = photographerModel.getUserBannerDOMPortrait();
    const UserBannerDOMLikeAndPrice = getUserBannerDOMLikeAndPrice();
    const userNameDOMContactForm = photographerModel.getUserNameDOMContactForm();
 
    photographSection.appendChild(userBannerDOM);
    photographSection.appendChild(userBannerDOMPortrait);
    bannerBottomSection.appendChild(UserBannerDOMLikeAndPrice);
    titleContactFormSection.appendChild(userNameDOMContactForm);
};

async function init(photographID) {
    // Récupère les datas des photographes
    const photographer = await getPhotographById(photographID);
    displayPhotographerData(photographer);
 
    const medias = await getPictures(photographID);
    displayMediaData(medias, photographer.name);
    displayCaroussel(medias, photographer.name);
    getUserBannerDOMLikeAndPrice()
    addMediaListenerToOpenCaroussel();
    teste();
};

//Fonction asynchrone de récupération des données
async function getPictures(ID) {

    // Récupération des données depuis le fichier JSON
    const reponse = await fetch('./data/photographers.json');
    const mediaFiches = await reponse.json();

    // et bien retourner le tableau medias seulement une fois récupéré
    return mediaFiches.media.filter(media => media.photographerId === ID);
}

function displayMediaData(media, photographerName) {
    const mediaSection = document.querySelector('.photograph_book');
    media.forEach((media) => {
        const mediaModel = mediaFactory(media, photographerName);
        const userBookDOM = mediaModel.getUserBookDOM();
        mediaSection.appendChild(userBookDOM);
    });

}; 

init(photographID);





// Fonction qui crée le contenu de la bannière situé en bas à droite de l'écran 
    //(le nombre de likes total ainsi que le tarif du photographe)
    function getUserBannerDOMLikeAndPrice(likes, price) {
        
        // DIV contenant l'ensemble des éléments 
        const bannerLikeAndPrice = document.createElement('div');
        bannerLikeAndPrice.setAttribute('id', 'bannerLikeAndPrice');
        
        // Div contenant les éléments concernant les likes
        const likeElements = document.createElement('div');
        likeElements.setAttribute('id', 'likeElementsBox');

        const totalLikeElement = document.createElement('p');
        totalLikeElement.setAttribute('id', 'totalLikes');
        totalLikeElement.innerText = likes;
        
        // Création de la constante contenant les icônes likes
        const iconLikeElement = document.createElement('i');
        iconLikeElement.setAttribute('class', 'fa-solid fa-heart');
        // Création de la constante price = création de l'élément p dans le DOM
        const priceElement = document.createElement('p');
        priceElement.innerText = price + "€/jour";

        likeElements.appendChild(totalLikeElement);
        likeElements.appendChild(iconLikeElement);
        bannerLikeAndPrice.appendChild(likeElements);
        bannerLikeAndPrice.appendChild(priceElement);

        return (bannerLikeAndPrice);
    }








// CAROUSSEL

function displayCaroussel(medias, photographerName) {
    const mediaSection = document.querySelector('#carousselMediasBox');
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographerName);
        const carousselDom = mediaModel.getUserCarousselDOM();
        mediaSection.appendChild(carousselDom);
    });
}
function teste() {
    const likeBtn = document.getElementsByClassName('likeSystem');
    for (const e in likeBtn) {
        if (Object.hasOwnProperty.call(likeBtn, e)) {
            const element = likeBtn[e];
            element.addEventListener('click', moreLike);
        }
    }
}
function addMediaListenerToOpenCaroussel() {
    const carousselBtn = document.getElementsByClassName('mediaElement');
    for (const btn in carousselBtn) {
        if (Object.hasOwnProperty.call(carousselBtn, btn)) {
            const element = carousselBtn[btn];
            element.addEventListener('click', launchCaroussel);
        }
    }
};