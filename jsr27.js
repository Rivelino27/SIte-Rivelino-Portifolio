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

function makeQuote() {

    Q = new Array();
    
    Q[0] = "<i>Assim como o sol derrete o gelo, a gentileza evapora mal-entendidos, desconfianças e hostilidade.</i>Albert Schweitzer"
    
    Q[1] = "<i>É impossível fazer qualquer coisa à prova de tolos, porque os tolos são muito engenhosos.</i>Arthur Bloch"
    
    Q[2] = "<i>Quem ama crê no impossível.</i> Elisabeth B. Browning"
    
    index = Math.floor(Math.random() * Q.length);
    
    /* document.write.innerHTML(Q[index])[0]; */
    const list = document.getElementById("q7");
    list.innerHTML = `<p>${Q[index]}</p>`;
    }
