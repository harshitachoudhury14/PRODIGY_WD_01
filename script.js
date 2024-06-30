document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = '#333';
            navbar.style.padding = '15px 0';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'yellow';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});
