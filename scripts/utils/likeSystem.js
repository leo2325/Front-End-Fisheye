
function moreLike() { 
    
    const iconLike = document.getElementById('like');
    const iconUnlike = document.getElementsByClassName('unlike');
    const numberOfLike = document.getElementsByClassName('numberOfLike').value;
    const totalLikeElement = document.getElementById('totalLikes');

    if( iconLike.style.display == flex) {

        iconLike.style.display = 'none';
        iconUnlike.style.display = 'block';
    
        numberOfLike = undefined ;
        for (let i = 0; i < numberOfLike; i++) {
            console.log("Photo liké");
        }

        totalLikeElement = undefined ;
        for (let i = 0; i < numberOfLike; i++) {
            console.log("Photo liké");
        }
    }

    else {

        iconLike.style.display = 'block';
        iconUnlike.style.display = 'none'; 
    
        numberOfLike = undefined ;
            for (let i = 0; i < numberOfLike; i--) {
            console.log("Photo unliké");
            }

        totalLikeElement = undefined ;

    }
};
const carousselBtn = document.querySelector(".likeSystem");
carousselBtn.addEventListener("click", moreLike);