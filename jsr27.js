let slides = document.querySelectorAll('.slide-container');
let index = 0;
let time = 12000;
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    
    
}

setInterval(next, time);
