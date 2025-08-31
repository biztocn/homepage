// 认证相关功能
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // 简单的登录验证（实际项目中应该调用后端API）
            if (email && password) {
                // 模拟登录成功
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                
                // 跳转到仪表板
                window.location.href = 'dashboard.html';
            } else {
                alert('请输入邮箱和密码');
            }
        });
    }
});

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
    window.location.href = '../index.html';
}

// 在需要认证的页面调用
if (window.location.pathname.includes('dashboard.html') || 
    window.location.pathname.includes('report.html') || 
    window.location.pathname.includes('policies.html') || 
    window.location.pathname.includes('settings.html')) {
    checkAuth();
}
