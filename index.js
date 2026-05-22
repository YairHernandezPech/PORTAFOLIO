document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación Scroll Reveal (Aparición suave al bajar)
    const revealHandler = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 80; // Pixeles antes de activarse la animación

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Escuchar el evento scroll y carga inicial para las animaciones
    window.addEventListener('scroll', revealHandler);
    window.addEventListener('load', revealHandler);


    // 2. Actualizar enlace activo en la Navbar de forma automática al hacer scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Se le resta 200px para anticipar el cambio de sección visualmente
            if (scrollPosition >= (sectionTop - 200)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    });


    // 3. Manejo estético del Formulario de Contacto (Evita recarga de página)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! (Este es un demo interactivo, el formulario funciona de manera estética).');
            this.reset();
        });
    }
});