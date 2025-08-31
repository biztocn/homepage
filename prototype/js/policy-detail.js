// 政策详情页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查登录状态
    checkAuth();
    
    // 根据URL参数加载不同的政策内容
    loadPolicyContent();
});

// 加载政策内容
function loadPolicyContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const policyId = urlParams.get('id');
    
    // 根据政策ID加载不同内容（这里只是示例）
    if (policyId) {
        // 可以在这里根据ID加载不同的政策内容
        console.log('加载政策ID:', policyId);
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
    window.location.href = '../index.html';
}

// 下载PDF（模拟功能）
function downloadPDF() {
    alert('PDF下载功能正在开发中...');
}

// 分享功能
function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: '《网络安全法》解读',
            text: '了解中国网络安全法的核心要求',
            url: window.location.href
        });
    } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('链接已复制到剪贴板');
        });
    }
}
