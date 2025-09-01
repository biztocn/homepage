// Dashboard page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check login status
    checkAuth();
    
    // Bind website check functionality
    const checkButton = document.querySelector('button[onclick="checkWebsite()"]');
    if (checkButton) {
        checkButton.addEventListener('click', checkWebsite);
    }
});

// Check website functionality
function checkWebsite() {
    const urlInput = document.getElementById('urlInput');
    const url = urlInput.value.trim();
    
    if (!url) {
        alert('Please enter a website URL');
        return;
    }
    
    // Validate URL format
    try {
        new URL(url);
    } catch (e) {
        alert('Please enter a valid URL format, e.g., https://example.com');
        return;
    }
    
    // Show loading state
    const checkButton = document.querySelector('button[onclick="checkWebsite()"]');
    const originalText = checkButton.innerHTML;
    checkButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Checking...';
    checkButton.disabled = true;
    
    // Simulate check process (in actual project should call backend API)
    setTimeout(() => {
        // Restore button state
        checkButton.innerHTML = originalText;
        checkButton.disabled = false;
        
        // Redirect to report page
        window.location.href = '/prototype/pages/report.html';
    }, 2000);
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
