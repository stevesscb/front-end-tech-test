'use strict';

// Media modal
const expandMediaBtn1 = document.getElementById('expand-media-btn1');
const expandMediaBtn2 = document.getElementById('expand-media-btn2');
const mediaModal = document.getElementById('media-modal');

// Opens modal
expandMediaBtn1.addEventListener('click', () => {
  mediaModal.showModal();
});

expandMediaBtn2.addEventListener('click', () => {
  mediaModal.showModal();
});

// Navigation
const hamburgerBtn = document.getElementById('mobile-menu-button');
const mobileMenuIcon = document.getElementById('mobile-icon');
const navMenu = document.getElementById('main-nav');
const navItems = document.querySelectorAll('[data-nav-item]');
const navIcon = document.getElementsByClassName('nav-icon');

// Change hamburger icon and display main nav list
hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburgerBtn.classList.toggle('is-active');
  mobileMenuIcon.classList.toggle('fa-x');
});

// Opening/closing each main nav item
navItems.forEach((navItem, index) => {
  navItem.addEventListener('click', () => {
    // Toggles aria-expanded value
    let ariaExpanded = document
      .getElementById(navItem.id)
      .getAttribute('aria-expanded');

    if (ariaExpanded === 'true') {
      ariaExpanded = 'false';
    } else {
      ariaExpanded = 'true';
    }

    // Checks each nav-item for active class
    navItems.forEach((target, index) => {
      let targetId = document.getElementById(target.dataset.navItem);
      if (navItem !== target) {
        target.classList.remove('is-active');
        targetId.classList.remove('is-active');
      } else {
        target.classList.toggle('is-active');
        targetId.classList.toggle('is-active');
        navItem.setAttribute('aria-expanded', ariaExpanded);
      }
    });
  });
});

// Closes navigation on Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hamburgerBtn.classList.remove('is-active');
    navMenu.classList.remove('show');
    mobileMenuIcon.classList.remove('fa-x');
  }
});
