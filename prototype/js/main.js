// Page navigation and interaction logic
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
        // Bind homepage button events
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

    // Show specified page
    showPage(pageName) {
        this.currentPage = pageName;
        this.updateNavigation();
        
        // Add container width limit CSS
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

    // Update navigation bar status
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

    // Add container width limit CSS
    addContainerWidthCSS() {
        // Check if CSS has already been added
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

    // Show homepage
    showHomePage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>Compliance Scanner Platform</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#compliance-check" class="text-gray-600 hover:text-blue-600 font-medium">Compliance Check</a>
                            <a href="#solutions" class="text-gray-600 hover:text-blue-600 font-medium">Solutions</a>
                        </nav>
                        <a href="#contact" class="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Get Report
                        </a>
                        <button id="mobile-menu-button" class="md:hidden text-gray-600 text-2xl">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    <div id="mobile-menu" class="hidden md:hidden px-6 pb-4">
                        <a href="#compliance-check" class="block py-2 text-gray-600 hover:text-blue-600">Compliance Check</a>
                        <a href="#solutions" class="block py-2 text-gray-600 hover:text-blue-600">Solutions</a>
                        <a href="#contact" class="block mt-2 bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Get Report</a>
                    </div>
                </header>

                <main>
                    <section class="hero-bg text-white" style="background: linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop') no-repeat center center; background-size: cover;">
                        <div class="container mx-auto px-6 py-24 text-center">
                            <h2 class="text-4xl md:text-6xl font-extrabold mb-4">Unlock the China Market with Confidence</h2>
                            <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">The Chinese market is open to the world. If you're interested in entering this market of 1.4 billion people, we are your bridge.</p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button onclick="app.viewReport()" class="bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-200 transition duration-300">
                                    Start Free Assessment
                                </button>
                                <button onclick="app.goToLogin()" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300">
                                    User Login
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="compliance-check" class="py-16 bg-white">
                        <div class="container mx-auto px-6 text-center">
                            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">How It Works</h2>
                            <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12">We provide a clear two-phase process that guides your journey from initial analysis to full operations in China.</p>
                            <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                                <div class="text-left p-6">
                                    <div class="flex items-center mb-4">
                                        <div class="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mr-4">1</div>
                                        <h3 class="text-2xl font-bold text-gray-800">Compliance Check Report</h3>
                                    </div>
                                    <p class="text-gray-600">We first provide a comprehensive report that gives you a clear understanding of how your business model, products, and services align with the Chinese market, regulations, and opportunities.</p>
                                </div>
                                <div class="text-left p-6">
                                    <div class="flex items-center mb-4">
                                        <div class="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mr-4">2</div>
                                        <h3 class="text-2xl font-bold text-gray-800">Comprehensive Implementation Support</h3>
                                    </div>
                                    <p class="text-gray-600">Once you're ready, our professional team is here to implement every aspect of your market entry, handling the complexity so you can focus on your business.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="solutions" class="py-16">
                        <div class="container mx-auto px-6">
                            <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-800">Your China Market Entry Blueprint</h2>
                            <p class="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">Our solution package provides a comprehensive, step-by-step framework ensuring smooth and successful launch.</p>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">Market & Policy Analysis</h4>
                                    <p class="text-gray-600">Assess your business model's alignment with Chinese policies, define optimal entry paths, and identify potential incentives.</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">Legal & Entity Strategy</h4>
                                    <p class="text-gray-600">Plan the optimal legal entity (WFOE vs. JV) for your business and develop robust intellectual property (IP) protection strategies.</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">Digital & Data Compliance</h4>
                                    <p class="text-gray-600">Navigate ICP licensing and design compliant data architecture meeting localization requirements under China's strict data security laws.</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">Operations Setup Roadmap</h4>
                                    <p class="text-gray-600">Step-by-step guide for office leasing, HR setup, banking, tax registration, and establishing presence in the local digital ecosystem.</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">Risk Assessment Matrix</h4>
                                    <p class="text-gray-600">Intuitive "Red, Yellow, Green" light system identifying potential risks at each stage and their mitigation difficulty.</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h4 class="text-xl font-bold text-blue-700 mb-2">Partner Identification Support</h4>
                                    <p class="text-gray-600">If joint ventures are needed, we help define ideal partner profiles and provide key due diligence considerations.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" class="py-20 bg-blue-800 text-white">
                        <div class="container mx-auto px-6 text-center">
                            <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Ready to Explore Your China Opportunity?</h2>
                            <p class="text-lg text-blue-100 max-w-3xl mx-auto mb-8">Let's start with a free, no-obligation preliminary assessment. Provide your company website, and our experts will give you initial feedback within 48 hours.</p>
                            <div class="max-w-lg mx-auto">
                                <form id="contact-form" action="https://formspree.io/f/meoljwry" method="POST">
                                    <div class="grid grid-cols-1 gap-4">
                                        <input type="text" name="company_website" placeholder="Your Company Website" required class="w-full p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <input type="email" name="email" placeholder="Your Business Email" required class="w-full p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <input type="hidden" name="_subject" value="New BizToCN assessment request">
                                        <button type="submit" class="w-full bg-white text-blue-800 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-200 transition duration-300">
                                            Get My Free Assessment
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
                        <p>&copy; 2025 Compliance Scanner Platform. All rights reserved.</p>
                        <div class="mt-4">
                            <a href="#" class="hover:text-white mx-2">Privacy Policy</a>
                            <span class="mx-1">|</span>
                            <a href="#" class="hover:text-white mx-2">Terms of Service</a>
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

    // Show login page
    showLoginPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>Compliance Scanner Platform</span>
                        </h1>
                        <a href="#" onclick="app.showPage('home')" class="text-blue-600 hover:text-blue-700 font-medium">
                            <i class="fas fa-arrow-left mr-2"></i>Back to Home
                        </a>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-16">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <div class="text-center mb-8">
                                <i class="fas fa-user-lock text-4xl text-blue-600 mb-4"></i>
                                <h2 class="text-3xl font-bold text-gray-800">User Login</h2>
                                <p class="text-gray-600 mt-2">Login to manage your projects and view historical reports</p>
                            </div>
                            
                            <form id="loginForm" class="space-y-6">
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <input type="password" id="password" name="password" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                </div>
                                <button type="submit" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                    Login
                                </button>
                            </form>
                            
                            <div class="text-center mt-6">
                                <a href="#" onclick="app.showPage('home')" class="text-blue-600 hover:text-blue-700 text-sm">
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        // Bind login form events
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    // Handle login
    handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulate login validation
        if (email && password) {
            this.isLoggedIn = true;
            this.showPage('dashboard');
        } else {
            alert('Please enter a valid email and password');
        }
    }

    // Show dashboard page
    showDashboardPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>Compliance Scanner Platform</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 font-medium">Project List</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Policy Resources</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Settings</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>Logout
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">Website Compliance Check</h2>
                        <div class="flex flex-col md:flex-row gap-4">
                            <input type="url" id="urlInput" placeholder="Enter website URL (e.g., https://example.com)" required 
                                   class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <button onclick="app.checkWebsite()" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                <i class="fas fa-search mr-2"></i>Check
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">Historical Reports</h3>
                        <div class="space-y-4">
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPage('report')">
                                <h4 class="text-xl font-semibold text-gray-800 mb-2">example.com - Compliance Report</h4>
                                <p class="text-gray-600 mb-1">Check Time: 2024-01-15 14:30</p>
                                <p class="text-gray-600">Status: <span class="text-yellow-600 font-medium">Partially Compliant (Needs Improvement)</span></p>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPage('report')">
                                <h4 class="text-xl font-semibold text-gray-800 mb-2">test-site.com - Compliance Report</h4>
                                <p class="text-gray-600 mb-1">Check Time: 2024-01-10 09:15</p>
                                <p class="text-gray-600">Status: <span class="text-green-600 font-medium">Basically Compliant (Recommended Optimization)</span></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.bindDashboardEvents();
    }

    // Bind dashboard events
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

    // Check website
    checkWebsite() {
        const url = document.getElementById('urlInput').value;
        if (!url) {
            alert('Please enter a valid website URL');
            return;
        }
        
        // Simulate check process
        alert(`Checking website: ${url}\n\nCheck completed! Generating report...`);
        this.showPage('report');
    }

    // Logout
    logout() {
        this.isLoggedIn = false;
        this.showPage('home');
    }

    // View report (public function)
    viewReport() {
        window.location.href = '/prototype/pages/report.html';
    }

    // Go to login
    goToLogin() {
        window.location.href = '/prototype/pages/login.html';
    }

    // Bind mobile menu
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

// Initialize application after page load
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ComplianceScanner();
});

// Global functions for HTML onclick calls
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
