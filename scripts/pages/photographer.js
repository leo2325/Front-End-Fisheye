// On récupère l'id du photographe contenu dans l'URL
let params = (new URL(document.location)).searchParams;
let photographID = parseInt(params.get('id'));

//Fonction asynchrone de récupération des données
async function getPhotographById(photographID) {
    // Récupération des données depuis le fichier JSON
    const reponse = await fetch('./data/photographers.json');
    const photographFiche = await reponse.json();
    // retourne l'id du photographe du fichier json, qui correpsond à l'id du photographe dans le dom
    return photographFiche.photographers.find(photographer => photographer.id === photographID);
}

//  
async function displayPhotographerData(photographer, medias) {
    const photographSection = document.querySelector('.photograph-header');
    const bannerBottomSection = document.querySelector('body');
    const titleContactFormSection = document.querySelector('#modal header');
    // eslint-disable-next-line
    const photographerModel = photographerFactory(photographer);

    const userBannerDOM = photographerModel.getUserBannerDOM();
    const userBannerDOMPortrait = photographerModel.getUserBannerDOMPortrait();
    const likes = medias.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.likes;
    }, 0);
    const UserBannerDOMLikeAndPrice = getUserBannerDOMLikeAndPrice(likes, photographer.price);
    const userNameDOMContactForm = photographerModel.getUserNameDOMContactForm();

    photographSection.appendChild(userBannerDOM);
    photographSection.appendChild(userBannerDOMPortrait);
    bannerBottomSection.appendChild(UserBannerDOMLikeAndPrice);
    titleContactFormSection.appendChild(userNameDOMContactForm);
}

async function init(photographID) {
    // Récupère les datas des photographes
    const photographer = await getPhotographById(photographID);
    const medias = await getPictures(photographID);
    displayPhotographerData(photographer, medias);
    displayMediaData(medias, photographer.name);

    // j'appelle addLikeEvent ici parce que les éléments ne sont pas encore présents dans la page  
    addLikeEvent();
}

//Fonction asynchrone de récupération des données
//affichage de la photo de profil du photographe
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
        // eslint-disable-next-line
        const mediaModel = mediaFactory(media, photographerName);
        const userBookDOM = mediaModel.getUserBookDOM();
        mediaSection.appendChild(userBookDOM);
    });
    // eslint-disable-next-line
    Lightbox.init();
}

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
    totalLikeElement.setAttribute('tabindex', '0');
    totalLikeElement.setAttribute('aria-label', 'le photographe a un total de' + ' ' + likes + 'j\'aime')
    // Création de la constante contenant les icônes likes
    const iconLikeElement = document.createElement('span');
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

// Fonction d'incrémentation des likes
function moreLike(e) {
    const countHtml = e.currentTarget.firstChild;
    const iconHtml = e.currentTarget.lastChild.firstChild;
    const totalLikeElement = document.getElementById('totalLikes');

    if (iconHtml.classList.contains('fa-solid')) {
        iconHtml.classList.remove('fa-solid');
        iconHtml.classList.add('fa-regular');
        countHtml.innerText = parseInt(countHtml.innerText) - 1;
        totalLikeElement.innerText = parseInt(totalLikeElement.innerText) - 1;
    } else {
        countHtml.innerText = parseInt(countHtml.innerText) + 1;
        iconHtml.classList.add('fa-solid');
        iconHtml.classList.remove('fa-regular');
        totalLikeElement.innerText = parseInt(totalLikeElement.innerText) + 1;
    }
}

// Fonction d'incrémentation des likes photographies
function addLikeEvent() {
    const likeBtn = document.getElementsByClassName('likeSystem');
    for (const e in likeBtn) {
        if (Object.hasOwnProperty.call(likeBtn, e)) {
            const element = likeBtn[e];
            element.addEventListener('click', moreLike);
            element.addEventListener('keyup', function (e) {
                if (e.keyCode === 13) {
                    moreLike(e);
                }
            })
        }
    }
}