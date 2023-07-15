// eslint-disable-next-line
class Lightbox {

    static init() {
        const linkss = document.querySelectorAll('.mediaElement');
        const links = Array.from(linkss);
        const images = links.map(link => {
            if (link instanceof HTMLImageElement) {
                return link.getAttribute('src')
            }
            return link.firstChild.getAttribute('src');
        });

        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault();
            new Lightbox(e.currentTarget.getAttribute('src'), images);
        }
        ));
    }

    /** 
     * @param {string} url lien vers l'image
     */
    constructor(url, images) {
        this.element = this.buildDOM(url);
        this.images = images;
        this.loadImage(url);
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(this.element);
        document.addEventListener('keyup', this.onKeyUp)
    }

    loadImage(url) {
        this.url = null;

        if (url.includes(".mp4")) {

            const mediaElement = document.createElement('video');
            mediaElement.setAttribute('class', 'mediaElement');
            mediaElement.setAttribute('alt', 'Video cliquée plein écran');
            mediaElement.setAttribute('controls', '');

            let sourceVideo = document.createElement('source');
            sourceVideo.setAttribute('src', url);
            sourceVideo.setAttribute('type', "video/mp4");
            mediaElement.appendChild(sourceVideo);
            const container = this.element.querySelector('.lightbox__container');
            const loader = document.createElement('div');
            loader.classList.add('lightbox__loader');
            container.innerHTML = '';
            container.appendChild(loader);
         
            mediaElement.onloadstart = () => {
                container.removeChild(loader);
                container.appendChild(mediaElement);
                this.url = url;
            }
        } else {
            const image = new Image();
            const container = this.element.querySelector('.lightbox__container');
            const loader = document.createElement('div');
            loader.classList.add('lightbox__loader');
            container.innerHTML = '';
            container.appendChild(loader);
         
            image.onload = () => {
                container.removeChild(loader);
                container.appendChild(image);
                this.url = url;
            }
            image.src = url
        }
    }
    
    // GESTION CLAVIER AFFICHAGE DES IMAGES.
    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.close(e);
        }
        else if (e.key === 'ArrowLeft') {
            this.prev(e);
        }
        else if (e.key === 'ArrowRight') {
            this.next(e);
        }
    }
    close(e) {
        e.preventDefault();
        this.element.classList.add('fadeOut');
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element);
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp);
    }
    next(e) {
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url);
        if (i === this.images.length - 1) {
            i = -1;
        }
        this.loadImage(this.images[i + 1]);
    }
    prev(e) {
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url);
        if (i === 0) {
            i = this.images.length;
        }
        this.loadImage(this.images[i - 1]);
    }


    /**
     * @param {string} url URL de l'image
     * @returns {HTMLElement}
     */ 
    buildDOM() {
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = 
        `
            <button class="lightbox__close" aria-label="close button" aria-description="Fermer la lightbox" >
                <i class="fa-solid fa-xmark" ></i>
            </button>      
            <button class="lightbox__next" aria-label="next button" aria-description="afficher la photo suivante">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button class="lightbox__prev" aria-label="previous button" aria-description="afficher la photo précédente">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="lightbox__container">
            </div>
            <h2 class="lightBoxPhotoTitle" aria-description="titre de la photo"></h2>
        `
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this));
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
        return dom;
    }
}