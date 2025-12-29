const backToTop = document.querySelector('.footpanel1');
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const panelAll = document.querySelector('.panel-all');
panelAll.addEventListener('click', () => {
    const options = document.querySelector('.panel-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', () => {
    const value = searchInput.value.trim();
    if(value !== '') alert(`You searched for: ${value}`);
    else alert('Please enter a search term!');
});

const boxes = document.querySelectorAll('.shop-sect .box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        box.style.transform = 'scale(1.02)';
        box.style.transition = 'all 0.3s';
    });
    box.addEventListener('mouseleave', () => {
        box.style.boxShadow = 'none';
        box.style.transform = 'scale(1)';
    });
});

const heroLink = document.querySelector('.hero-msg a');
heroLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('This would go to amazon.in in a real project!');
});

const cart = document.querySelector('.nav-cart');
cart.addEventListener('click', () => {
    alert('Cart is currently empty!');
});

document.addEventListener('click', (e) => {
    const options = document.querySelector('.panel-options');
    if(!panelAll.contains(e.target) && !options.contains(e.target)) {
        options.style.display = 'none';
    }
});
