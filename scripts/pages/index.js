//Fonction asynchrone de récupération des données
    async function getPhotographers() {
        // Récupération des données depuis le fichier JSON
            const reponse = await fetch('./data/photographers.json');
            const photographersFiches = await reponse.json();

        // et bien retourner le tableau photographers seulement une fois récupéré
        return photographersFiches;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            // eslint-disable-next-line
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
