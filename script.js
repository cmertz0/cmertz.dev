let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scroll down -> hide navbar
        header.style.top = "-80px";  // Moves navbar out of view
    } else {
        // Scroll up -> show navbar
        header.style.top = "0";
    }

    lastScrollTop = currentScroll;
});

const canvas = document.getElementById('starry-background');
const ctx = canvas.getContext('2d');

// canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create stars
const stars = [];
const numStars = 150; // Number of stars

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2, // Star size
        speed: Math.random() * 0.5 + 0.1 // speed
    });
}

// stars
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move stars slightly up and down
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0; // Reset if not in view
    });

    requestAnimationFrame(drawStars);
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start animation
drawStars();

// Change icon color on hover
document.querySelectorAll('.skill-box').forEach(box => {
    const icon = box.querySelector('.skill-icon');
    const color = icon.getAttribute('data-color');

    box.addEventListener('mouseover', () => {
        icon.style.color = color;
    });

    box.addEventListener('mouseout', () => {
        icon.style.color = 'white';
    });
});

