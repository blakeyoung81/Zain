// Custom JavaScript for Zain Hamdia's Portfolio

$(document).ready(function() {
    
    // Smooth scrolling for navigation links
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Fade in animation for elements when they come into view
    function fadeInOnScroll() {
        $('.timeline li, .skill-card, .travel-item').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in');
            }
        });
    }
    
    // Add staggered animation delays
    $('.timeline li').each(function(index) {
        $(this).css('animation-delay', (index * 0.2) + 's');
    });
    
    $('.skill-card').each(function(index) {
        $(this).css('animation-delay', (index * 0.3) + 's');
    });
    
    $('.travel-item').each(function(index) {
        $(this).css('animation-delay', (index * 0.1) + 's');
    });

    // Initialize fade in on page load
    fadeInOnScroll();
    
    // Run fade in on scroll
    $(window).scroll(fadeInOnScroll);
    
    // Add typing effect to the intro text
    function typeWriter(element, text, speed) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Initialize typing effect after a delay
    setTimeout(function() {
        const introText = document.querySelector('.intro-lead-in');
        if (introText) {
            const originalText = introText.textContent;
            typeWriter(introText, originalText, 50);
        }
    }, 1500);
    
    // Add hover effects to timeline items
    $('.timeline li').hover(
        function() {
            $(this).find('.timeline-panel').addClass('timeline-hover');
        },
        function() {
            $(this).find('.timeline-panel').removeClass('timeline-hover');
        }
    );
    
    // Add particle background effect to header
    function createParticles() {
        const header = document.querySelector('header.masthead');
        if (!header) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(254, 209, 54, 0.6);
                border-radius: 50%;
                pointer-events: none;
                animation: float 6s ease-in-out infinite;
                animation-delay: ${Math.random() * 6}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            header.appendChild(particle);
        }
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        .timeline-hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize particles
    createParticles();
    
    // Add counter animation for achievements
    function animateCounters() {
        $('.achievement-badge').each(function() {
            const $this = $(this);
            const countTo = $this.data('count') || 1;
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    // Optional: Add number counting if needed
                }
            });
        });
    }
    
    // Initialize counter animation when skills section comes into view
    let countersAnimated = false;
    $(window).scroll(function() {
        const skillsSection = $('#skills');
        if (skillsSection.length) {
            const skillsTop = skillsSection.offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (scrollTop + windowHeight > skillsTop + 100 && !countersAnimated) {
                animateCounters();
                countersAnimated = true;
            }
        }
    });
    
    // Add loading screen
    $('body').prepend(`
        <div id="loading-screen" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        ">
            <div style="text-align: center; color: white;">
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(254, 209, 54, 0.3);
                    border-top: 3px solid #fed136;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                "></div>
                <h3 style="color: #fed136; font-weight: 300;">Loading Zain's Portfolio</h3>
            </div>
        </div>
    `);
    
    // Add spinner animation
    const spinnerStyle = document.createElement('style');
    spinnerStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinnerStyle);
    
    // Remove loading screen after everything loads
    $(window).on('load', function() {
        setTimeout(function() {
            $('#loading-screen').fadeOut(500, function() {
                $(this).remove();
            });
        }, 1000);
    });
}); 