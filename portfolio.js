
const aboutSection = document.querySelector('#about');
const aboutHeading = document.querySelector('.about-heading');
const aboutContent = document.querySelector('.about-content');
const aboutImage = document.querySelector('.about-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutHeading.style.animation = 'fadeIn 0.5s ease forwards';
      aboutContent.style.animation = 'fadeIn 0.5s ease 0.3s forwards';
      aboutImage.style.animation = 'fadeIn 0.5s ease 0.6s forwards';
      observer.unobserve(aboutSection);
    }
  });
}, { threshold: 0.5 });

observer.observe(aboutSection); 


const heroSection = document.querySelector('#hero');
const navbar = document.querySelector('.navbar');

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbar.classList.add('navbar-hidden');
    } else {
      navbar.classList.remove('navbar-hidden');
    }
  });
}, { threshold: 0.5 });

heroObserver.observe(heroSection);


const servicesHeading = document.querySelector('#services-heading');
const serviceCards = document.querySelectorAll('.service-card');
let isServicesCardsVisible = false;

servicesHeading.addEventListener('mouseenter', () => {
  if (!isServicesCardsVisible) {
    serviceCards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    });
    isServicesCardsVisible = true;
  }
});


const projectsHeading = document.querySelector('#projects-heading');
const projectCards = document.querySelectorAll('.project-card');
let isProjectsCardsVisible = false;

projectsHeading.addEventListener('mouseenter', () => {
  if (!isProjectsCardsVisible) {
    projectCards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    });
    isProjectsCardsVisible = true;
  }
});
