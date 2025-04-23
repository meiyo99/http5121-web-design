// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Scroll Animation for Features Section
    const featureElements = document.querySelectorAll('.feature');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        // Handle feature animations
        featureElements.forEach((feature, index) => {
            if (isInViewport(feature)) {
                // Stagger the animations
                setTimeout(() => {
                    feature.classList.add('show');
                }, index * 200);
            }
        });
        
        // Handle gallery items animation
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item) => {
            if (isInViewport(item)) {
                item.classList.add('show');
            }
        });
    }
    
    // Initial check on page load
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    
    // Function to update active testimonial
    function updateCarousel() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active');
            dots[index].classList.remove('active');
        });
        
        testimonials[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Next button click handler
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    });
    
    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    });
    
    // Dot click handler
    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
        });
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    }, 5000);
});