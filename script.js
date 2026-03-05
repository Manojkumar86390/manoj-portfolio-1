function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.padding = '20px 8%';
    }
});

// The Observer handles all three different types of animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Check which animation class to apply based on the hidden class
            if (entry.target.classList.contains('hidden-left')) {
                entry.target.classList.add('show-left');
            } else if (entry.target.classList.contains('hidden-scale')) {
                entry.target.classList.add('show-scale');
            } else {
                entry.target.classList.add('show');
            }
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Observe all elements with any of the hidden classes
const hiddenElements = document.querySelectorAll('.hidden, .hidden-left, .hidden-scale');
hiddenElements.forEach((el) => observer.observe(el));
