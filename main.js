document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    
    const navLinks = document.querySelectorAll('nav ul a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
    
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
        
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, 
                    behavior: 'smooth'
                });
            }
        });
    });
});