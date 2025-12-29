document.addEventListener('DOMContentLoaded', function() {
    // Back to Top
    const backToTop = document.querySelector('.footpanel1');
    backToTop.style.cursor = 'pointer';
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Prevent footer links from jumping
    const footerLinks = document.querySelectorAll('.footpanel4 a, .footpanel2 a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    // Panel toggle
    const panelAll = document.querySelector('.panel-all');
    panelAll.addEventListener('click', function() {
        const options = document.querySelector('.panel-options');
        if (options.style.display === 'block') {
            options.style.display = 'none';
        } else {
            options.style.display = 'block';
        }
    });

    document.addEventListener('click', function(e) {
        const options = document.querySelector('.panel-options');
        if (!panelAll.contains(e.target) && !options.contains(e.target)) {
            options.style.display = 'none';
        }
    });

    // Search bar alert
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', function() {
        const value = searchInput.value.trim();
        if (value !== '') alert(`You searched for: ${value}`);
        else alert('Please enter a search term!');
    });

    // Cart alert
    const cart = document.querySelector('.nav-cart');
    cart.addEventListener('click', function() {
        alert('Cart is currently empty!');
    });

    // Hero link alert
    const heroLink = document.querySelector('.hero-msg a');
    heroLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('This would go to amazon.in in a real project!');
    });

    // Product box hover effect
    const boxes = document.querySelectorAll('.shop-sect .box');
    boxes.forEach(function(box) {
        box.addEventListener('mouseenter', function() {
            box.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
            box.style.transform = 'scale(1.02)';
            box.style.transition = 'all 0.3s';
        });
        box.addEventListener('mouseleave', function() {
            box.style.boxShadow = 'none';
            box.style.transform = 'scale(1)';
        });
    });
});
