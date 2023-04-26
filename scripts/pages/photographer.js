// GET datas

// boucle   for
    // Récupérer l'id du photographe conetnu dans l'url
    // Le comparer aux datas 

//          of



// On récupère l'id du photographe contenu dans l'URL
let params = (new URL(document.location)).searchParams;
let photographID = params.get('id');
console.log(photographID);



function photographerFactory(data) {
    const { id, name, city, country, tagline} = data;
    ;
    // Fonction qui génère les fiches de présentation des photographes
    function getUserCardDOM() {
        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const div = document.createElement('div');
        // Constante h2 = création de l'élément 'h2' dans le DOM
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
 async function getPhotograph() {
    // Récupération des données depuis le fichier JSON
        const reponse = await fetch('./data/photographers.json');
        const photographFiche = await reponse.json();

//Code à modifier à partir d'ici
    let photographers = [];
    // et bien retourner le tableau photographers seulement une fois récupéré
    return photographFiche;
}

async function displayData(photographers) {
    const photographSection = document.querySelector(".photograph-header");

    const photograph;
    photographers.find

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotograph();
    displayData(photographers);
};

init();