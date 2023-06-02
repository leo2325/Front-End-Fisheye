const sorSystemBox = document.getElementById('sortListSystem');
const sortList = document.getElementById('sortList');


const { id, photographerId, title, image, video, likes } = data;

function sortSystem() {

    if( sortList.value === "Popularité" ){

        const numberOfLike = likes ;
        data.sort();
        console.log(likes);
    }

    else if( sortList.value === "Date" ){

    }

    else if( sortList.value === "Titre" ){

    }

    else {

    }
};

sortSystem();