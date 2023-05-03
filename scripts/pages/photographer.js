


// Ou placer cette fonction, et comment réutiliser correctement la fonction quasi identique créée précédemment ?



function photographerFactory(data) {
    const { portrait, name, city, country, tagline} = data;
    // Fonction qui génère les fiches de présentation des photographes
    function getUserCardDOM() {
        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const div = document.createElement('div');
        // Constante name = création de l'élément 'h2' dans le DOM
        const nameElement = document.createElement( 'h2' );
        nameElement.innerText = name;
        // Constante location = création de l'élément 'p' dans le DOM
        const locationElement = document.createElement('p');
        locationElement.innerText = city + ", " + country;
        // Création de la constante tagline = élément p dans le DOM
        const tagLine = document.createElement('p');
        tagLine.innerText = tagline;
        

    // Création des éléments enfants de l'article, placé à la suite les uns des
    div.appendChild(nameElement);
    div.appendChild(locationElement);
    div.appendChild(tagLine);
    return (div);

    }
    return { name, city, country, tagline, getUserCardDOM }

} 



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
    const userCardDOM = photographerModel.getUserCardDOM();
    photographSection.appendChild(userCardDOM);
};

async function init(photographID) {
    // Récupère les datas des photographes
    const photographer = await getPhotographById(photographID);
    displayData(photographer);
};

init(photographID);