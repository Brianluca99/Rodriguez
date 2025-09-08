document.addEventListener('DOMContentLoaded', function() {
    
    // Efeito de Rolagem Suave para links internos
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute('href'); // Pega o href (#servicos, etc)
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calcula a posição da seção e rola suavemente até ela
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // -80 para compensar a altura do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Opcional: Efeito de 'fade-in' para as seções ao rolar a página
    const sections = document.querySelectorAll('section');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

});