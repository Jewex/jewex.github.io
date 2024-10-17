document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    document.getElementById('loader').style.display = 'none';

    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });

    // Theme toggle based on time
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.classList.add('dark-mode');
    }

    // Toggle theme manually
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }

    // Toggle the overlay menu
    function toggleMenu() {
        const menu = document.getElementById('overlay-menu');
        if (menu.style.left === '0px') {
            menu.style.left = '-100%';
        } else {
            menu.style.left = '0px';
        }
    }

    // Scroll events
    window.addEventListener('scroll', () => {
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Scroll to top
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Toggle details visibility
    function toggleDetails(id) {
        const details = document.getElementById(`${id}-details`);
        details.classList.toggle('visible');
    }

    // Make functions global
    window.toggleTheme = toggleTheme;
    window.toggleMenu = toggleMenu;
    window.scrollToTop = scrollToTop;
    window.toggleDetails = toggleDetails;
});
