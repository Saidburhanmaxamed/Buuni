// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        mobileMenu.classList.remove('active');
    });
});
// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to static book elements
    addBookInteractions();
    
    // Search Functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterBooks(searchTerm);
    });
});

// Rest of the JavaScript remains the same
function addBookInteractions() { /* ... */ }
function handleBorrowBook(bookId) { /* ... */ }
function showBookDetails(bookId) { /* ... */ }
function filterBooks(searchTerm) { /* ... */ }
  

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond shortly.');
    e.target.reset();
});
{function goBack() {
    window.history.back();
}}

// Search Functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Implement search logic here
});