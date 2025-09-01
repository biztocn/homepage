// Authentication related functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple login validation (in actual project should call backend API)
            if (email && password) {
                // Simulate successful login
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                
                // Redirect to dashboard
                window.location.href = '/prototype/pages/dashboard.html';
            } else {
                alert('Please enter email and password');
            }
        });
    }
});

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

// Call on pages that require authentication
if (window.location.pathname.includes('dashboard.html') || 
    window.location.pathname.includes('report.html') || 
    window.location.pathname.includes('policies.html') || 
    window.location.pathname.includes('settings.html')) {
    checkAuth();
}
