function menuToggle() {
    let menuArea = document.getElementById('menu-area');
    if (menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }
}

//primeira maneira de fazer com que o menu abra e feche lembrando que tem que usar a classe do css
    /* if (menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    } */
    //segunda maneira de resolver e a mais simples que eu achei a que esta acima, porem a primeira e a mais refinada