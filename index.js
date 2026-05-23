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

    // Inicializar EmailJS
    emailjs.init("Drjy5DAgXaBgyIDfZ");
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            emailjs.sendForm(
                "service_o9kibbh",
                "template_asxuq51",
                this
            )
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensaje enviado ',
                        text: 'Gracias por contactarme. Te responderé pronto.',
                        confirmButtonText: 'Perfecto',
                        background: '#161b22',
                        color: '#fff'
                    });
                    this.reset();
                })
                .catch((error) => {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Ups...',
                        text: 'Ocurrió un error al enviar el mensaje.',
                        confirmButtonText: 'Intentar de nuevo',
                        background: '#161b22',
                        color: '#fff'
                    });
                });
        });
    }
});