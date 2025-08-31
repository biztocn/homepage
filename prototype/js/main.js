// 页面导航和交互逻辑
class ComplianceScanner {
    constructor() {
        this.currentPage = 'home';
        this.isLoggedIn = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.showPage(this.currentPage);
    }

    bindEvents() {
        // 绑定首页按钮事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-action]')) {
                const action = e.target.closest('[data-action]').getAttribute('data-action');
                if (action === 'view-report') {
                    this.viewReport();
                } else if (action === 'login') {
                    this.goToLogin();
                }
            }
        });
    }

    // 显示指定页面
    showPage(pageName) {
        this.currentPage = pageName;
        this.updateNavigation();
        
        // 添加容器宽度限制CSS
        this.addContainerWidthCSS();
        
        switch (pageName) {
            case 'home':
                this.showHomePage();
                break;
            case 'login':
                this.showLoginPage();
                break;
            case 'dashboard':
                this.showDashboardPage();
                break;
            case 'report':
                this.showReportPage();
                break;
            case 'policies':
                this.showPoliciesPage();
                break;
            case 'settings':
                this.showSettingsPage();
                break;
        }
    }

    // 更新导航栏状态
    updateNavigation() {
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.classList.remove('text-blue-600', 'bg-blue-50');
            link.classList.add('text-gray-600');
            if (link.getAttribute('data-page') === this.currentPage) {
                link.classList.remove('text-gray-600');
                link.classList.add('text-blue-600', 'bg-blue-50');
            }
        });
    }

    // 添加容器宽度限制CSS
    addContainerWidthCSS() {
        // 检查是否已经添加了CSS
        if (!document.getElementById('container-width-css')) {
            const style = document.createElement('style');
            style.id = 'container-width-css';
            style.textContent = `
                .container {
                    max-width: 1024px !important;
                }
                @media (min-width: 1024px) {
                    .container {
                        max-width: 1024px !important;
                    }
                }
                @media (min-width: 1280px) {
                    .container {
                        max-width: 1024px !important;
                    }
                }
                @media (min-width: 1536px) {
                    .container {
                        max-width: 1024px !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // 显示首页
    showHomePage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>合规扫描工具平台</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#compliance-check" class="text-gray-600 hover:text-blue-600 font-medium">合规检查</a>
                            <a href="#solutions" class="text-gray-600 hover:text-blue-600 font-medium">解决方案</a>
                        </nav>
                        <a href="#contact" class="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            获取报告
                        </a>
                        <button id="mobile-menu-button" class="md:hidden text-gray-600 text-2xl">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    <div id="mobile-menu" class="hidden md:hidden px-6 pb-4">
                        <a href="#compliance-check" class="block py-2 text-gray-600 hover:text-blue-600">合规检查</a>
                        <a href="#solutions" class="block py-2 text-gray-600 hover:text-blue-600">解决方案</a>
                        <a href="#contact" class="block mt-2 bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">获取报告</a>
                    </div>
                </header>

                <main>
                    <section class="hero-bg text-white" style="background: linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop') no-repeat center center; background-size: cover;">
                        <div class="container mx-auto px-6 py-24 text-center">
                            <h2 class="text-4xl md:text-6xl font-extrabold mb-4">解锁中国市场，充满信心</h2>
                            <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">中国市场向世界开放。如果您有兴趣进入这个拥有14亿人口的市场，我们就是您的桥梁。</p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button onclick="app.viewReport()" class="bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-200 transition duration-300">
                                    开始免费评估
                                </button>
                                <button onclick="app.goToLogin()" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300">
                                    用户登录
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="compliance-check" class="py-16 bg-white">
                        <div class="container mx-auto px-6 text-center">
                            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">工作原理</h2>
                            <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12">我们提供清晰的两阶段流程，指导您从初步分析到全面运营的中国之旅。</p>
                            <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                                <div class="text-left p-6">
                                    <div class="flex items-center mb-4">
                                        <div class="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mr-4">1</div>
                                        <h3 class="text-2xl font-bold text-gray-800">合规检查报告</h3>
                                    </div>
                                    <p class="text-gray-600">我们首先提供一份综合报告，让您清楚地了解您的商业模式、产品和服务如何与中国市场、法规和机遇保持一致。</p>
                                </div>
                                <div class="text-left p-6">
                                    <div class="flex items-center mb-4">
                                        <div class="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mr-4">2</div>
                                        <h3 class="text-2xl font-bold text-gray-800">全面实施支持</h3>
                                    </div>
                                    <p class="text-gray-600">一旦您准备就绪，我们的专业团队将在这里实施您市场进入的各个方面，处理复杂性，让您专注于业务。</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="solutions" class="py-16">
                        <div class="container mx-auto px-6">
                            <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-800">您的中国市场进入蓝图</h2>
                            <p class="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">我们的解决方案包提供了一个全面的、循序渐进的框架，确保顺利和成功的启动。</p>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">市场与政策分析</h4>
                                    <p class="text-gray-600">评估您的商业模式与中国政策的一致性，定义最佳进入路径并识别潜在激励措施。</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">法律与实体策略</h4>
                                    <p class="text-gray-600">为您的业务规划最佳法律实体（WFOE vs. JV）并制定强大的知识产权（IP）保护策略。</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">数字与数据合规</h4>
                                    <p class="text-gray-600">导航ICP许可并设计符合本地化要求的合规数据架构，满足中国严格的数据安全法律。</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">运营设置路线图</h4>
                                    <p class="text-gray-600">办公室租赁、人力资源设置、银行、税务注册以及在本地数字生态系统中建立存在的分步指南。</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">风险评估矩阵</h4>
                                    <p class="text-gray-600">直观的"红、黄、绿"灯系统，识别每个阶段的潜在风险及其缓解难度。</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">合作伙伴识别支持</h4>
                                    <p class="text-gray-600">如果需要合资企业，我们帮助您定义理想的合作伙伴档案并提供关键的尽职调查考虑因素。</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" class="py-20 bg-blue-800 text-white">
                        <div class="container mx-auto px-6 text-center">
                            <h2 class="text-3xl md:text-4xl font-extrabold mb-4">准备探索您的中国机遇？</h2>
                            <p class="text-lg text-blue-100 max-w-3xl mx-auto mb-8">让我们从免费、无义务的初步评估开始。提供您的公司网站，我们的专家将在48小时内给您初步反馈。</p>
                            <div class="max-w-lg mx-auto">
                                <form id="contact-form" action="https://formspree.io/f/meoljwry" method="POST">
                                    <div class="grid grid-cols-1 gap-4">
                                        <input type="text" name="company_website" placeholder="您的公司网站" required class="w-full p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <input type="email" name="email" placeholder="您的商务邮箱" required class="w-full p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <input type="hidden" name="_subject" value="New BizToCN assessment request">
                                        <button type="submit" class="w-full bg-white text-blue-800 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-200 transition duration-300">
                                            获取我的免费评估
                                        </button>
                                        <div id="form-status" class="text-sm"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>

                <footer class="bg-gray-800 text-white">
                    <div class="container mx-auto px-6 py-8 text-center text-gray-400">
                        <p>&copy; 2025 合规扫描工具平台. 保留所有权利.</p>
                        <div class="mt-4">
                            <a href="#" class="hover:text-white mx-2">隐私政策</a>
                            <span class="mx-1">|</span>
                            <a href="#" class="hover:text-white mx-2">服务条款</a>
                            <span class="mx-1">|</span>
                            <a href="mailto:contact@biztocn.com" class="hover:text-white mx-2">contact@biztocn.com</a>
                        </div>
                    </div>
                </footer>
            </div>
        `;
        
        this.bindEvents();
        this.bindMobileMenu();
    }

    // 显示登录页面
    showLoginPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>合规扫描工具平台</span>
                        </h1>
                        <a href="#" onclick="app.showPage('home')" class="text-blue-600 hover:text-blue-700 font-medium">
                            <i class="fas fa-arrow-left mr-2"></i>返回首页
                        </a>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-16">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <div class="text-center mb-8">
                                <i class="fas fa-user-lock text-4xl text-blue-600 mb-4"></i>
                                <h2 class="text-3xl font-bold text-gray-800">用户登录</h2>
                                <p class="text-gray-600 mt-2">登录后管理您的项目和查看历史报告</p>
                            </div>
                            
                            <form id="loginForm" class="space-y-6">
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">邮箱地址</label>
                                    <input type="email" id="email" name="email" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">密码</label>
                                    <input type="password" id="password" name="password" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                </div>
                                <button type="submit" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                    登录
                                </button>
                            </form>
                            
                            <div class="text-center mt-6">
                                <a href="#" onclick="app.showPage('home')" class="text-blue-600 hover:text-blue-700 text-sm">
                                    返回首页
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        // 绑定登录表单事件
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    // 处理登录
    handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // 模拟登录验证
        if (email && password) {
            this.isLoggedIn = true;
            this.showPage('dashboard');
        } else {
            alert('请输入有效的邮箱和密码');
        }
    }

    // 显示仪表板页面
    showDashboardPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>合规扫描工具平台</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 font-medium">项目列表</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">政策资料</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">设置</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>退出登录
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">网站合规性检查</h2>
                        <div class="flex flex-col md:flex-row gap-4">
                            <input type="url" id="urlInput" placeholder="请输入网站URL (例如: https://example.com)" required 
                                   class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <button onclick="app.checkWebsite()" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                <i class="fas fa-search mr-2"></i>检查
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">历史报告</h3>
                        <div class="space-y-4">
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPage('report')">
                                <h4 class="text-xl font-semibold text-gray-800 mb-2">example.com - 合规性报告</h4>
                                <p class="text-gray-600 mb-1">检查时间: 2024-01-15 14:30</p>
                                <p class="text-gray-600">状态: <span class="text-yellow-600 font-medium">部分合规 (需要改进)</span></p>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPage('report')">
                                <h4 class="text-xl font-semibold text-gray-800 mb-2">test-site.com - 合规性报告</h4>
                                <p class="text-gray-600 mb-1">检查时间: 2024-01-10 09:15</p>
                                <p class="text-gray-600">状态: <span class="text-green-600 font-medium">基本合规 (建议优化)</span></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.bindDashboardEvents();
    }

    // 绑定仪表板事件
    bindDashboardEvents() {
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.showPage(page);
            });
        });
    }

    // 检查网站
    checkWebsite() {
        const url = document.getElementById('urlInput').value;
        if (!url) {
            alert('请输入有效的网站URL');
            return;
        }
        
        // 模拟检查过程
        alert(`正在检查网站: ${url}\n\n检查完成！正在生成报告...`);
        this.showPage('report');
    }

    // 退出登录
    logout() {
        this.isLoggedIn = false;
        this.showPage('home');
    }

    // 查看报告（公开功能）
    viewReport() {
        window.location.href = '/prototype/pages/report.html';
    }

    // 前往登录
    goToLogin() {
        window.location.href = '/prototype/pages/login.html';
    }

    // 绑定移动端菜单
    bindMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ComplianceScanner();
});

// 全局函数，用于HTML中的onclick调用
function viewReport() {
    if (window.app) {
        window.app.viewReport();
    }
}

function goToLogin() {
    if (window.app) {
        window.app.goToLogin();
    }
}
