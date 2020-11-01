function clear(divs) {
    divs.forEach(function(entry) {
        entry.style.display = 'none';
    });
}
const menuButtons = document.getElementsByClassName("menuButton");
const infoDiv = document.querySelector('.containerMainInfo');
const botDiv = document.querySelector('.containerBot');
const chatDiv = document.querySelector('.containerChat');
const contactDiv = document.querySelector('.containerContact');
const divs = [infoDiv, botDiv, chatDiv, contactDiv];
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("menuButtonActive");
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" menuButtonActive", "");
    }
    this.className += " menuButtonActive";
    switch(current[0].className) {
        case 'menuButton contest menuButtonActive':
        clear(divs);
        infoDiv.style.display = 'grid';
        break;
        case 'menuButton bot menuButtonActive':
        clear(divs);
        botDiv.style.display = 'grid';
        break;
        case 'menuButton chat menuButtonActive':
        clear(divs);
        chatDiv.style.display = 'grid';
        break;
        case 'menuButton contact menuButtonActive':
        clear(divs);
        contactDiv.style.display = 'grid';
        break;
        default:
        console.log('error');
    }
    });
}
