
// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('languageToggle');
  const enTexts = document.querySelectorAll('.en-text');
  const taTexts = document.querySelectorAll('.ta-text');
  
  // Function to toggle language
  function toggleLanguage() {
    // Toggle English <-> Tamil
    enTexts.forEach(el => el.classList.toggle('d-none'));
    taTexts.forEach(el => el.classList.toggle('d-none'));
    
    // Update active language in local storage
    const currentLang = localStorage.getItem('language') === 'ta' ? 'en' : 'ta';
    localStorage.setItem('language', currentLang);
  }
  
  // Add click event to language toggle button
  languageToggle.addEventListener('click', toggleLanguage);
  
  // Initialize language from localStorage (if any)
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage === 'ta') {
    // If saved language is Tamil, toggle from default English
    toggleLanguage();
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          document.querySelector('.navbar-toggler').click();
        }
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Activate Bootstrap scrollspy
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    offset: 100
  });
  
  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('shadow-sm', 'bg-white');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('shadow-sm');
    }
  });
});
