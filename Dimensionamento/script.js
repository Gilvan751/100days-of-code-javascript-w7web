function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
function decidrBotaoScroll() {
    if (window.scrollY === 0) {
        //ocultar o botão
        document.querySelector(".scrollbutton").style.display = "none";
    } else {
        //mostrar o botão
        document.querySelector(".scrollbutton").style.display = "block";
    }
}
window.addEventListener("scroll", decidrBotaoScroll);
/* Essa não e a melhor alternativa para resolver o problema pois sempre
vai estar verificando o que pode ocasionar demora no site vamos para a outra solucção
mais efetiva
setInterval(decidrBotaoScroll, 1000); */