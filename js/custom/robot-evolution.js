// Robot Evolution JavaScript

// Robot data containing detailed specifications and stories
const robotData = {
    basic: {
        title: "FOUNDATION ERA: Early Learning & Discovery",
        year: "2014-2016 (AGE 5-7)",
        content: `
            <div class="robot-specs">
                <div class="row">
                    <div class="col-md-5">
                        <img src="img/evolution/01-foundation-cad.png" class="img-fluid rounded" alt="Foundation Era">
                    </div>
                    <div class="col-md-7">
                        <h5><i class="fas fa-cogs"></i> The Beginning of a Journey</h5>
                        <p>Zain's passion for engineering began at a young age with hands-on robotics camps and early exposure to STEM concepts. This period was marked by curiosity and a foundational understanding of mechanics and programming.</p>
                        <h6>Key Activities:</h6>
                        <ul class="spec-list">
                            <li>Lavner Camp Robotics (Summer 2014, 2015)</li>
                            <li>Multiple engineering programs at Raritan Valley Community College</li>
                            <li>Science and Coding Tutor (Summer 2015)</li>
                            <li>Introduction to 3D printing and Scratch programming</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    arduino: {
        title: "PROGRAMMING GENESIS: Arduino & 3D Printing",
        year: "2017-2018 (AGE 8-9)",
        content: `
            <div class="robot-specs">
                <div class="row">
                    <div class="col-md-5">
                        <img src="img/evolution/02-genesis-assembly.png" class="img-fluid rounded" alt="Programming Genesis">
                    </div>
                    <div class="col-md-7">
                        <h5><i class="fas fa-microchip"></i> Hands-On Prototyping</h5>
                        <p>This era saw Zain dive deep into practical skills, teaching himself Arduino and mastering 3D printing. He began creating his own prototypes, including a robotic arm, and exploring advanced concepts like VR for pain management.</p>
                        <h6>Major Projects & Skills:</h6>
                        <ul class="spec-list">
                            <li><strong>Arduino Programming:</strong> Self-taught and applied in afterschool programs.</li>
                            <li><strong>Robotic Arm Prototype:</strong> Built during a STEAM afterschool program.</li>
                            <li><strong>VR for Pain Management:</strong> 3rd Grade Science Fair project.</li>
                            <li><strong>Game U Robotics Tutoring:</strong> Honing skills with private instruction.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    zainiac19: {
        title: "ZAINIAC 19: Global Recognition",
        year: "2019-2020 (AGE 10-11)",
        content: `
            <div class="robot-specs">
                <div class="row">
                    <div class="col-md-5">
                        <img src="img/evolution/03-zainiac19-robot.png" class="img-fluid rounded" alt="Zainiac 19">
                    </div>
                    <div class="col-md-7">
                        <h5><i class="fas fa-robot"></i> A Star is Born</h5>
                        <p>The completion of Zainiac 19 marked a major breakthrough. This advanced robot, built at age 10, took Zain to the world stage, presenting at five international Maker Faires and even appearing on national television in Belgium.</p>
                        <h6>International Appearances:</h6>
                        <div class="gallery">
                            <img src="img/evolution/03a-zainiac19-makerfaire.png" alt="Maker Faire">
                            <img src="img/evolution/03b-zainiac19-rochester.png" alt="Rochester">
                            <img src="img/evolution/03c-zainiac19-brussels.png" alt="Brussels">
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    zainiac21: {
        title: "ZAINIAC 21: Enhanced AI Systems",
        year: "2021-2022 (AGE 12-13)",
        content: `
            <div class="robot-specs">
                <div class="row">
                    <div class="col-md-5">
                        <img src="img/evolution/04-zainiac21-prototype.png" class="img-fluid rounded" alt="Zainiac 21 Prototype">
                    </div>
                    <div class="col-md-7">
                        <h5><i class="fas fa-brain"></i> A Leap into AI</h5>
                        <p>With Zainiac 21, the focus shifted to intelligence. Zain integrated more complex AI and decision-making capabilities, while also expanding his academic horizons with a summer course at Oxford University and publishing three technology articles.</p>
                        <h6>Key Achievements:</h6>
                        <ul class="spec-list">
                            <li><strong>Oxford Royale:</strong> Engineering & Technology course at Oxford University.</li>
                            <li><strong>Published Author:</strong> Three articles on VR, 3D printing, and COVID innovation.</li>
                            <li><strong>LBot Robot:</strong> Created for The Lawrenceville School interview.</li>
                            <li><strong>Advanced C++:</strong> Began formal C++ lessons to deepen programming skills.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    future: {
        title: "LEADERSHIP ERA: Innovator & Mentor",
        year: "2023-Present (AGE 14-17)",
        content: `
            <div class="robot-specs">
                <div class="row">
                    <div class="col-md-5">
                        <img src="img/zain-profile.jpg" class="img-fluid rounded" alt="Leadership">
                    </div>
                    <div class="col-md-7">
                        <h5><i class="fas fa-crown"></i> Leading the Next Generation</h5>
                        <p>In his high school years, Zain has taken on numerous leadership roles, including Co-President of the Robotics and Maker Clubs. His focus has expanded from personal projects to mentoring others, leading teams in competitions, and undertaking a summer internship at Princeton University.</p>
                        <h6>Current Roles & Focus:</h6>
                        <ul class="spec-list">
                            <li><strong>Princeton University:</strong> Laboratory Learning Program Intern.</li>
                            <li><strong>Co-President:</strong> Robotics Club, Maker Club, Muslim Student Association, Latin Club.</li>
                            <li><strong>Head of Design Team:</strong> Led team to 6th place in a 2025 robotics competition.</li>
                            <li><strong>Flight Simulator:</strong> A major summer project combining all his skills.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeScrollAnimations();
    initializeRobotStages();
    initializeSmoothScrolling();
});

// Particle effect for hero section
function initializeParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;

    // Create floating particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${['#00ffff', '#8b00ff', '#39ff14'][Math.floor(Math.random() * 3)]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        particlesContainer.appendChild(particle);
    }

    // Add CSS animation for particles
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(100vh) rotate(0deg); }
                100% { transform: translateY(-100vh) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .achievement-card, .tech-category, .robot-stage').forEach(el => {
        observer.observe(el);
    });
}

// Initialize robot stage interactions
function initializeRobotStages() {
    const robotStages = document.querySelectorAll('.timeline-item');
    
    robotStages.forEach(stage => {
        stage.addEventListener('click', function() {
            const robotType = this.getAttribute('data-robot');
            const robotInfo = robotData[robotType];
            
            if (robotInfo) {
                showRobotModal(robotInfo);
            }
        });

        // Add hover sound effect (optional)
        stage.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });

        stage.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Show robot details modal
function showRobotModal(robotInfo) {
    const modal = document.getElementById('robotModal');
    const modalTitle = document.getElementById('robotModalTitle');
    const modalBody = document.getElementById('robotModalBody');

    modalTitle.textContent = robotInfo.title;
    modalBody.innerHTML = robotInfo.content;

    // Show modal with animation
    $(modal).modal('show');

    // Add custom styling to modal content
    modalBody.style.cssText = `
        color: #ffffff;
        font-family: 'Exo 2', sans-serif;
    `;

    // Style tables and lists in modal
    modalBody.querySelectorAll('table').forEach(table => {
        table.classList.add('table-dark', 'table-striped');
    });

    modalBody.querySelectorAll('.badge').forEach(badge => {
        badge.style.margin = '2px';
        badge.style.fontSize = '0.8rem';
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Get navbar height to offset scroll position
                const navbar = document.getElementById('mainNav');
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                
                // Calculate target position accounting for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                // Instant scroll - no animation for zippy navigation
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'auto' // Changed from 'smooth' to 'auto' for instant navigation
                });
            }
        });
    });
}

// Throttle function to improve performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Navbar scroll effect - optimized with throttling
const navbarScrollEffect = throttle(function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 16); // ~60fps

window.addEventListener('scroll', navbarScrollEffect);

// Add typing effect to hero text
function addTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle && heroSubtitle) {
        const titleText = heroTitle.textContent;
        const subtitleText = heroSubtitle.textContent;
        
        heroTitle.textContent = '';
        heroSubtitle.textContent = '';
        
        let titleIndex = 0;
        let subtitleIndex = 0;
        
        const titleTimer = setInterval(() => {
            if (titleIndex < titleText.length) {
                heroTitle.textContent += titleText.charAt(titleIndex);
                titleIndex++;
            } else {
                clearInterval(titleTimer);
                
                const subtitleTimer = setInterval(() => {
                    if (subtitleIndex < subtitleText.length) {
                        heroSubtitle.textContent += subtitleText.charAt(subtitleIndex);
                        subtitleIndex++;
                    } else {
                        clearInterval(subtitleTimer);
                    }
                }, 50);
            }
        }, 100);
    }
}

// Initialize stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue + (stat.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '');
            }
        }, 50);
    });
}

// Initialize stats animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Add dynamic color shifting to robot icons
function addColorShifting() {
    const robotIcons = document.querySelectorAll('.robot-icon');
    
    robotIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #39ff14, #00ffff)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #00ffff, #8b00ff)';
        });
    });
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addColorShifting();
    }, 1000);
});

// Add glow effect to interactive elements
function addGlowEffects() {
    const interactiveElements = document.querySelectorAll('.btn-hero, .social-link, .tech-tag');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 10px currentColor)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });
}

// Initialize glow effects
document.addEventListener('DOMContentLoaded', addGlowEffects);

// Add styles for the modal gallery
function addModalStyles() {
    if (!document.querySelector('#modal-gallery-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-gallery-styles';
        style.textContent = `
            .robot-specs .gallery {
                display: flex;
                gap: 10px;
                margin-top: 15px;
            }
            .robot-specs .gallery img {
                width: 32%;
                height: auto;
                border-radius: 8px;
                border: 2px solid var(--cyber-blue);
                cursor: pointer;
                transition: transform 0.2s ease;
            }
            .robot-specs .gallery img:hover {
                transform: scale(1.05);
            }
            .robot-specs .spec-list {
                list-style: none;
                padding-left: 0;
            }
            .robot-specs .spec-list li {
                position: relative;
                padding-left: 20px;
                margin-bottom: 8px;
            }
            .robot-specs .spec-list li::before {
                content: '»';
                position: absolute;
                left: 0;
                color: var(--cyber-blue);
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }
}

document.addEventListener('DOMContentLoaded', addModalStyles); 