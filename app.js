// hamburger nav 
const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navLinks = document.getElementsByClassName("navLinks")[0]
const burger = document.querySelector('.burger');
    
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    burger.classList.toggle('toggleButton');
})


