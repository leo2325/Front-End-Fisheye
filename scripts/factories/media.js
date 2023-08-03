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
                        mediaElement.setAttribute('tabIndex', 0);
                        mediaElement.src = picture;
                        mediaElement.setAttribute('class', 'mediaElement');
                        // Element Alt pour accessibilité
                        mediaElement.setAttribute('alt', title)
                }
                else {
                        // constante video = création de l'élément 'video' dans le DOM 
                        mediaElement = document.createElement('video');
                        mediaElement.setAttribute('class', 'mediaElement');
                        mediaElement.setAttribute('tabIndex', 0);
                        // Element Alt pour accessibilité
                        mediaElement.setAttribute('alt', title)
                        let sourceVideo = document.createElement('source');
                        sourceVideo.setAttribute('src', videoLink);
                        sourceVideo.setAttribute('type', "video/mp4");
                        mediaElement.appendChild(sourceVideo);
                }

                // Const div contenant le titre et les likes
                const div = document.createElement('div');
                div.setAttribute('class', 'bannerPhotographerDescriptionBox');
                div.setAttribute('role', 'navigation');
                // Constante photoTitle = création de l'élément 'h3' dans le DOM
                const photoTitle = document.createElement('h3');
                photoTitle.innerText = title;
                photoTitle.setAttribute('class', 'bannerPhotoTitle');
                photoTitle.setAttribute('aria-label', 'titre de la photo' + ' ' + title);



                const publishDate = document.createElement('input');
                publishDate.innerText = date;
                publishDate.setAttribute('type', 'hidden');
                publishDate.setAttribute('class', 'publishDate');


                const likeSystem = document.createElement('div');
                likeSystem.setAttribute('class', 'likeSystem');
                likeSystem.setAttribute('tabIndex', 0);

                const numberOfLike = document.createElement('p');
                numberOfLike.setAttribute('class', 'numberOfLike');
                numberOfLike.innerText = likes;
                numberOfLike.setAttribute('aria-label', likes + ' ' + 'personnes aiment cette photo')

                const divIconsLike = document.createElement('div');
                divIconsLike.setAttribute('class', 'iconsLike');


                const iconUnlike = document.createElement('span');
                iconUnlike.setAttribute('class', 'fa-regular fa-heart');
                iconUnlike.setAttribute('id', 'unlike');
                iconUnlike.setAttribute('role', 'checkbox');
                iconUnlike.setAttribute('aria-label', 'aimer la photo');
                const labelIconUnlike = document.createElement('label');
                labelIconUnlike.setAttribute('for', 'unlike');

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

        return { id, photographerId, title, image, video, likes, date, getUserBookDOM }
}