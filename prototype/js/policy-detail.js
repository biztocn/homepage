// Policy detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check login status
    checkAuth();
    
    // Load different policy content based on URL parameters
    loadPolicyContent();
});

// Load policy content
function loadPolicyContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const policyId = urlParams.get('id');
    
    // Load different content based on policy ID (this is just an example)
    if (policyId) {
        // Can load different policy content based on ID here
        console.log('Loading policy ID:', policyId);
    }
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

// Download PDF (simulated functionality)
function downloadPDF() {
    alert('PDF download functionality is under development...');
}

// Share functionality
function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: 'Cybersecurity Law Interpretation',
            text: 'Understand the core requirements of China\'s Cybersecurity Law',
            url: window.location.href
        });
    } else {
        // Copy link to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link has been copied to clipboard');
        });
    }
}
