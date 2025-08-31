// 仪表板页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查登录状态
    checkAuth();
    
    // 绑定检查网站功能
    const checkButton = document.querySelector('button[onclick="checkWebsite()"]');
    if (checkButton) {
        checkButton.addEventListener('click', checkWebsite);
    }
});

// 检查网站功能
function checkWebsite() {
    const urlInput = document.getElementById('urlInput');
    const url = urlInput.value.trim();
    
    if (!url) {
        alert('请输入网站URL');
        return;
    }
    
    // 验证URL格式
    try {
        new URL(url);
    } catch (e) {
        alert('请输入有效的URL格式，例如: https://example.com');
        return;
    }
    
    // 显示加载状态
    const checkButton = document.querySelector('button[onclick="checkWebsite()"]');
    const originalText = checkButton.innerHTML;
    checkButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>检查中...';
    checkButton.disabled = true;
    
    // 模拟检查过程（实际项目中应该调用后端API）
    setTimeout(() => {
        // 恢复按钮状态
        checkButton.innerHTML = originalText;
        checkButton.disabled = false;
        
        // 跳转到报告页面
        window.location.href = 'report.html';
    }, 2000);
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
    window.location.href = '../index.html';
}
