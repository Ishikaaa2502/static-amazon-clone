const backToTop = document.querySelector('.footpanel1');
backToTop.style.cursor = 'pointer';
backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const panelAll = document.querySelector('.panel-all');
panelAll.addEventListener('click', function() {
    const options = document.querySelector('.panel-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(e) {
    const options = document.querySelector('.panel-options');
    if(!panelAll.contains(e.target) && !options.contains(e.target)) {
        options.style.display = 'none';
    }
});

const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', function() {
    const value = searchInput.value.trim();
    if(value !== '') alert(`You searched for: ${value}`);
    else alert('Please enter a search term!');
});

const cart = document.querySelector('.nav-cart');
cart.addEventListener('click', function() {
    alert('Cart is currently empty!');
});

const heroLink = document.querySelector('.hero-msg a');
heroLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('This would go to amazon.in in a real project!');
});

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
