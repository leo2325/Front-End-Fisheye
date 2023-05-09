function photographerFactory(data) {
    const { id, portrait, name, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;


    // Fonction qui génère les fiches de présentation des photographes
    function getUserCardDOM() {
        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const article = document.createElement('article');
        // constante linkPhotographers = création de l'élément 'a' dans le DOM
        // attribut href de l'élément 'a'
        const linkPhotographer = document.createElement('a');
        linkPhotographer.setAttribute('href', ("photographer.html?id=" + id));
        // constante image = création de l'élément 'img' dans le DOM 
        const imgElement = document.createElement('img');
        imgElement.src = picture;
        // Constante h2 = création de l'élément 'h2' dans le DOM
        const nameElement = document.createElement('h2');
        nameElement.innerText = name;
        // Constante location = création de l'élément 'p' dans le DOM
        const locationElement = document.createElement('p');
        locationElement.innerText = city + ", " + country;
        // Création de la constante tagline = élément p dans le DOM
        const tagLine = document.createElement('p');
        tagLine.innerText = tagline;
        // Création de la constante price = création de l'élément p dans le DOM
        const priceElement = document.createElement('p');
        priceElement.innerText = price + "€/jour";

        // Création des éléments enfants de l'article, placé à la suite les uns des
        article.appendChild(linkPhotographer);
        linkPhotographer.appendChild(imgElement);
        linkPhotographer.appendChild(nameElement);
        article.appendChild(locationElement);
        article.appendChild(tagLine);
        article.appendChild(priceElement);
        return (article);
    }

    function getUserBannerDOM() {
        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const div = document.createElement('div');
        // Constante name = création de l'élément 'h2' dans le DOM
        const nameElement = document.createElement('h2');
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



    // Afficher la photo de profil, dans une div seule comme sur la maquette 
    function getUserPictureDOM() {

        const divIMG = document.createElement('div');
        divIMG.setAttribute( 'class', 'divIMG');
        
        const imgElement = document.createElement('img');
        imgElement.src = picture;

        divIMG.appendChild(imgElement);
        return (divIMG);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserBannerDOM, getUserPictureDOM }

};