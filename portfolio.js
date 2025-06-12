document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle-btn');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('.section');
  const heroSection = document.querySelector('.hero-section');
  const aboutSection = document.querySelector('#about');
  const aboutHeading = document.querySelector('.about-heading');
  const aboutContent = document.querySelector('.about-content');
  const aboutImage = document.querySelector('.about-image');
  const servicesHeading = document.querySelector('#services-heading');
  const serviceCards = document.querySelectorAll('.service-card');
  const projectsHeading = document.querySelector('#projects-heading');
  const projectCards = document.querySelectorAll('.project-card');

  if (!toggleBtn || !navLinks || !navbar || !sections.length || !heroSection || !aboutSection || !aboutHeading || !aboutContent || !aboutImage || !servicesHeading || !serviceCards.length || !projectsHeading || !projectCards.length) {
    console.error('Required elements not found!');
    return;
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target) && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const navbarObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('hero-section')) {
          navbar.classList.add('navbar-hidden');
        } else {
          navbar.classList.remove('navbar-hidden');
        }
      }
    });
  };

  const navbarObserver = new IntersectionObserver(navbarObserverCallback, observerOptions);
  sections.forEach(section => navbarObserver.observe(section));

  const aboutObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutHeading.style.animation = 'fadeIn 0.5s ease forwards';
        aboutContent.style.animation = 'fadeIn 0.5s ease 0.3s forwards';
        aboutImage.style.animation = 'fadeIn 0.5s ease 0.6s forwards';
        aboutObserver.unobserve(aboutSection);
      }
    });
  };

  const aboutObserver = new IntersectionObserver(aboutObserverCallback, observerOptions);
  aboutObserver.observe(aboutSection);

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
});