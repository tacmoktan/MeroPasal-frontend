let slides = document.querySelectorAll('.slides');
let currentPos = 0;
let pos = 0;
let dots = document.querySelectorAll('.dots');
let gallerySlides = document.getElementById("gallery-slides");

function directLeft_click() {
    pos = pos === 0 ? slides.length - 1 : pos - 1;
    dot_click(pos);
}

function directRight_click() {
    pos = pos === slides.length - 1 ? 0 : pos + 1;
    dot_click(pos);
}

function dot_click(slideIndex) {

    //setting up dots 
    dots.forEach(dot => dot.setAttribute("class", "dots"));
    dots[slideIndex].setAttribute("class", "dots active");

    if (slideIndex === 0) {
        if (currentPos === 3)   // pos of the end of slide
            gallerySlides.style.animation = `slideR0 2s ease 0s 1 normal forwards`;
        if (currentPos === 1)   // pos of slide ahead of starting slide
            gallerySlides.style.animation = `slide1 2s ease 0s 1 normal forwards`;
    }else{
        if (currentPos < slideIndex) {  //slide left    
            if(currentPos === 0 && slideIndex===3)
                gallerySlides.style.animation = `slideL${currentPos} 2s ease 0s 1 normal forwards`;
            else
                gallerySlides.style.animation = `slideL${slideIndex} 2s ease 0s 1 normal forwards`;
        }
        if (currentPos > slideIndex) {      //slide right
            gallerySlides.style.animation = `slideR${slideIndex} 2s ease 0s 1 normal forwards`;
        }
    } 

    /* console.log("currentPos:", currentPos);
    console.log("slideIndex:", slideIndex); */
    currentPos = slideIndex;
}

setInterval(directRight_click,5000);