const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.hamburgerNavigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburgerActive');
  navigation.classList.toggle('hamburgerNavigationActive');
}

hamburger.addEventListener('click', handleClick)