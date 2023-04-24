
//
function photographerFactory(data) {
    const { portrait, name, city, country, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;
    // Fonction qui génère les fiches de présentation des photographes
    function getUserCardDOM() {

        
        // Création de la constante article -> Articles qui contiennent les fiches de présentation des photographes
        const article = document.createElement('article');
        // Création de l'attribut aria-label.
        article.setAttribute('aria-label', "fiche de présentation photographe");
        

        // Création de la constante image = création de l'élément img dans le DOM 
        const imgElement = document.createElement( 'img' );
        //
        imgElement.src = picture;
        // Création de l'attribut alt sur les photos de profils.
        imgElement.setAttribute('alt', "sa photo de profil");


        // Création de la constante h2 = création de l'élément h2 dans le DOM
        const nameElement = document.createElement( 'h2' );
        //
        nameElement.innerText = name;
        // Création de l'attribut aria-label.
        nameElement.setAttribute('aria-label', "son nom");


        // Création de la constante location = création de l'élément p dans le DOM
        const locationElement = document.createElement('p');
        //
        locationElement.innerText = city + ", " + country;
        // Création de l'attribut aria-label.
        locationElement.setAttribute('aria-label', "son lieu de travail");


        // Création de la constante tagline = élément p dans le DOM
        const tagLine = document.createElement('p');
        //
        tagLine.innerText = tagline;
        // Création de l'attribut aria-label.
        tagLine.setAttribute('aria-label', "son accroche");


        // Création de la constante price = création de l'élément p dans le DOM
        const priceElement = document.createElement('p');
        //
        priceElement.innerText = price + "€/jour";
        // Création de l'attribut aria-label.
        priceElement.setAttribute('aria-label', "son tarif");

        // Création des éléments enfants de l'article, placé à la suite les uns des
        article.appendChild(imgElement);
        article.appendChild(nameElement);
        article.appendChild(locationElement);
        article.appendChild(tagLine);
        article.appendChild(priceElement);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
} 
