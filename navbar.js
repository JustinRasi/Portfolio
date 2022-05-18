document.addEventListener('scroll', calculateYposition)
window.addEventListener('load', calculateYposition)
const navigation = document.querySelector('.navigation')
const navbar = document.querySelector('.navbar')

function calculateYposition() {
    const yOffset = window.scrollY;
    if (yOffset > 50) {
        navigation.classList.add('isScrolled')
        navbar.classList.add('isScrolledContent')
    } else {
        navigation.classList.remove('isScrolled')
        navbar.classList.remove('isScrolledContent')
    }
}



function changeBackground () {
    const bodyElement = document.body;
    bodyElement.classList.toggle('light-mode')
}



let messageArray = [" I'm Justin"];
let textPosition = 0;
let speed = 150;

typewriter = () => {
    document.querySelector("#message").
        innerHTML = messageArray[0].substring(0, textPosition);

    if (textPosition++ !== messageArray[0].length) setTimeout(typewriter, speed);
}
window.addEventListener('load', typewriter)
