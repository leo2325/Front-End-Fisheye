function mediaFactory(data, photographerName) {
    
    const { id, photographerId, title, image, video, likes } = data;

    const photographerFirstName = photographerName.split(' ');

    const picture = `assets/${photographerFirstName[0]}/${image}`;
    const videoLink = `assets/${photographerFirstName[0]}/${video}`;
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
            mediaElement.setAttribute('class', 'mediaElement');
            mediaElement.setAttribute('controls', '');

            let sourceVideo = document.createElement('source');
            sourceVideo.setAttribute('src', videoLink);
            sourceVideo.setAttribute('type', "video/mp4");

            mediaElement.appendChild(sourceVideo);
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

    // CAROUSSEL   FACTORY //
    // Fonction de mise en forme du caroussel
    function getUserCarousselDOM(){
        const carousselModal = document.createElement('div');
        carousselModal.setAttribute('class', 'caroussel_modal');
        carousselModal.setAttribute('aria-hidden', 'true');
        carousselModal.setAttribute('role', 'dialog');
        carousselModal.setAttribute('aria-describedby', 'modalTitle');

        const carousselBox = document.createElement('div');
        
        const previousBtn = document.createElement('i');
        previousBtn.setAttribute('class', 'fa-solid fa-chevron-left');
        
        let mediaElementZoom = undefined;

        if( image && !video) {
            // constante image = création de l'élément 'img' dans le DOM 
            mediaElementZoom = document.createElement('img');
            mediaElementZoom.src = picture;
            mediaElementZoom.setAttribute('class', 'mediaElement');
        }
        else {

            // constante video = création de l'élément 'video' dans le DOM 
            mediaElementZoom = document.createElement('video');
            mediaElementZoom.setAttribute('class', 'mediaElement');
            mediaElementZoom.setAttribute('controls', '');

            let sourceVideoZoom = document.createElement('source');
            sourceVideoZoom.setAttribute('src', videoLink);
            sourceVideoZoom.setAttribute('type', "video/mp4");

            mediaElementZoom.appendChild(sourceVideo);
        };

        const nextBtn= document.createElement('i');
        nextBtn.setAttribute('class', 'fa-solid fa-chevron-right');

        const closeBtn = document.createElement('i');
        closeBtn.setAttribute('class', 'fa-solid fa-xmark');
        closeBtn.setAttribute('id', 'closeBtn');

        carousselBox.appendChild(previousBtn);
        carousselBox.appendChild(mediaElementZoom);
        carousselBox.appendChild(nextBtn);
        carousselModal.appendChild(carousselBox);
        carousselModal.appendChild(closeBtn);

        return (carousselModal);
    }

    return { id, photographerId, title, image, video, likes, getUserBookDOM, getUserCarousselDOM }
};