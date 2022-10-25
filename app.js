const navSlide = () => {
    const burger = document.getElementsByClassName("burger")[0]
    const navLinks = document.getElementsByClassName("navLinks")[0]
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active')
        burger.classList.toggle('toggle');
    });
        
}

navSlide();

const enough = () => {
    const button = document.getElementById('startStop');
    const animate = document.getElementById('glitchBtn');
    const animateBtm = document.getElementById('glitchBtn2');

    button.addEventListener('click', () => {
        animate.style = 'animation: none';
        animateBtm.style = 'animation: none';

        // ugh toggle button functionality and change innerHTML on toggle 
    //     if (animate.style = 'animation: none' && animateBtm.style = 'animation: none';) {
    //         button.innerHTML = 'bring the glitch back'
    // } 
        
    });
}

enough();


const darkLight = () => {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('light');
    });
}

darkLight();

