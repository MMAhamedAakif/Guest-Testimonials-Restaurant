const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const fadeInSections = document.querySelectorAll('.fade-in-section');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

fadeInSections.forEach(section => {
    sectionObserver.observe(section);
});



const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} shortly.`);

    contactForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate section titles and underlines on scroll
const sectionTitles = document.querySelectorAll('.section-title');
const titleUnderlines = document.querySelectorAll('.title-underline');
const heroTitle = document.querySelector('.hero-title');

const titleObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Also animate the underline that follows this title
            const underline = entry.target.nextElementSibling;
            if (underline && underline.classList.contains('title-underline')) {
                underline.classList.add('visible');
            }
        }
    });
}, titleObserverOptions);

// Observe all section titles
sectionTitles.forEach(title => {
    titleObserver.observe(title);
});

// Hero title animates on page load
if (heroTitle) {
    setTimeout(() => {
        heroTitle.classList.add('visible');
    }, 300);
}



const signInBtn = document.getElementById("signInBtn");
const signinContainer = document.getElementById("signin-container");
const loginContainer = document.getElementById("login-container");

signInBtn.addEventListener("click", () => {
    signinContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});
