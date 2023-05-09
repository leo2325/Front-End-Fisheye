function mediaFactory(data, photographerName) {
    
    const { id, photographerId, title, image, video, likes } = data;

    const photographerFirstName = photographerName.split(' ');

    const picture = `assets/${photographerFirstName[0]}/${image}`;

    // Fonction qui génère les fiches de présentation des photographes
    function getUserBookDOM() {

        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const article = document.createElement('article');
        article.setAttribute('class', 'bannerPhotographerBox');


        let mediaElement = undefined;
        
        if( image && !video) {
            // constante image = création de l'élément 'img' dans le DOM 
            mediaElement = document.createElement('img');
            mediaElement.src = picture;
            mediaElement.setAttribute('class', 'mediaElement');
        }
        else {
            // constante video = création de l'élément 'video' dans le DOM 
            mediaElement = document.createElement('video');
            mediaElement.setAttribute('src', video);
            mediaElement.setAttribute('class', 'mediaElement');
        };

        // Const div contenant le titre et les likes
        const div = document.createElement('div');
        div.setAttribute('class', 'bannerPhotographerDescriptionBox');
        // Constante photoTitle = création de l'élément 'h2' dans le DOM
        const photoTitle = document.createElement('h2');
        photoTitle.innerText = title;
        photoTitle.setAttribute('class', 'bannerPhotoTitle');

        const likeSystem = document.createElement('div');
        likeSystem.setAttribute('class', 'likeSystem');
        
        // Création des éléments enfants de l'article, placé à la suite les uns des
        article.appendChild(mediaElement);
        article.appendChild(div);
        div.appendChild(photoTitle);
        div.appendChild(likeSystem);
        return (article);
    }
    return { id, photographerId, title, image, video, likes, getUserBookDOM }
};