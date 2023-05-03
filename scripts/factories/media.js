function mediaFactory(data) {
    const { id, photographerId, title, image, likes } = data;

    // tester les noms et comparer aux dossiers images ? 
    // tester les 4 premières lettres ? 
    //  
    const picture = ("`assets/" + +"/${image}`");


    // Fonction qui génère les fiches de présentation des photographes
    function getUserBookDOM() {

        // Création de la constante article (Articles qui contiennent les fiches de présentation des photographes).
        const article = document.createElement('article');
            
            function testMediaType(){
                let regexMediaType = /\.mp4|\.video/;
                if( regexMediaType.test( picture.value ) == false) {
                    // constante image = création de l'élément 'img' dans le DOM 
                    const mediaElement = document.createElement( 'img' );
                    mediaElement.src = picture;
                }
                else{
                    // constante video = création de l'élément 'video' dans le DOM 
                    const mediaElement = document.createElement( 'video' );
                    mediaElement.setAttribute( 'src', picture );
                };
                
            };
            
            testMediaType();

        // Const div contenant le titre et les likes
        const div = document.createElement( 'div' );
            // Constante photoTitle = création de l'élément 'h2' dans le DOM
            const photoTitle = document.createElement( 'h2' );
            photoTitle.innerText = title;
            
            const likeSystem = document.createElement( 'div' );
    
        // Création des éléments enfants de l'article, placé à la suite les uns des
        article.appendChild(mediaElement);
        article.appendChild(div);
        div.appendChild(photoTitle);
        div.appendChild(likeSystem);
        return (article);  
    }
    return { id, photographerId, title, image, likes, getUserBookDOM }
};




// Récupérer l'id du photographe contenu dans l'URL OK
// Récupérer l'id du média OK
// --> Comparer les deux ID
// Si les id sont identiques -> afficher le média
// Sinon ne pas le prendre en compte.

// On récupère l'id du photographe contenu dans l'URL
let params = (new URL(document.location)).searchParams;
let photographID = parseInt(params.get('id'));
console.log(photographID);


//Fonction asynchrone de récupération des données
async function getPictures(ID) {
    // Récupération des données depuis le fichier JSON
        const reponse = await fetch('./data/photographers.json');
        const mediaFiches = await reponse.json();

            // et bien retourner le tableau medias seulement une fois récupéré
            return mediaFiches.media.filter(media => media.photographerId === ID);
     
}

function displayData(media) {
    const mediaSection = document.querySelector(".photograph_book");

    media.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const userBookDOM = mediaModel.getUserBookDOM();
        mediaSection.appendChild(userBookDOM);
    });
};

async function init(photographID) {
    // Récupère les datas des photographes
    const medias = await getPictures(photographID);
    displayData( medias );
};

init(photographID);