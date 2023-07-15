// fonction de navigation de la page d'acceuil à la page photographe
// eslint-disable-next-line
function mediaFactory(data, photographerName) {

    const { id, photographerId, title, image, video, likes, date } = data;
    // On récupère la partie correspondante du nom du photographe
    const photographerFirstName = photographerName.split(' ');

    const picture = `assets/${photographerFirstName[0]}/${image}`;
    const videoLink = `assets/${photographerFirstName[0]}/${video}`;
    // Fonction qui génère les fiches de présentation des photographes
    function getUserBookDOM() {

        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const article = document.createElement('article');
        article.setAttribute('class', 'bannerPhotographerBox');

        let mediaElement = undefined;

        if (image && !video) {
            // constante image = création de l'élément 'img' dans le DOM 
            mediaElement = document.createElement('img');
            mediaElement.src = picture;
            mediaElement.setAttribute('class', 'mediaElement');
            // Element Alt pour accessibilité
            mediaElement.setAttribute('alt', title)
        }
        else {

            // constante video = création de l'élément 'video' dans le DOM 
            mediaElement = document.createElement('video');
            mediaElement.setAttribute('class', 'mediaElement');
            // Element Alt pour accessibilité
            mediaElement.setAttribute('alt', title)
            mediaElement.setAttribute('controls', ''); 

            let sourceVideo = document.createElement('source');
            sourceVideo.setAttribute('src', videoLink);
            sourceVideo.setAttribute('type', "video/mp4");

            mediaElement.appendChild(sourceVideo);
        }

        // Const div contenant le titre et les likes
        const div = document.createElement('div');
        div.setAttribute('class', 'bannerPhotographerDescriptionBox');
        // Constante photoTitle = création de l'élément 'h2' dans le DOM
        const photoTitle = document.createElement('h2');
        photoTitle.innerText = title;
        photoTitle.setAttribute('class', 'bannerPhotoTitle');


        const publishDate = document.createElement('input');
        publishDate.innerText = date;
        publishDate.setAttribute('type', 'hidden');
        publishDate.setAttribute('class', 'publishDate');        


        const likeSystem = document.createElement('div');
        likeSystem.setAttribute('class', 'likeSystem');

        const numberOfLike = document.createElement('p');
        numberOfLike.setAttribute('class', 'numberOfLike');
        numberOfLike.innerText = likes;

        const divIconsLike = document.createElement('div');
        divIconsLike.setAttribute('class', 'iconsLike')

        const iconUnlike = document.createElement('i');
        iconUnlike.setAttribute('class', 'fa-regular fa-heart');
        iconUnlike.setAttribute('id', 'unlike');


        // Création des éléments enfants de l'article
        article.appendChild(mediaElement);
        article.appendChild(div);
        div.appendChild(photoTitle);
        div.appendChild(publishDate);

        div.appendChild(likeSystem);
        likeSystem.appendChild(numberOfLike);
        likeSystem.appendChild(divIconsLike);
        divIconsLike.appendChild(iconUnlike);
        return (article);
    }

    return { id, photographerId, title, image, video, likes, date, getUserBookDOM}
}