document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll('.video-trigger');
    const videoContainer = document.getElementById('videoContainer');
  
    triggers.forEach(img => {
      img.addEventListener('click', () => {
        videoContainer.classList.remove('hidden');
        const video = videoContainer.querySelector('video');
        video.pause(); 
        video.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  const accordions = document.querySelectorAll('.accordion-btn');

  accordions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.classList.toggle('active');
    });
  });
  