/**
 * IRONPULSE GYM - Premium Gym Website
 * GSAP Animations & Interactive Features
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ========================================
// DOM ELEMENTS
// ========================================
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const backToTop = document.getElementById('backToTop');
const globalX = document.getElementById('globalX');
const contactForm = document.getElementById('contactForm');

// ========================================
// LOADING SCREEN
// ========================================
window.addEventListener('load', () => {
    // Animate loading screen out
    gsap.to(loadingScreen, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.6,
        delay: 0.8,
        ease: 'power2.out',
        onComplete: () => {
            loadingScreen.classList.add('hidden');
            initHeroAnimation();
        }
    });
});

// ========================================
// HERO ENTRANCE ANIMATION
// ========================================
function initHeroAnimation() {
    const heroTl = gsap.timeline();
    
    // Global X animation
    heroTl.fromTo(globalX, 
        { opacity: 0, scale: 0.92, rotation: -20 },
        { opacity: 0.18, scale: 1, rotation: -12, duration: 1, ease: 'power2.out' },
        0
    );
    
    // Hero label
    heroTl.fromTo('.hero-label',
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        0.2
    );
    
    // Hero headline words
    heroTl.fromTo('.hero-headline .word',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power2.out' },
        0.3
    );
    
    // Hero subheadline
    heroTl.fromTo('.hero-subheadline',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        0.5
    );
    
    // Hero CTA
    heroTl.fromTo('.hero-cta',
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
        0.6
    );
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class
    if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (currentScrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    lastScrollY = currentScrollY;
}, { passive: true });

// ========================================
// MOBILE MENU
// ========================================
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ========================================
// SMOOTH SCROLL TO SECTION
// ========================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: section, offsetY: 0 },
            ease: 'power3.inOut'
        });
    }
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;

// ========================================
// BACK TO TOP
// ========================================
backToTop.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0 },
        ease: 'power3.inOut'
    });
});

// ========================================
// GLOBAL X SCROLL ANIMATION
// ========================================
gsap.to(globalX, {
    rotation: 45,
    scale: 1.15,
    scrollTrigger: {
        trigger: '.main-content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
    }
});

// ========================================
// PINNED SECTIONS ANIMATION
// ========================================

// Section 1: Hero - Exit animation only
ScrollTrigger.create({
    trigger: '#section1',
    start: 'top top',
    end: '+=130%',
    pin: true,
    scrub: 0.6,
    onLeaveBack: () => {
        // Reset hero elements when scrolling back to top
        gsap.set('.hero-content > *', { opacity: 1, y: 0, scale: 1 });
    }
});

// Hero exit animation
gsap.timeline({
    scrollTrigger: {
        trigger: '#section1',
        start: 'top top',
        end: '+=130%',
        scrub: 0.6
    }
})
.to('.hero-headline, .hero-subheadline, .hero-cta', {
    y: '-22vh',
    opacity: 0,
    ease: 'power2.in',
    stagger: 0.05
}, 0.7)
.to('.hero-label', {
    y: -20,
    opacity: 0
}, 0.7);

// Sections 2-10: Split layout animations
const pinnedSections = [
    { id: 'section2', imageEnter: '-60vw', imageExit: '-18vw', textEnter: '45vw', textExit: '10vw' },
    { id: 'section3', imageEnter: '60vw', imageExit: '18vw', textEnter: '-45vw', textExit: '-10vw' },
    { id: 'section4', imageEnter: '-60vw', imageExit: '-18vw', textEnter: '45vw', textExit: '10vw' },
    { id: 'section5', imageEnter: '60vw', imageExit: '18vw', textEnter: '-45vw', textExit: '-10vw' },
    { id: 'section6', imageEnter: '-60vw', imageExit: '-18vw', textEnter: '45vw', textExit: '10vw' },
    { id: 'section7', imageEnter: '60vw', imageExit: '18vw', textEnter: '-45vw', textExit: '-10vw' },
    { id: 'section8', imageEnter: '-60vw', imageExit: '-18vw', textEnter: '45vw', textExit: '10vw' },
    { id: 'section9', imageEnter: '60vw', imageExit: '18vw', textEnter: '-45vw', textExit: '-10vw' },
    { id: 'section10', imageEnter: '-60vw', imageExit: '-18vw', textEnter: '45vw', textExit: '10vw' }
];

pinnedSections.forEach((section, index) => {
    const sectionEl = document.getElementById(section.id);
    const imageCard = sectionEl.querySelector('.image-card');
    const textContent = sectionEl.querySelector('.text-content');
    const headline = sectionEl.querySelector('.section-headline');
    const caption = sectionEl.querySelector('.section-caption');
    const cta = sectionEl.querySelector('.section-cta, .cta-group');
    
    // Create scroll trigger for pinning
    ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6
    });
    
    // Image card animation
    gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top top',
            end: '+=130%',
            scrub: 0.6
        }
    })
    // Entrance (0% - 30%)
    .fromTo(imageCard, 
        { x: section.imageEnter, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
    )
    // Exit (70% - 100%)
    .to(imageCard, {
        x: section.imageExit,
        opacity: 0,
        ease: 'power2.in'
    }, 0.7);
    
    // Headline animation
    gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top top',
            end: '+=130%',
            scrub: 0.6
        }
    })
    .fromTo(headline,
        { x: section.textEnter, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.05
    )
    .to(headline, {
        x: section.textExit,
        opacity: 0,
        ease: 'power2.in'
    }, 0.7);
    
    // Caption + CTA animation
    gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top top',
            end: '+=130%',
            scrub: 0.6
        }
    })
    .fromTo([caption, cta],
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out', stagger: 0.02 },
        0.1
    )
    .to([caption, cta], {
        y: '-6vh',
        opacity: 0,
        ease: 'power2.in',
        stagger: 0.02
    }, 0.7);
});

// ========================================
// FLOWING SECTIONS ANIMATIONS
// ========================================

// Section 11: Programs
const programCards = gsap.utils.toArray('.program-card');

programCards.forEach((card, i) => {
    gsap.fromTo(card,
        { y: 80, opacity: 0, scale: 0.98 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
        }
    );
});

// Programs header animation
gsap.fromTo('.programs-header',
    { x: -60, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.programs-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// Section 12: Membership
gsap.fromTo('.membership-header',
    { y: 40, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.membership-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

const pricingCards = gsap.utils.toArray('.pricing-card');
pricingCards.forEach((card, i) => {
    gsap.fromTo(card,
        { y: 60, opacity: 0, scale: 0.98 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.12
        }
    );
});

gsap.fromTo('.booking-teaser',
    { y: 30, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.booking-teaser',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    }
);

// Section 13: Contact
gsap.fromTo('.contact-info',
    { x: -40, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

gsap.fromTo('.contact-form',
    { x: 40, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// Info items stagger
const infoItems = gsap.utils.toArray('.info-item');
infoItems.forEach((item, i) => {
    gsap.fromTo(item,
        { x: -20, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
        }
    );
});

// ========================================
// GLOBAL SCROLL SNAP
// ========================================
// Snap to pinned sections only
const pinnedTriggers = ScrollTrigger.getAll().filter(st => st.vars.pin);

if (pinnedTriggers.length > 0) {
    const maxScroll = ScrollTrigger.maxScroll(window);
    
    const pinnedRanges = pinnedTriggers.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
    }));
    
    ScrollTrigger.create({
        snap: {
            snapTo: (value) => {
                // Check if within any pinned range (with buffer)
                const inPinned = pinnedRanges.some(r => 
                    value >= r.start - 0.02 && value <= r.end + 0.02
                );
                
                if (!inPinned) return value; // Flowing section: free scroll
                
                // Find nearest pinned center
                const target = pinnedRanges.reduce((closest, r) =>
                    Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
                    pinnedRanges[0]?.center ?? 0
                );
                
                return target;
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.out'
        }
    });
}

// ========================================
// CONTACT FORM
// ========================================
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        
        // Show success message
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i data-lucide="check"></i> Message sent!';
        btn.style.background = '#22c55e';
        lucide.createIcons();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            lucide.createIcons();
            contactForm.reset();
        }, 3000);
    });
}

// ========================================
// BUTTON CLICK HANDLERS
// ========================================
// Pricing buttons
document.querySelectorAll('.pricing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const originalText = btn.textContent;
        btn.textContent = 'Coming soon';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.opacity = '';
        }, 2000);
    });
});

// Program arrows
document.querySelectorAll('.program-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.program-card');
        const title = card.querySelector('h3').textContent;
        
        // Simple alert for now - could be expanded to modal
        alert(`${title} - Detailed program information coming soon!`);
    });
});

// Booking teaser button
document.querySelector('.booking-teaser .btn-primary')?.addEventListener('click', () => {
    alert('Class booking system coming soon!');
});

// Directions link
document.querySelector('.directions-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://maps.google.com/?q=1234+Fitness+Ave+Los+Angeles+CA', '_blank');
});

// Footer links
document.querySelectorAll('.footer-links a').forEach(link => {
    if (link.getAttribute('href') === '#') {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Page coming soon!');
        });
    }
});

// ========================================
// LUCIDE ICONS INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================
// Disable complex animations on touch devices
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (isTouchDevice) {
    // Simplify animations for mobile
    gsap.globalTimeline.timeScale(1.2);
}

// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach(st => st.kill());
}

// ========================================
// REFRESH SCROLLTRIGGER ON RESIZE
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
}, { passive: true });

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
console.log('%c IRONPULSE GYM ', 'background: #B6FF2E; color: #0B0C0F; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Train in neon. Move with purpose. ', 'color: #B6FF2E; font-size: 14px;');
