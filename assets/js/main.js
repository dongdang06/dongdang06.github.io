document.addEventListener('DOMContentLoaded', () => {
    // Navigation for tabs
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.view-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Toggle active status
            navLinks.forEach(n => n.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Keypress for accessibility
        link.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                link.click();
            }
        });
    });

    // Lightbox modal for gallery images
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeModalBtn = document.getElementById('closeModal');

    // Click to open image
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImg.src = item.src;
            lightboxImg.alt = item.alt;
            modal.classList.add('active');
        });

        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                lightboxImg.src = item.src;
                lightboxImg.alt = item.alt;
                modal.classList.add('active');
            }
        });
    });

    // Close button click
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Press Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});
