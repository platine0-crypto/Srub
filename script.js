// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings
    AOS.init({ 
        duration: 800, 
        once: true,
        easing: 'ease-out-cubic',
        offset: 100,
    });

    // Sticky header functionality
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('sticky-header', 'bg-[#0B1221]/90');
        } else {
            header.classList.remove('sticky-header', 'bg-[#0B1221]/90');
        }
        
        lastScrollTop = scrollTop;
    });
});

// Alpine.js data for the quiz functionality
document.addEventListener('alpine:init', () => {
    Alpine.data('quizData', () => ({
        step: 1,
        selectedType: null,
        selectedBudget: null,
        selectedTiming: null,
        name: '',
        phone: '',
        email: '',
        submitted: false,
        
        nextStep() {
            if (this.validateCurrentStep()) {
                this.step++;
            }
        },
        
        prevStep() {
            if (this.step > 1) {
                this.step--;
            }
        },
        
        validateCurrentStep() {
            // Validation logic for each step
            switch(this.step) {
                case 1:
                    return this.selectedType !== null;
                case 2:
                    return this.selectedBudget !== null;
                case 3:
                    return this.selectedTiming !== null;
                case 4:
                    return this.name.trim() !== '' && 
                           this.phone.trim() !== '' && 
                           this.email.trim() !== '' &&
                           this.isValidEmail(this.email);
                default:
                    return true;
            }
        },
        
        isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        
        async submitQuiz() {
            if (!this.validateCurrentStep()) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }
            
            // Prepare form data
            const formData = {
                type: this.selectedType,
                budget: this.selectedBudget,
                timing: this.selectedTiming,
                name: this.name,
                phone: this.phone,
                email: this.email,
                timestamp: new Date().toISOString()
            };
            
            try {
                // Submit form data to backend
                const response = await fetch('send.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    this.submitted = true;
                    // Reset form after successful submission
                    setTimeout(() => {
                        this.resetForm();
                    }, 3000);
                } else {
                    alert('Ошибка при отправке формы. Попробуйте еще раз.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
            }
        },
        
        resetForm() {
            this.step = 1;
            this.selectedType = null;
            this.selectedBudget = null;
            this.selectedTiming = null;
            this.name = '';
            this.phone = '';
            this.email = '';
            this.submitted = false;
        }
    }));
});

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Handle header background on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('bg-[#0B1221]/90', 'backdrop-blur-md');
    } else {
        header.classList.remove('bg-[#0B1221]/90', 'backdrop-blur-md');
    }
    
    lastScrollTop = scrollTop;
});

// Initialize modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('[id^="modal-"]');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
    });
});

// Image lazy loading with blur-up effect
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                
                // Create a temporary image to preload
                const tempImg = new Image();
                tempImg.onload = function() {
                    img.src = src;
                    img.classList.remove('blur-up');
                    img.classList.add('blur-up-loaded');
                    imageObserver.unobserve(img);
                };
                tempImg.src = src;
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});