// Efecto de cambio en la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#0f172a'; // Color más oscuro al bajar
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = '#1a2a6c';
        nav.style.boxShadow = 'none';
    }
});

// Función para scroll suave (opcional si ya usas CSS scroll-behavior)
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Animación simple de aparición para las tarjetas al entrar en vista
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .grid-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});