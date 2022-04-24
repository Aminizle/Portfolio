const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

const faders = document.querySelectorAll('.services')
const sliders = document.querySelectorAll('.slide-in')


//Nav menu toggle 
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})




//Fade in 
const appearOptions = {
    threshold: 0, // set to 1 to set trigger to when element is shown in full does it fade in
    rootMargin: "0px 0px -250px 0px" //triggers when set px are shown
};

const appearOnScroll = new IntersectionObserver //Crossing from one section to the next triggers this
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {  //makes sure only those that are intersecting are triggered
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
        appearOptions);

faders.forEach(faders => {
    appearOnScroll.observe(faders);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})