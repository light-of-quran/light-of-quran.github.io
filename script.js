document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(10, 14, 20, 0.95)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(10, 14, 20, 0.8)';
        }
    });

    // Mobile menu toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Basic mobile menu animation
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(10, 14, 20, 0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

    // Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .showcase-item, .about-content').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Add CSS class for observed elements
    const style = document.createElement('style');
    style.textContent = `
        .feature-card.fade-in, .showcase-item.fade-in, .about-content.fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .feature-card, .showcase-item, .about-content {
            transform: translateY(30px);
        }
    `;
    document.head.appendChild(style);
});
