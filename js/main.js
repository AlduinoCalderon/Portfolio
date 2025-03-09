// Loading animation
document.addEventListener('DOMContentLoaded', () => {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  
  const loadingSpinner = document.createElement('div');
  loadingSpinner.className = 'loading-spinner';
  
  loadingOverlay.appendChild(loadingSpinner);
  document.body.appendChild(loadingOverlay);
  
  // Simulate loading time
  setTimeout(() => {
    loadingOverlay.classList.add('fade-out');
    setTimeout(() => {
      loadingOverlay.remove();
    }, 500);
  }, 1500);
  
  // Initialize typewriter effect
  initTypewriter();
  
  // Add animated background
  createAnimatedBackground();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Add navbar scroll effect
  initNavbarEffect();
});

// Typewriter effect
function initTypewriter() {
  let app = document.getElementById('typewriter');
  
  let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    deleteSpeed: 50
  });
  
  let firstString = 'Enthusiastic Developer and Engineer';
  let secondString = 'Future Data Scientist';
  let thirdString = 'Driven by innovation and technology!';
  
  typewriter
    .pauseFor(800)
    .typeString(firstString)
    .pauseFor(2500)
    .deleteChars(firstString.length)
    .pauseFor(500)
    .typeString(secondString)
    .pauseFor(2500)
    .deleteChars(secondString.length)
    .pauseFor(500)
    .typeString(thirdString)
    .pauseFor(2500)
    .start();
}

// Animated background
function createAnimatedBackground() {
  const animatedBg = document.createElement('div');
  animatedBg.className = 'animated-bg';
  document.body.appendChild(animatedBg);
  
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animatedBg.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  // Create particles
  const particles = [];
  const particleCount = 100;
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      color: '#00ff7f',
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25
    });
  }
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Boundary checking
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
    
    // Connect particles with lines
    connectParticles();
  }
  
  // Connect nearby particles with lines
  function connectParticles() {
    const maxDistance = 150;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Calculate line opacity based on distance
          const opacity = 1 - (distance / maxDistance);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 127, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  // Resize canvas when window is resized
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  // Start animation
  animate();
}

// Scroll animations
function initScrollAnimations() {
  const sections = document.querySelectorAll('section');
  
  // Initial check for elements in viewport
  checkSectionsInView();
  
  // Check on scroll
  window.addEventListener('scroll', () => {
    checkSectionsInView();
  });
  
  function checkSectionsInView() {
    const triggerBottom = window.innerHeight * 0.8;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }
}

// Navbar scroll effect
function initNavbarEffect() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '10px 0';
      navbar.style.background = 'rgba(10, 10, 10, 0.95) !important';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
    } else {
      navbar.style.padding = '20px 0';
      navbar.style.background = 'rgba(13, 13, 13, 0.95) !important';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add hover effect to projects
const projectCards = document.querySelectorAll('#projects .card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Add custom cursor effect (optional)
function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
}

// Uncomment the line below if you want to add a custom cursor
// initCustomCursor();