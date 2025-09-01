// Report page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check login status
    checkAuth();
    
    // Smooth scrolling to anchors
    setupSmoothScrolling();
    
    // Add back to top functionality
    addBackToTopButton();
});

// Setup smooth scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add back to top button
function addBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 opacity-0 pointer-events-none';
    backToTopButton.id = 'backToTop';
    
    document.body.appendChild(backToTopButton);
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            backToTopButton.classList.add('opacity-0', 'pointer-events-none');
        }
    });
    
    // Click to return to top
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Check login status
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = '/prototype/pages/login.html';
    }
}

// Logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = '/prototype/index.html';
}

// Print report
function printReport() {
    window.print();
}

// Export PDF (simulated functionality)
function exportPDF() {
    alert('PDF export functionality is under development...');
}

// Share report
function shareReport() {
    if (navigator.share) {
        navigator.share({
            title: 'Website Compliance Analysis Report',
            text: 'View my website compliance analysis report',
            url: window.location.href
        });
    } else {
        // Copy link to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Report link has been copied to clipboard');
        });
    }
}
