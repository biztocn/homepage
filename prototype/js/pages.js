// Extend ComplianceScanner class, add other page functionality
Object.assign(ComplianceScanner.prototype, {
    // Show report page
    showReportPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>Compliance Scanner Platform</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Project List</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Policy Resources</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Settings</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>Logout
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <!-- Report cover page - Module status summary -->
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-4">Website Compliance Analysis Report</h2>
                        <p class="text-gray-600 mb-6">Check Time: 2024-01-15 14:30 | Website: example.com</p>
                        
                        <div class="mb-8">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">Compliance Module Status Summary</h3>
                            <p class="text-gray-600 mb-6">Based on your business model, we have analyzed the current status and risk levels of the following 5 key compliance modules. Click on module titles to view detailed analysis.</p>
                            
                            <div class="space-y-6">
                                <!-- Module 1: Basic Operations -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">Basic Operations - Company Administration & HR</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-green-600 text-2xl">✅</span>
                                                <span class="text-green-700 font-semibold">Low Effort</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">Company registration, office leasing, human resource management and other basic administrative tasks have mature processes and standards in China.</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">Low threshold, standardized processes, suitable for foreign companies</div>
                                            <a href="#module-1" class="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center">
                                                View Details <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Module 2: Business Domain Analysis -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">Business Domain Analysis</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-yellow-600 text-2xl">⚠️</span>
                                                <span class="text-yellow-700 font-semibold">Moderate Effort</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">Some industries have foreign investment access restrictions or require special permits, but can be overcome through suitable partners or business model adjustments.</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">Legal barriers exist but can be resolved through strategic adjustments</div>
                                            <a href="#module-2" class="text-yellow-600 hover:text-yellow-700 text-sm font-medium inline-flex items-center">
                                                View Details <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Module 3: Data & IT Compliance Requirements -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-red-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">Data & IT Compliance Requirements</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-red-600 text-2xl">❌</span>
                                                <span class="text-red-700 font-semibold">High Effort Required</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">Data localization, cybersecurity review, ICP licensing and other requirements are strict, requiring professional technical and legal support.</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">High technical requirements, complex regulations, need professional team support</div>
                                            <a href="#module-3" class="text-red-600 hover:text-red-700 text-sm font-medium inline-flex items-center">
                                                View Details <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Module 4: Business License Requirements -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">Business License Requirements</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-yellow-600 text-2xl">⚠️</span>
                                                <span class="text-yellow-700 font-semibold">Moderate Effort</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">Depending on business nature, special industry licenses such as financial, education, medical may be required, with longer application processes but achievable.</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">Requires time investment but obtainable through compliance processes</div>
                                            <a href="#module-4" class="text-yellow-600 hover:text-yellow-700 text-sm font-medium inline-flex items-center">
                                                View Details <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Module 5: Intellectual Property Protection -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">Intellectual Property Protection</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-green-600 text-2xl">✅</span>
                                                <span class="text-green-700 font-semibold">Low Effort</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">Intellectual property protection in China has a comprehensive legal system, transparent application processes, and continuously strengthening protection.</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">Comprehensive legal system, standardized processes, strong protection</div>
                                            <a href="#module-5" class="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center">
                                                View Details <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Status Explanation -->
                            <div class="mt-8 p-6 bg-gray-50 rounded-lg">
                                <h4 class="text-lg font-bold text-gray-800 mb-4">Status Explanation</h4>
                                <div class="grid md:grid-cols-3 gap-6">
                                    <div class="flex items-center">
                                        <span class="text-green-600 text-xl mr-3">✅</span>
                                        <div>
                                            <div class="font-semibold text-green-700">Low Effort</div>
                                            <div class="text-sm text-gray-600">Low threshold, easy compliance, standardized processes</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-yellow-600 text-xl mr-3">⚠️</span>
                                        <div>
                                            <div class="font-semibold text-yellow-700">Moderate Effort</div>
                                            <div class="text-sm text-gray-600">Legal barriers exist but can be resolved through strategic adjustments</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-red-600 text-xl mr-3">❌</span>
                                        <div>
                                            <div class="font-semibold text-red-700">High Effort Required</div>
                                            <div class="text-sm text-gray-600">Strict requirements, need professional team support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Detailed Module Analysis -->
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">Detailed Module Analysis</h3>
                        
                        <div class="space-y-8">
                            <!-- Module 1: Basic Operations -->
                            <div id="module-1" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">Basic Operations - Company Administration & HR</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-green-600">✅</span>
                                            <span class="text-green-700 font-medium">Low Effort</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">Company registration, office leasing, human resource management and other basic administrative tasks have mature processes and standards in China.</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Company Registration Process</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Straightforward</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Foreign companies can establish through WFOE or JV forms, standardized process</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-green-600 font-medium">Low</span> | Timeline: 2-4 weeks</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Office Leasing</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Straightforward</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Commercial property leasing has comprehensive legal protection, transparent process</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-green-600 font-medium">Low</span> | Timeline: 1-2 weeks</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">HR Setup</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Straightforward</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Social security, housing fund and other standardized operational processes</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-green-600 font-medium">Low</span> | Timeline: 1-2 weeks</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Module 2: Business Domain Analysis -->
                            <div id="module-2" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">Business Domain Analysis</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-yellow-600">⚠️</span>
                                            <span class="text-yellow-700 font-medium">Moderate Effort</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">Some industries have foreign investment access restrictions or require special permits, but can be overcome through suitable partners or business model adjustments.</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Industry Access Restrictions</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Requires Strategy</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Some industries have foreign investment access restrictions, need to find suitable partners</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-yellow-600 font-medium">Moderate</span> | Timeline: 2-6 months</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Business Model Adjustment</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Requires Strategy</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">May need to adjust business model to comply with Chinese regulations</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-yellow-600 font-medium">Moderate</span> | Timeline: 3-8 months</div>
                                    </div>
                                    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg">
                                        <h5 class="font-semibold mb-3 flex items-center">
                                            <i class="fas fa-crown mr-2"></i>
                                            Premium Content <span class="bg-white bg-opacity-20 px-2 py-1 rounded text-xs ml-2">PREMIUM</span>
                                        </h5>
                                        <div class="space-y-2 text-sm">
                                            <p><strong>Required Actions:</strong> Evaluate business model, find suitable partners</p>
                                            <p><strong>Recommended Vendors:</strong> Professional legal consulting firms</p>
                                            <p><strong>Completion Difficulty:</strong> Moderate (requires strategic adjustments)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Module 3: Data & IT Compliance Requirements -->
                            <div id="module-3" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">Data & IT Compliance Requirements</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-red-600">❌</span>
                                            <span class="text-red-700 font-medium">High Effort Required</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">Data localization, cybersecurity review, ICP licensing and other requirements are strict, requiring professional technical and legal support.</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Data Localization</span>
                                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Moderate Challenge</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Need to store data on servers located within China</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-red-600 font-medium">High</span> | Timeline: 6-12 months</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Cybersecurity Review</span>
                                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">High Challenge</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Need to pass cybersecurity review to ensure system security</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-red-600 font-medium">High</span> | Timeline: 8-18 months</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">ICP License Application</span>
                                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Manageable</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Need to apply for ICP license to provide internet services in China</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-red-600 font-medium">Moderate</span> | Timeline: 3-6 months</div>
                                    </div>
                                    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg">
                                        <h5 class="font-semibold mb-3 flex items-center">
                                            <i class="fas fa-crown mr-2"></i>
                                            Premium Content <span class="text-red-200">PREMIUM</span>
                                        </h5>
                                        <div class="space-y-2 text-sm">
                                            <p><strong>Required Actions:</strong> Establish data architecture compliant with Chinese regulations</p>
                                            <p><strong>Recommended Vendors:</strong> Alibaba Cloud, Tencent Cloud, Huawei Cloud</p>
                                            <p><strong>Completion Difficulty:</strong> High (requires technical architecture restructuring)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Module 4: Business License Requirements -->
                            <div id="module-4" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">Business License Requirements</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-yellow-600">⚠️</span>
                                            <span class="text-yellow-700 font-medium">Moderate Effort</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">Depending on business nature, special industry licenses such as financial, education, medical may be required, with longer application processes but achievable.</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Financial Business License</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Requires License</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Financial business requires approval from relevant regulatory authorities</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-yellow-600 font-medium">Moderate</span> | Timeline: 6-12 months</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Education Service License</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Requires License</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Education services require approval and qualifications from education authorities</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-yellow-600 font-medium">Moderate</span> | Timeline: 4-8 months</div>
                                    </div>
                                    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg">
                                        <h5 class="font-semibold mb-3 flex items-center">
                                            <i class="fas fa-crown mr-2"></i>
                                            Premium Content <span class="bg-white bg-opacity-20 px-2 py-1 rounded text-xs ml-2">PREMIUM</span>
                                        </h5>
                                        <div class="space-y-2 text-sm">
                                            <p><strong>Required Actions:</strong> Apply for relevant industry licenses and qualifications</p>
                                            <p><strong>Recommended Vendors:</strong> Professional legal consulting firms</p>
                                            <p><strong>Completion Difficulty:</strong> Moderate (requires time investment)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Module 5: Intellectual Property Protection -->
                            <div id="module-5" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">Intellectual Property Protection</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-green-600">✅</span>
                                            <span class="text-green-700 font-medium">Low Effort</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">Intellectual property protection in China has a comprehensive legal system, transparent application processes, and continuously strengthening protection.</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Patent Application</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Straightforward</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Patent application process is standardized with strong protection</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-green-600 font-medium">Low</span> | Timeline: 12-18 months</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">Trademark Registration</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Straightforward</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Trademark registration process is transparent with clear review standards</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-green-600 font-medium">Low</span> | Timeline: 8-12 months</div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">IP Protection Enforcement</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Well-Established</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">Comprehensive legal system with robust infringement relief mechanisms</p>
                                        <div class="text-sm text-gray-500">Entry Difficulty: <span class="text-green-600 font-medium">Low</span> | Timeline: Ongoing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.bindReportEvents();
    },

    // Bind report page events
    bindReportEvents() {
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.showPage(page);
            });
        });
    },

    // Show policy resources page
    showPoliciesPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>Compliance Scanner Platform</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Project List</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 font-medium">Policy Resources</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Settings</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>Logout
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-8">Policy Resources Library</h2>
                        <div class="space-y-6">
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Cybersecurity Law Implementation Guidelines</h3>
                                <p class="text-gray-600 mb-3">Detailed interpretation of Cybersecurity Law implementation requirements and operational guidelines</p>
                                <div class="text-sm text-gray-500">Updated: 2024-01-10 | Views: 1,234</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Data Security Law Compliance Guide</h3>
                                <p class="text-gray-600 mb-3">Complete guide and best practices for enterprise data security compliance</p>
                                <div class="text-sm text-gray-500">Updated: 2024-01-08 | Views: 987</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Personal Information Protection Law Analysis</h3>
                                <p class="text-gray-600 mb-3">Core provisions and compliance key points analysis of Personal Information Protection Law</p>
                                <div class="text-sm text-gray-500">Updated: 2024-01-05 | Views: 1,567</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Critical Information Infrastructure Security Protection Regulations</h3>
                                <p class="text-gray-600 mb-3">Security protection requirements and implementation standards for critical information infrastructure</p>
                                <div class="text-sm text-gray-500">Updated: 2024-01-03 | Views: 756</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.bindPoliciesEvents();
    },

    // Bind policy resources page events
    bindPoliciesEvents() {
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.showPage(page);
            });
        });
    },

    // Show policy detail
    showPolicyDetail() {
        alert('Policy detail page functionality under development...\n\nThis will display complete policy document content, including:\n- Original policy text\n- Detailed interpretation\n- Compliance key points\n- Implementation recommendations\n- Original policy links');
    },

    // Show settings page
    showSettingsPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>Compliance Scanner Platform</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Project List</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">Policy Resources</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 font-medium">Settings</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>Logout
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <h2 class="text-3xl font-bold text-gray-800 mb-8">Account Settings</h2>
                            
                            <div class="border-b border-gray-200 pb-8 mb-8">
                                <h3 class="text-xl font-bold text-gray-800 mb-6">Personal Information</h3>
                                <div class="space-y-4">
                                    <div>
                                        <label for="displayName" class="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                                        <input type="text" id="displayName" value="Compliance Expert" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input type="email" id="email" value="expert@example.com" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <button onclick="app.updateProfile()" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                        Update Information
                                    </button>
                                </div>
                            </div>

                            <div class="border-b border-gray-200 pb-8 mb-8">
                                <h3 class="text-xl font-bold text-gray-800 mb-6">Change Password</h3>
                                <div class="space-y-4">
                                    <div>
                                        <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                        <input type="password" id="currentPassword" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                        <input type="password" id="newPassword" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                                        <input type="password" id="confirmPassword" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <button onclick="app.changePassword()" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                        Change Password
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button onclick="app.logout()" class="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                                    <i class="fas fa-sign-out-alt mr-2"></i>Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.bindSettingsEvents();
    },

    // Bind settings page events
    bindSettingsEvents() {
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.showPage(page);
            });
        });
    },

    // Update personal information
    updateProfile() {
        const displayName = document.getElementById('displayName').value;
        const email = document.getElementById('email').value;
        
        if (displayName && email) {
            alert('Personal information updated successfully!');
        } else {
            alert('Please fill in all information');
        }
    },

    // Change password
    changePassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match');
            return;
        }
        
        if (currentPassword && newPassword) {
            alert('Password changed successfully!');
            // Clear password fields
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        } else {
            alert('Please fill in all information');
        }
    }
});

