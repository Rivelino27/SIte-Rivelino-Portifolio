let slides = document.querySelectorAll('.slide-container');
let index = 0;
let time = 5000;
let time2 = 30000;
let interval;
/* let int9 = () => {
setInterval(next, time);
clearInterval()
setInterval(next, time);
} */
/* const i9 = setInterval(() => {
    next()
    clearInterval(this.i9())
}, 5000);
i9() */
function next(){
/*     clearInterval(t9) */
window.clearInterval(interval)
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    interval = setInterval(this.next,7000)
}

function prev(){
    window.clearInterval(interval)
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');  
    interval = setInterval(this.next,7000)
}
next();
/* interval = setInterval(next,7000) */
// setInterval(next, time);
function slider10() {
clearInterval()
}

function makeQuote() {
    clearInterval(this.time2)
    const Q = [];//new Array();
    
    Q[0] = "Assim como o sol derrete o gelo, a gentileza evapora mal-entendidos, desconfianças e hostilidade. Albert Schweitzer"
    Q[1] = "A vida é sobre fazer algumas coisas acontecerem e não esperar que algo aconteça."
    Q[2] = "Pare de se preocupar com o que pode dar errado e fique animado com o que pode dar certo."
    Q[3] = "O vencedor não é o mais talentoso, é aquele que se recusa a perder. - Dale Earnhardt"
    Q[4] = "No começo odiei cada minuto de treinamento, mas eu disse a mim mesmo: \" Não desista. Sofra agora e viva o restante da sua vida como um campeão. - Muhammad Ali\" "
    Q[5] = "O futuro é tão brilhante quanto a sua FÉ..."
    Q[6] = "Aqueles que se tornam bem-sucedidos tendem a ouvir mais do que falar."
    Q[7] = "A paciência não é a capacidade de esperar, mas a capacidade de manter uma boa atitude e animo enquanto se espera."
    Q[8] = "A diferença entre quem você É e quem você QUER SER é o trabalho que você esta fazendo a respeito disso."
    Q[9] = "Se você focar só nos resultados, nunca mudará a situação. Se você se concentrar nas mudanças, você obterá resultados diferentes."
    Q[10] = "Coisas lindas acontecem quando você se distancia da negatividade..."
    Q[11] = "Não declares que as estrelas estão mortas só porque o céu está nublado."
    Q[12] = "A chave para o sucesso é continuar crescendo em todas as áreas da vida - mental, emocional, espiritual e também física. - Júlio Erving"
    Q[13] = "Lembre-se, a felicidade não depende de quem você é ou do que você tem, depende apenas do que você sente, acredita e pensa."
    Q[14] = "A adversidade faz com que alguns homens quebrem e faz com que outros quebrem recordes. -William Arthur Ward"
    Q[15] = "Nunca deixe as coisas que você quer fazer você esquecer as coisas que você tem. #gratidão"
    Q[16] = "Hoje farei o que os outros não farão, para amanhã poder realizar o que os outros não podem. -Jerry Rice"
    Q[17] = "Sua idade não define sua maturidade ou vitalidade; suas notas não definem seu intelecto e opiniões alheias não definem quem você é."
    Q[18] = "Em uma situação complicada eleve suas palavras, não sua voz. É a chuva que faz crescer as folhas, não os trovões."
    Q[19] = "Muitas vezes acreditamos que a vida nos diz \"não\" quando na verdade ela apenas nos diz \"espere\"."
    Q[20] = "O sucesso é a soma de pequenos esforços, repetidos dia após dia. -Robert Collier See More"
    Q[21] = "A preocupação aumenta a pressão; a oração libera a paz em nós mesmos."
    Q[22] = "Aceite os desafios para sentir o bom conbate e a alegria da vitória. -Desconhecido"
    Q[23] = "Não é sobre o quão grande você é, é sobre o que de grandioso você esta disposto a fazer..."
    Q[24] = "Amadurecemos com as observações e danos; não com os anos."
    Q[25] = "Às vezes você tem que cair antes de voar."
    Q[26] = "Às vezes você tem que cair antes de voar."
    Q[27] = "Seja focado e viciado em melhorar a si mesmo..."
    Q[28] = "Seja focado e viciado em melhorar a si mesmo..."
    Q[29] = "Fortes razões, fazem fortes ações."
    Q[30] = "Quantas vezes coisas boas aconteceram na sua vida em decorrência de algo que deu errado?"
    Q[31] = "O que é a alma? Bem, é como a eletricidade ainda não sabemos cientificamente exatamente o que é, mas ambas podem iluminar ambientes."
    Q[32] = "O que importa não são os acontecimentos e sim as nossas emoções que atribuimos a eles. Jonathan Garcia-Allen"
    Q[33] = "As coisas que amamos dizem quem somos"
    Q[34] = "Na vida algumas vezes se ganha e se celebra; e nas outras aprendemos"
    /* Q[19] = ""
    Q[20] = ""
    Q[21] = "" */
 
    
    index2 = Math.floor(Math.random() * Q.length);
    
    /* document.write.innerHTML(Q[index])[0]; */
    const list = document.getElementById("q7");
    list.innerHTML = `<p>${Q[index2]}</p>`;
    }
makeQuote()

tmp = setInterval(makeQuote,time2)
