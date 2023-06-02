function moreLike(e) {

        const numberOfLike = document.getElementsByClassName('numberOfLike');
        const totalLikeElement = document.getElementById('totalLikes');
    
        const countHtml = e.currentTarget.firstChild;
        const iconHtml = e.currentTarget.lastChild.firstChild;
    
        if (iconHtml.classList.contains('fa-solid')) {
            iconHtml.classList.remove('fa-solid');
            iconHtml.classList.add('fa-regular');
            countHtml.innerText = parseInt(countHtml.innerText) - 1;
            totalLikeElement.innerText = parseInt(totalLikeElement.innerText) - 1;
        } else {
            countHtml.innerText = parseInt(countHtml.innerText) + 1;
            iconHtml.classList.add('fa-solid');
            iconHtml.classList.remove('fa-regular');
            totalLikeElement.innerText = parseInt(totalLikeElement.innerText) + 1;
        };
    };