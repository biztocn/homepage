// Settings page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check login status
    checkAuth();
    
    // Bind form events
    bindFormEvents();
});

// Bind form events
function bindFormEvents() {
    const profileForm = document.getElementById('profileForm');
    const passwordForm = document.getElementById('passwordForm');
    
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            updateProfile();
        });
    }
    
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            updatePassword();
        });
    }
}

// Update personal information
function updateProfile() {
    const displayName = document.getElementById('displayName').value;
    const email = document.getElementById('email').value;
    
    if (!displayName || !email) {
        alert('Please fill in all information');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate save (in actual project should call backend API)
    localStorage.setItem('userDisplayName', displayName);
    localStorage.setItem('userEmail', email);
    
    alert('Personal information updated successfully!');
}

// Update password
function updatePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill in all password fields');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('New password and confirm password do not match');
        return;
    }
    
    if (newPassword.length < 6) {
        alert('New password must be at least 6 characters long');
        return;
    }
    
    // Simulate password update (in actual project should call backend API)
    alert('Password updated successfully!');
    
    // Clear form
    document.getElementById('passwordForm').reset();
}

// Delete account
function deleteAccount() {
    const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');
    
    if (confirmed) {
        // Simulate account deletion (in actual project should call backend API)
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userDisplayName');
        
        alert('Account has been deleted');
        window.location.href = '/prototype/index.html';
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
    localStorage.removeItem('userDisplayName');
    window.location.href = '/prototype/index.html';
}
