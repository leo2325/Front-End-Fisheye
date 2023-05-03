
//Fonction asynchrone de récupération des données
async function getPhotographById(photographID) {
    // Récupération des données depuis le fichier JSON
    const reponse = await fetch('./data/photographers.json');
    const photographFiche = await reponse.json();

    return photographFiche.photographers.find(photographer => photographer.id === photographID);
}

async function displayData(photographer) {
    const photographSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserBannerDOM();
    photographSection.appendChild(userBannerDOM);
};

async function init(photographID) {
    // Récupère les datas des photographes
    const photographer = await getPhotographById(photographID);
    displayData(photographer);
};

init(photographID);