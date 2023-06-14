class lightbox {

    static init () {
        const links = array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".png"], a[href$=".mp4"]'))
        const images = links.map( link => link.getAttribute('href'));
        debugger
        
        links.forEach( link => link.addEventListener('click' , e => 
                {
                    e.preventDefault();
                    new lightbox( e.currentTarget.getAttribute('href', images));
                }    
            ));
    };

    constructor(url, images){
        this.element = this.buildDOM(url);
        this.images = images;
        this.loadImage(url);
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(element);
        document.addEventListener('keyup', this.onKeyUp)
    };

    loadImage(url){
        this.url = null;
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
    };

    onKeyUp(e) {
        if(e.key === 'escape'){
            this.close(e);
        }
        else if(e.key === 'arrowLeft'){
            this.prev(e);
        }
        else if(e.key === 'arrowRight'){
            this.next(e);
        }
    };

    close(e){
        e.preventDefault();
        this.element.classList.add('fadeOut');
        window.setTimeout(() => {
            this.element.removeElement.parentChild(this.element);
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp);
    };

    next(e){
        e.preventDefault();
        let i = this.image.findIndex(image => i === this.url);
        if(i === this.images.length -1) {
            i = -1;
        }
        this.loadImage(images[i + 1]);
    };

    prev(e){
        e.preventDefault();
        let i = this.image.findIndex(image => i === this.url);
        if(i === 0) {
            i = this.image.length;
        }
        this.loadImage(images[i - 1]);
    };

    buildDOM(url) {
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = 
        `
            <button class="lightbox__close">
                <i class="fa-solid fa-xmark" ></i>
            </button>      
            <button class="lightbox__next">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button class="lightbox__prev">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="lightbox__container">
            </div>
        `
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this));
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
        return dom;
    }

}

 
/*
<div class="lightbox">
      
      <button class="lightbox__close">
        <i class="fa-solid fa-xmark" ></i>
      </button>      
      
      <button class="lightbox__next">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      
      <button class="lightbox__prev">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
        
      <div class="lightbox__container">
          <img src="https://picsum.photos/900/1800" alt="">
        </div>

    </div>
*/