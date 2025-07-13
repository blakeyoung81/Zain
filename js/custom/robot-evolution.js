// Robot Evolution JavaScript

// Robot data containing detailed specifications and stories
const robotData = {
    foundation: {
        title: "FOUNDATION ERA: Early Learning & Discovery",
        year: "2014-2016 (AGE 5-7)",
        story: "At just 5 years old, I discovered my passion for engineering through hands-on robotics camps where I built my first simple robots using LEGO Mindstorms. I learned the basics of mechanical design using Tinkercad and got my first taste of 3D printing, which felt like pure magic. Those early summer camps at Lavner introduced me to the fundamentals of robotics and sparked a curiosity that would shape my entire future.",
        images: [
            { src: "img/evolution/01-foundation-cad.png", alt: "Foundation Era CAD Work" }
        ]
    },
    genesis: {
        title: "PROGRAMMING GENESIS: Arduino & Prototyping",
        year: "2017-2018 (AGE 8-9)",
        story: "This was the year I taught myself Arduino programming and became obsessed with bringing my ideas to life. I coded an Arduino to control servo motors for my first robotic arm prototype, and I 3D printed scale replicas of Star Wars vehicles including the Republic Attack Cruiser. Every weekend was spent experimenting with sensors, motors, and learning how to make different components work together.",
        images: [
            { src: "img/evolution/02-genesis-assembly.png", alt: "Programming Genesis Assembly" }
        ]
    },
    "science-fair": {
        title: "JHU & SCIENCE FAIR: Early Research Excellence",
        year: "2018 (AGE 9)",
        story: "My exploration of Toyology at Johns Hopkins University opened my eyes to the intersection of play and learning. For my 3rd grade science fair project, I developed a VR pain management system using Unity to create immersive environments that helped patients cope with medical procedures. This project won top honors and was the moment I realized engineering wasn't just about building cool things - it was about making the world a better place.",
        images: [
            { src: "img/evolution/science fair.png", alt: "Science Fair Presentation" }
        ]
    },
    zainiac19: {
        title: "ZAINIAC 19: Global Recognition",
        year: "2019-2020 (AGE 10-11)",
        story: "Zainiac 19 was my masterpiece - a fully autonomous robot with advanced AI capabilities, computer vision, and natural language processing. I programmed it to navigate complex environments, recognize objects and faces, and even engage in conversations with visitors. The robot featured custom 3D-printed components and took me to five international Maker Faires, including a keynote presentation in Brussels.",
        images: [
            { src: "img/evolution/03-zainiac19-robot.png", alt: "Zainiac 19 Robot" },
            { src: "img/evolution/03a-zainiac19-makerfaire.png", alt: "Maker Faire Demo" },
            { src: "img/evolution/03b-zainiac19-rochester.png", alt: "Rochester Presentation" },
            { src: "img/evolution/03c-zainiac19-brussels.png", alt: "Brussels Maker Faire" }
        ]
    },
    "world-tour": {
        title: "WORLD TOUR: International Impact",
        year: "2019-2020 (AGE 10)",
        story: "The Zainiac 19 World Tour took me and my robot to five international Maker Faires across three continents. I presented my work to tens of thousands of visitors, conducted live demonstrations, and inspired countless young makers. The highlight was being invited as the opening ceremony speaker in Brussels, where I became the youngest person ever to address the European maker community.",
        images: [
            { src: "img/evolution/world tour.png", alt: "World Tour Map" }
        ]
    },
    "covid-response": {
        title: "COVID-19 RESPONSE: Technology for Good",
        year: "2020 (AGE 11)",
        story: "When the COVID-19 pandemic hit, I immediately pivoted my 3D printing capabilities to help address the critical shortage of personal protective equipment. I designed and 3D printed hundreds of N95 mask frames and face shields, which I donated to a cancer center in New York. This project taught me how engineers can rapidly respond to global crises and use their skills to save lives.",
        images: []
    },
    zainiac21: {
        title: "ZAINIAC 21: Enhanced AI Systems",
        year: "2021-2022 (AGE 12-13)",
        story: "Zainiac 21 represented a quantum leap in artificial intelligence capabilities with advanced neural networks for real-time decision making. I implemented deep learning models I trained myself, and autonomous behaviors that emerged from machine learning rather than traditional programming. The robot could truly learn and adapt to its environment, which felt like witnessing artificial life.",
        images: [
            { src: "img/evolution/04-zainiac21-prototype.png", alt: "Zainiac 21 Prototype" }
        ]
    },
    oxford: {
        title: "OXFORD & PUBLICATIONS: Academic Excellence",
        year: "2021 (AGE 13)",
        story: "My summer at Oxford University studying Engineering & Technology was transformative, working alongside university researchers on advanced robotics projects. I explored cutting-edge AI applications and discovered the academic side of engineering research. This experience culminated in publishing three research articles on VR applications, 3D printing innovations, and my COVID-19 response work.",
        images: [
            { src: "img/evolution/Oxford.png", alt: "Oxford University Crest" }
        ]
    },
    "flight-simulator": {
        title: "FLIGHT SIMULATOR: High School Innovation",
        year: "2022 (AGE 14)",
        story: "My 3D printed flight simulator was the culmination of years of engineering experience applied to aerospace simulation. I designed and fabricated a fully functional cockpit with authentic controls, developed custom flight physics software, and integrated multiple monitor displays. The project combined mechanical engineering, software development, and user experience design into one comprehensive system.",
        images: [
            { src: "img/evolution/flight simulator.png", alt: "Flight Simulator Project" }
        ]
    },
    princeton: {
        title: "PRINCETON INTERNSHIP: Research Excellence",
        year: "2023 (AGE 15)",
        story: "My summer internship at Princeton University's Laboratory Learning Program immersed me in cutting-edge research alongside graduate students and faculty. I worked on advanced materials characterization, conducted independent experiments, and contributed to ongoing research projects. This experience taught me the rigorous methodologies of academic research and how theoretical knowledge translates into practical applications.",
        images: [
            { src: "img/evolution/Princeton_seal.svg", alt: "Princeton University Seal" }
        ]
    },
    leadership: {
        title: "LEADERSHIP ERA: Mentoring the Next Generation",
        year: "2023-Present (AGE 16-17)",
        story: "As Co-President of four different clubs at Princeton Day School, I've learned that leadership is about empowering others to achieve their potential. I've led our robotics team to competitive success, built inclusive communities through the Muslim Student Association, and promoted maker culture. My focus has shifted from personal achievement to collective impact and helping others discover their own passion for innovation.",
        images: []
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
    modalBody.innerHTML = generateModalContent(robotInfo);

    // Initialize carousel functionality
    let currentImageIndex = 0;
    const images = robotInfo.images;
    const carouselImage = modalBody.querySelector('#carouselImage');
    const prevBtn = modalBody.querySelector('#prevBtn');
    const nextBtn = modalBody.querySelector('#nextBtn');
    const dots = modalBody.querySelectorAll('.carousel-dot');

    function updateImage(index) {
        currentImageIndex = index;
        carouselImage.src = images[index].src;
        carouselImage.alt = images[index].alt;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
        updateImage(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
        updateImage(newIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => updateImage(index));
    });

    // Show modal with animation
    $(modal).modal('show');
}

// Generate modal content with image carousel
function generateModalContent(robotInfo) {
    return `
        <div class="modal-story">
            ${robotInfo.story}
        </div>
        <div class="image-carousel">
            <img src="${robotInfo.images[0].src}" alt="${robotInfo.images[0].alt}" class="carousel-image" id="carouselImage">
        </div>
        <div class="carousel-controls">
            <button class="carousel-btn" id="prevBtn"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-btn" id="nextBtn"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="carousel-indicators">
            ${robotInfo.images.map((img, index) => 
                `<div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
            ).join('')}
        </div>
    `;
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
                
                // Absolutely instant scroll - no scrollTo methods at all
                document.documentElement.scrollTop = targetPosition;
                document.body.scrollTop = targetPosition; // For Safari
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