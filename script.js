window.addEventListener('scroll', function () {
    const services = document.getElementById('services');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');

    const scrollPosition = window.scrollY + window.innerHeight;

    if (services.offsetTop < scrollPosition) {
        services.classList.add('visible');
    }

    if (about.offsetTop < scrollPosition) {
        about.classList.add('visible');
    }

    if (contact.offsetTop < scrollPosition) {
        contact.classList.add('visible');
    }
});
