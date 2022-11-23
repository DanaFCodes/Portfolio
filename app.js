const navSlide = () => {
    const burger = document.getElementsByClassName("burger")[0]
    const navLinks = document.getElementsByClassName("navLinks")[0]
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active')
        burger.classList.toggle('toggle');
    });        
}
navSlide();

// JUST NEED TO CHANGE INNERHTML!❄️❄️

const enough = () => {
    const button = document.getElementById('startStop');
    const curText = document.getElementById('buttonTxt')[0];
    const span1 = document.getElementsByClassName("span1")[0]
    const span2 = document.getElementsByClassName("span2")[0]

    button.addEventListener('click', () => {
        span1.classList.toggle('active');
        span2.classList.toggle('active');

        // if (span1.classList.toggle === 'active') {
        //     curText.innerHTML = 'glitch me';
        // } else {
        //     curText.innerHTML = `that's enough`
        // };

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

// back to top functionality
const backToTopButton = document.querySelector('#backToTopBtn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 200) {
        if (!backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnExit');
            backToTopButton.classList.add('btnEntrance');
            backToTopButton.style.display = 'block';
        }
    } else {
        if (backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnEntrance');
            backToTopButton.classList.add('btnExit');
            setTimeout(function () {
                backToTopButton.style.display = 'none';
            }, 250)
        }
    }
}

backToTopButton.addEventListener('click', backToTop);
function backToTop() {
    window.scrollTo(0, 0);
}
