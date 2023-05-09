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
    const photographSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userBannerDOM = photographerModel.getUserBannerDOM();
    photographSection.appendChild(userBannerDOM);
};

async function init(photographID) {
    // Récupère les datas des photographes
    const photographer = await getPhotographById(photographID);
    displayPhotographerData(photographer);

    const medias = await getPictures(photographID);
    displayMediaData(medias, photographer.name);
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
    const mediaSection = document.querySelector(".photograph_book");

    media.forEach((media) => {
        const mediaModel = mediaFactory(media, photographerName);
        const userBookDOM = mediaModel.getUserBookDOM();
        mediaSection.appendChild(userBookDOM);
    });
};

init(photographID);