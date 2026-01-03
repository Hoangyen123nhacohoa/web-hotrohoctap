// ============================================
// Premium Portfolio Website - JavaScript
// ============================================

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================
    // Video Background Handling
    // ============================================
    function initVideoBackground() {
        const video = document.getElementById('hero-video');
        
        if (!video) return;

        // Hide video if user prefers reduced motion
        if (prefersReducedMotion) {
            video.style.display = 'none';
            return;
        }

        // Ensure video is muted and plays
        video.muted = true;
        
        // Handle video loading
        video.addEventListener('loadeddata', function() {
            video.play().catch(function(error) {
                console.log('Video autoplay prevented:', error);
            });
        });

        // Fallback: try to play on user interaction
        document.addEventListener('click', function playVideoOnce() {
            if (video.paused) {
                video.play().catch(function(error) {
                    console.log('Video play failed:', error);
                });
            }
            document.removeEventListener('click', playVideoOnce);
        }, { once: true });

        // Handle video errors
        video.addEventListener('error', function() {
            console.log('Video failed to load, using fallback');
            const container = video.closest('.video-container');
            if (container) {
                container.style.backgroundImage = 'url(hero-fallback.jpg)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundPosition = 'center';
            }
        });
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    function initSmoothScroll() {
        if (prefersReducedMotion) return;

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // Scroll Animations
    // ============================================
    function initScrollAnimations() {
        if (prefersReducedMotion) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.proof-card, .case-study-card, .timeline-item, .skills-category'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ============================================
    // Contact Form Handling
    // ============================================
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            console.log('Form submitted:', data);
            
            // Show success message (you can replace this with actual form submission)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            form.reset();
            
            // In production, you would:
            // 1. Send data to your backend/API
            // 2. Show a proper success/error message
            // 3. Handle errors gracefully
        });
    }

    // ============================================
    // Scroll Indicator Visibility
    // ============================================
    function initScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;

        function handleScroll() {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition > windowHeight * 0.3) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
    }

    // ============================================
    // Performance: Lazy Load Images
    // ============================================
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        } else {
            // Fallback for browsers that don't support native lazy loading
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img.lazy').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // ============================================
    // Initialize Everything
    // ============================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initVideoBackground();
                initSmoothScroll();
                initScrollAnimations();
                initContactForm();
                initScrollIndicator();
                initLazyLoading();
            });
        } else {
            // DOM is already ready
            initVideoBackground();
            initSmoothScroll();
            initScrollAnimations();
            initContactForm();
            initScrollIndicator();
            initLazyLoading();
        }
    }

    // Start initialization
    init();

    // ============================================
    // Utility: Debounce function
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Export for potential use
    window.portfolioUtils = {
        debounce: debounce
    };

})();

