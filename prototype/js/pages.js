// 扩展ComplianceScanner类，添加其他页面功能
Object.assign(ComplianceScanner.prototype, {
    // 显示报告页面
    showReportPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>合规扫描工具平台</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">项目列表</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">政策资料</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">设置</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>退出登录
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <!-- 报告封面页 - 模块状态综述 -->
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-4">网站合规性分析报告</h2>
                        <p class="text-gray-600 mb-6">检查时间: 2024-01-15 14:30 | 网站: example.com</p>
                        
                        <div class="mb-8">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">合规模块状态综述</h3>
                            <p class="text-gray-600 mb-6">基于您的业务模式，我们分析了以下5个关键合规模块的现状和风险等级。点击模块标题可查看详细分析。</p>
                            
                            <div class="space-y-6">
                                <!-- 模块1: 基本工作 -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">基本工作 - 公司行政、人力</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-green-600 text-2xl">✅</span>
                                                <span class="text-green-700 font-semibold">低风险</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">公司注册、办公租赁、人力资源管理等基础行政事务，在中国有成熟的流程和标准。</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">门槛较低，流程标准化，适合外商进入</div>
                                            <a href="#module-1" class="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center">
                                                查看详情 <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- 模块2: 公司业务领域 -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">公司业务领域</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-yellow-600 text-2xl">⚠️</span>
                                                <span class="text-yellow-700 font-semibold">中等风险</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">某些行业存在外资准入限制或需要特殊许可，但通过合适的合作伙伴或业务结构调整可以克服。</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">存在法律壁垒，但可通过策略调整解决</div>
                                            <a href="#module-2" class="text-yellow-600 hover:text-yellow-700 text-sm font-medium inline-flex items-center">
                                                查看详情 <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- 模块3: 数据和IT合规 -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-red-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">数据和IT的合规需要</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-red-600 text-2xl">❌</span>
                                                <span class="text-red-700 font-semibold">高风险</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">数据本地化、网络安全审查、ICP许可等要求严格，需要专业的技术和法律支持。</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">技术要求高，法规复杂，需要专业团队支持</div>
                                            <a href="#module-3" class="text-red-600 hover:text-red-700 text-sm font-medium inline-flex items-center">
                                                查看详情 <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- 模块4: 业务经营许可 -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">业务经营是否需要办理特定牌照</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-yellow-600 text-2xl">⚠️</span>
                                                <span class="text-yellow-700 font-semibold">中等风险</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">根据业务性质可能需要金融、教育、医疗等特殊行业许可，申请流程较长但可完成。</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">需要时间投入，但通过合规流程可以获得</div>
                                            <a href="#module-4" class="text-yellow-600 hover:text-yellow-700 text-sm font-medium inline-flex items-center">
                                                查看详情 <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- 模块5: 专利或商标 -->
                                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-lg transition duration-300">
                                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                        <div class="flex items-center justify-between">
                                            <h4 class="text-xl font-bold text-gray-800">专利或商标</h4>
                                            <div class="flex items-center space-x-3">
                                                <span class="text-green-600 text-2xl">✅</span>
                                                <span class="text-green-700 font-semibold">低风险</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 mt-2">知识产权保护在中国有完善的法律体系，申请流程透明，保护力度不断加强。</p>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-gray-500">法律体系完善，流程标准化，保护力度强</div>
                                            <a href="#module-5" class="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center">
                                                查看详情 <i class="fas fa-arrow-right ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 状态说明 -->
                            <div class="mt-8 p-6 bg-gray-50 rounded-lg">
                                <h4 class="text-lg font-bold text-gray-800 mb-4">状态说明</h4>
                                <div class="grid md:grid-cols-3 gap-6">
                                    <div class="flex items-center">
                                        <span class="text-green-600 text-xl mr-3">✅</span>
                                        <div>
                                            <div class="font-semibold text-green-700">低风险</div>
                                            <div class="text-sm text-gray-600">门槛较低，容易合规，流程标准化</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-yellow-600 text-xl mr-3">⚠️</span>
                                        <div>
                                            <div class="font-semibold text-yellow-700">中等风险</div>
                                            <div class="text-sm text-gray-600">存在法律壁垒，但可通过策略调整解决</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-red-600 text-xl mr-3">❌</span>
                                        <div>
                                            <div class="font-semibold text-red-700">高风险</div>
                                            <div class="text-sm text-gray-600">要求严格，需要专业团队支持</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 详细模块分析 -->
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">详细模块分析</h3>
                        
                        <div class="space-y-8">
                            <!-- 模块1: 基本工作 -->
                            <div id="module-1" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">基本工作 - 公司行政、人力</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-green-600">✅</span>
                                            <span class="text-green-700 font-medium">低风险</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">公司注册、办公租赁、人力资源管理等基础行政事务，在中国有成熟的流程和标准。</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">公司注册流程</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">已合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">外资企业可以通过WFOE或JV形式设立，流程标准化</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-green-600 font-medium">低</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">办公租赁</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">已合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">商业地产租赁有完善的法律保护，流程透明</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-green-600 font-medium">低</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">人力资源设置</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">已合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">社保、公积金等有标准化的操作流程</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-green-600 font-medium">低</span></div>
                                    </div>
                                </div>
                            </div>

                            <!-- 模块2: 公司业务领域 -->
                            <div id="module-2" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">公司业务领域</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-yellow-600">⚠️</span>
                                            <span class="text-yellow-700 font-medium">中等风险</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">某些行业存在外资准入限制或需要特殊许可，但通过合适的合作伙伴或业务结构调整可以克服。</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">行业准入限制</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">需要优化</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">某些行业存在外资准入限制，需要寻找合适的合作伙伴</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-yellow-600 font-medium">中等</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">业务模式调整</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">需要优化</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">可能需要调整业务模式以适应中国法规要求</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-yellow-600 font-medium">中等</span></div>
                                    </div>
                                    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg">
                                        <h5 class="font-semibold mb-3 flex items-center">
                                            <i class="fas fa-crown mr-2"></i>
                                            付费内容 <span class="bg-white bg-opacity-20 px-2 py-1 rounded text-xs ml-2">PREMIUM</span>
                                        </h5>
                                        <div class="space-y-2 text-sm">
                                            <p><strong>所需行动:</strong> 评估业务模式，寻找合适的合作伙伴</p>
                                            <p><strong>推荐供应商:</strong> 专业法律咨询公司</p>
                                            <p><strong>完成难度:</strong> 中等 (需要策略调整)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 模块3: 数据和IT合规 -->
                            <div id="module-3" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">数据和IT的合规需要</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-red-600">❌</span>
                                            <span class="text-red-700 font-medium">高风险</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">数据本地化、网络安全审查、ICP许可等要求严格，需要专业的技术和法律支持。</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">数据本地化</span>
                                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">不合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">需要将数据存储在中国境内的服务器上</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-red-600 font-medium">高</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">网络安全审查</span>
                                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">不合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">需要通过网络安全审查，确保系统安全</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-red-600 font-medium">高</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">ICP许可</span>
                                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">不合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">需要申请ICP许可证才能在中国提供互联网服务</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-red-600 font-medium">高</span></div>
                                    </div>
                                    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg">
                                        <h5 class="font-semibold mb-3 flex items-center">
                                            <i class="fas fa-crown mr-2"></i>
                                            付费内容 <span class="text-red-200">PREMIUM</span>
                                        </h5>
                                        <div class="space-y-2 text-sm">
                                            <p><strong>所需行动:</strong> 建立符合中国法规的数据架构</p>
                                            <p><strong>推荐供应商:</strong> 阿里云、腾讯云、华为云</p>
                                            <p><strong>完成难度:</strong> 高 (需要技术架构重构)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 模块4: 业务经营许可 -->
                            <div id="module-4" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">业务经营是否需要办理特定牌照</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-yellow-600">⚠️</span>
                                            <span class="text-yellow-700 font-medium">中等风险</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">根据业务性质可能需要金融、教育、医疗等特殊行业许可，申请流程较长但可完成。</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">金融业务许可</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">需要优化</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">金融业务需要获得相关监管部门的许可</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-yellow-600 font-medium">中等</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">教育服务许可</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">需要优化</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">教育服务需要获得教育部门的许可和资质</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-yellow-600 font-medium">中等</span></div>
                                    </div>
                                    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg">
                                        <h5 class="font-semibold mb-3 flex items-center">
                                            <i class="fas fa-crown mr-2"></i>
                                            付费内容 <span class="bg-white bg-opacity-20 px-2 py-1 rounded text-xs ml-2">PREMIUM</span>
                                        </h5>
                                        <div class="space-y-2 text-sm">
                                            <p><strong>所需行动:</strong> 申请相关行业许可和资质</p>
                                            <p><strong>推荐供应商:</strong> 专业法律咨询公司</p>
                                            <p><strong>完成难度:</strong> 中等 (需要时间投入)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 模块5: 专利或商标 -->
                            <div id="module-5" class="border border-gray-200 rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-xl font-bold text-gray-800">专利或商标</h4>
                                        <div class="flex items-center space-x-3">
                                            <span class="text-green-600">✅</span>
                                            <span class="text-green-700 font-medium">低风险</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mt-2">知识产权保护在中国有完善的法律体系，申请流程透明，保护力度不断加强。</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">专利申请</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">已合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">专利申请流程标准化，保护力度强</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-green-600 font-medium">低</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">商标注册</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">已合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">商标注册流程透明，审查标准明确</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-green-600 font-medium">低</span></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg p-4">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-lg font-semibold text-gray-800">知识产权保护</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">已合规</span>
                                        </div>
                                        <p class="text-gray-600 mb-2">法律体系完善，侵权救济机制健全</p>
                                        <div class="text-sm text-gray-500">合规难度：<span class="text-green-600 font-medium">低</span></div>
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

    // 绑定报告页面事件
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

    // 显示政策资料页面
    showPoliciesPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>合规扫描工具平台</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">项目列表</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 font-medium">政策资料</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">设置</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>退出登录
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-8">政策资料库</h2>
                        <div class="space-y-6">
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">《网络安全法》实施细则</h3>
                                <p class="text-gray-600 mb-3">详细解读网络安全法的具体实施要求和操作指南</p>
                                <div class="text-sm text-gray-500">更新时间: 2024-01-10 | 阅读量: 1,234</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">《数据安全法》合规指南</h3>
                                <p class="text-gray-600 mb-3">企业数据安全合规的完整指南和最佳实践</p>
                                <div class="text-sm text-gray-500">更新时间: 2024-01-08 | 阅读量: 987</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">《个人信息保护法》解读</h3>
                                <p class="text-gray-600 mb-3">个人信息保护法的核心条款和合规要点分析</p>
                                <div class="text-sm text-gray-500">更新时间: 2024-01-05 | 阅读量: 1,567</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition duration-300 cursor-pointer" onclick="app.showPolicyDetail()">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">《关键信息基础设施安全保护条例》</h3>
                                <p class="text-gray-600 mb-3">关键信息基础设施的安全保护要求和实施标准</p>
                                <div class="text-sm text-gray-500">更新时间: 2024-01-03 | 阅读量: 756</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.bindPoliciesEvents();
    },

    // 绑定政策资料页面事件
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

    // 显示政策详情
    showPolicyDetail() {
        alert('政策详情页面功能开发中...\n\n这里将显示完整的政策文档内容，包括：\n- 政策原文\n- 详细解读\n- 合规要点\n- 实施建议\n- 原始政策链接');
    },

    // 显示设置页面
    showSettingsPage() {
        document.body.innerHTML = `
            <div class="bg-gray-50 text-gray-800 min-h-screen">
                <header class="bg-white shadow-sm sticky top-0 z-50">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                            <i class="fas fa-shield-alt text-blue-600 mr-3 text-2xl"></i>
                            <span>合规扫描工具平台</span>
                        </h1>
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="#" data-page="dashboard" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">项目列表</a>
                            <a href="#" data-page="policies" class="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">政策资料</a>
                            <a href="#" data-page="settings" class="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 font-medium">设置</a>
                        </nav>
                        <button onclick="app.logout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                            <i class="fas fa-sign-out-alt mr-2"></i>退出登录
                        </button>
                    </div>
                </header>

                <main class="container mx-auto px-6 py-8">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <h2 class="text-3xl font-bold text-gray-800 mb-8">账户设置</h2>
                            
                            <div class="border-b border-gray-200 pb-8 mb-8">
                                <h3 class="text-xl font-bold text-gray-800 mb-6">基本信息</h3>
                                <div class="space-y-4">
                                    <div>
                                        <label for="displayName" class="block text-sm font-medium text-gray-700 mb-2">显示名称</label>
                                        <input type="text" id="displayName" value="合规专家" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">邮箱地址</label>
                                        <input type="email" id="email" value="expert@example.com" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <button onclick="app.updateProfile()" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                        更新信息
                                    </button>
                                </div>
                            </div>

                            <div class="border-b border-gray-200 pb-8 mb-8">
                                <h3 class="text-xl font-bold text-gray-800 mb-6">修改密码</h3>
                                <div class="space-y-4">
                                    <div>
                                        <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-2">当前密码</label>
                                        <input type="password" id="currentPassword" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-2">新密码</label>
                                        <input type="password" id="newPassword" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">确认新密码</label>
                                        <input type="password" id="confirmPassword" required 
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <button onclick="app.changePassword()" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                        修改密码
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button onclick="app.logout()" class="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                                    <i class="fas fa-sign-out-alt mr-2"></i>退出登录
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.bindSettingsEvents();
    },

    // 绑定设置页面事件
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

    // 更新个人信息
    updateProfile() {
        const displayName = document.getElementById('displayName').value;
        const email = document.getElementById('email').value;
        
        if (displayName && email) {
            alert('个人信息更新成功！');
        } else {
            alert('请填写完整信息');
        }
    },

    // 修改密码
    changePassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (newPassword !== confirmPassword) {
            alert('新密码与确认密码不匹配');
            return;
        }
        
        if (currentPassword && newPassword) {
            alert('密码修改成功！');
            // 清空密码字段
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        } else {
            alert('请填写完整信息');
        }
    }
});

