// 设置页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查登录状态
    checkAuth();
    
    // 绑定表单事件
    bindFormEvents();
});

// 绑定表单事件
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

// 更新个人信息
function updateProfile() {
    const displayName = document.getElementById('displayName').value;
    const email = document.getElementById('email').value;
    
    if (!displayName || !email) {
        alert('请填写完整信息');
        return;
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('请输入有效的邮箱地址');
        return;
    }
    
    // 模拟保存（实际项目中应该调用后端API）
    localStorage.setItem('userDisplayName', displayName);
    localStorage.setItem('userEmail', email);
    
    alert('个人信息更新成功！');
}

// 更新密码
function updatePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('请填写所有密码字段');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('新密码和确认密码不匹配');
        return;
    }
    
    if (newPassword.length < 6) {
        alert('新密码长度至少6位');
        return;
    }
    
    // 模拟密码更新（实际项目中应该调用后端API）
    alert('密码更新成功！');
    
    // 清空表单
    document.getElementById('passwordForm').reset();
}

// 删除账户
function deleteAccount() {
    const confirmed = confirm('确定要删除账户吗？此操作不可撤销。');
    
    if (confirmed) {
        // 模拟删除账户（实际项目中应该调用后端API）
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userDisplayName');
        
        alert('账户已删除');
        window.location.href = '../index.html';
    }
}

// 检查登录状态
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// 退出登录
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userDisplayName');
    window.location.href = '../index.html';
}
