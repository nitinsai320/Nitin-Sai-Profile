// Smooth Scrolling
document.querySelectorAll('a[href^="index.html"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Skill Bars
// scripts.js
// scripts.js
document.querySelectorAll('.circle').forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
});



// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully!');
    this.reset();
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\.,;:\s@"]+\.[^<>()\[\]\.,;:\s@"]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.circle');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percentage = entry.target.getAttribute('data-percentage');
                entry.target.querySelector('.circle-content').textContent = `${percentage}%`;
                observer.unobserve(entry.target);
            }
        });
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-icon');

    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior (opening link in current tab)
            
            const url = this.getAttribute('href');
            window.open(url, '_blank'); // Open link in new tab
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-icon');

    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior (opening link in current tab)
            
            const url = this.getAttribute('href');
            window.open(url, '_blank'); // Open link in new tab
        });
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for fixed header height
                behavior: 'smooth'
            });
            
            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove('active'));
            
            // Add 'active' class to clicked link
            this.classList.add('active');
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 70; // Adjust for fixed header height
        links.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
