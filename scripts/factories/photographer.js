function photographerFactory(data) {
    const { id, portrait, name, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;


    // Fonction qui génère les fiches de présentation des photographes sur la page index
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

    // Fonction qui crée la bannière de présention du photographe, 
    // (en haut de l'écran dans le photogrpahe-header) 
    function getUserBannerDOM() {
        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const div = document.createElement('div');
        div.setAttribute('id', 'bannerDOM')
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

    // Fonction qui crée la div contenant le portrait 
    // (en haut à droite de la bannière header-photgrapher)
    function getUserBannerDOMPortrait() {
        const divPortrait = document.createElement('div');
        divPortrait.setAttribute('class', 'portrait')
        // constante image = création de l'élément 'img' dans le DOM 
        const imgElement = document.createElement('img');
        imgElement.src = picture;

        divPortrait.appendChild(imgElement);
        return (divPortrait);
    }

    // Fonction qui crée le contenu de la bannière situé en bas à droite de l'écran 
    //(le nombre de likes total ainsi que le tarif du photographe)
    function getUserBannerDOMLikeAndPrice() {
        // DIV contenant l'ensemble des éléments 
        const bannerLikeAndPrice = document.createElement('div');
        bannerLikeAndPrice.setAttribute('id', 'bannerLikeAndPrice');
        // Div contenant les éléments concernant les likes
        const likeElements = document.createElement('div');
        likeElements.setAttribute('id', 'likeElementsBox');
        // Création de la constante qui contiendra le nombre de likes
        const totalLikeElement = document.createElement('p');
        totalLikeElement.setAttribute('id', 'totalLikes');
        totalLikeElement.innerText = '200';
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

    // Fonction de récupération du nom du photographe dans le formulaire.
    function getUserNameDOMContactForm() {
        const titleContactForm = document.createElement('div')
        titleContactForm.setAttribute('id', 'titleContactFormBox');

        const messageContactForm = document.querySelector('#modalTitle');

        const userNameContactForm = document.createElement('h2');
        userNameContactForm.setAttribute('id', 'userNameContactForm');
        userNameContactForm.innerText = name;

        titleContactForm.appendChild(messageContactForm);
        titleContactForm.appendChild(userNameContactForm);
        return (titleContactForm);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserBannerDOM, getUserBannerDOMPortrait, getUserBannerDOMLikeAndPrice, getUserNameDOMContactForm }

};