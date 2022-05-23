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







typewriter = () => {
    let message = " I'm Justin";
    let currentTextPosition = 0;
    let speed = 80;
    let speed2 = 5000;
    let textTarget = document.querySelector("#message");
    let write = () => {
        textTarget.innerHTML = message.substring(0, currentTextPosition);

        if (currentTextPosition < message.length) {
            currentTextPosition++;
            setTimeout(write, speed);
        } else {
            currentTextPosition = 0;
            setTimeout(write, speed2);
        }

    }
    write()
}
window.addEventListener('load', typewriter)
