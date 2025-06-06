// Animate title on load (already animated by CSS, but reset if needed)
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.animated-title');
  title.style.opacity = 0;
  title.style.animation = 'none';
  setTimeout(() => {
    title.style.animation = '';
  }, 100);
});

// Contact form logic (simple demo, expand for real backend)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  // Simulate sending...
  const formMsg = document.getElementById('formMessage');
  formMsg.textContent = "Thank you! Daniel will get back to you soon.";
  formMsg.style.color = "#5C258D";
  this.reset();
});

// Gallery animation: fade-in on scroll
const galleryItems = document.querySelectorAll('.gallery-item');
const fadeInOnScroll = () => {
  galleryItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if(rect.top < window.innerHeight - 40) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }
  });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  galleryItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(60px)";
  });
  fadeInOnScroll();
});