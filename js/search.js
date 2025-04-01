// Tool Data Structure
const allTools = [
    // Content Creation Tools
    {
        name: "ChatGPT",
        category: "content-creation",
        subcategory: "ai-chat",
        description: "OpenAI's conversational AI model for content creation, answering questions, and generating creative ideas",
        price: "Free Tier",
        link: "https://chat.openai.com",
        tags: ["writing", "ai", "chat", "free"]
    },
    {
        name: "Grok",
        category: "content-creation",
        subcategory: "ai-chat",
        description: "Real-time AI assistant with internet access providing up-to-date information",
        price: "Subscription",
        link: "https://grok.x.ai",
        tags: ["writing", "ai", "chat", "subscription"]
    },
    {
        name: "KlingAI",
        category: "content-creation",
        subcategory: "media-creation",
        description: "AI-powered content creation tool focused on marketing and social media content",
        price: "Free Trial",
        link: "https://kling.ai",
        tags: ["content", "marketing", "social media", "trial"]
    },
    {
        name: "Midjourney",
        category: "content-creation",
        subcategory: "media-creation",
        description: "AI image generation tool that creates high-quality images from text descriptions",
        price: "Paid",
        link: "https://www.midjourney.com",
        tags: ["image", "ai", "generation", "paid"]
    },
    
    // Development Tools
    {
        name: "TRAE",
        category: "development",
        subcategory: "ide",
        description: "AI-enhanced code editor offering intelligent code completion and suggestions",
        price: "Free Tier",
        link: "https://trae.ai",
        tags: ["coding", "ide", "ai", "free"]
    },
    {
        name: "Cursor",
        category: "development",
        subcategory: "ide",
        description: "AI-powered code editor that understands and generates complex code",
        price: "Free Tier",
        link: "https://cursor.sh",
        tags: ["coding", "ide", "ai", "free"]
    },
    {
        name: "Warp",
        category: "development",
        subcategory: "command-line",
        description: "Modern terminal with AI-assisted features and team collaboration capabilities",
        price: "Free Tier",
        link: "https://www.warp.dev",
        tags: ["terminal", "command line", "ai", "free"]
    },
    {
        name: "Deta.Surf",
        category: "development",
        subcategory: "browser",
        description: "AI-driven browser that helps developers work more efficiently",
        price: "Free",
        link: "https://deta.space",
        tags: ["browser", "ai", "development", "free"]
    },
    
    // Design Tools
    {
        name: "Canva",
        category: "design",
        subcategory: "all-in-one",
        description: "All-in-one design platform with AI features for creating various visual content",
        price: "Free Tier",
        link: "https://www.canva.com",
        tags: ["design", "graphics", "templates", "free"]
    },
    {
        name: "Figma",
        category: "design",
        subcategory: "all-in-one",
        description: "Collaborative design tool with AI features for UI/UX design",
        price: "Free Tier",
        link: "https://www.figma.com",
        tags: ["design", "ui", "ux", "free"]
    },
    {
        name: "Looka",
        category: "design",
        subcategory: "logo",
        description: "AI-driven logo design tool that generates professional brand identities",
        price: "Paid",
        link: "https://looka.com",
        tags: ["logo", "branding", "ai", "paid"]
    },
    {
        name: "Runway",
        category: "design",
        subcategory: "motion",
        description: "AI video editing tool for creating and editing video content",
        price: "Free Trial",
        link: "https://runwayml.com",
        tags: ["video", "motion", "ai", "trial"]
    },
    
    // Marketing and SEO Tools
    {
        name: "Ahrefs",
        category: "marketing",
        subcategory: "seo",
        description: "Comprehensive SEO toolset for keyword research, competitor analysis, and backlink tracking",
        price: "7-day Trial $7",
        link: "https://ahrefs.com",
        tags: ["seo", "keywords", "backlinks", "paid"]
    },
    {
        name: "SEMrush",
        category: "marketing",
        subcategory: "seo",
        description: "All-in-one marketing toolkit for SEO, content marketing, competitor research, and more",
        price: "7-day Trial",
        link: "https://www.semrush.com",
        tags: ["seo", "marketing", "content", "trial"]
    },
    {
        name: "Buffer",
        category: "marketing",
        subcategory: "social-media",
        description: "Social media scheduling and analytics platform for multiple platforms",
        price: "Free Tier",
        link: "https://buffer.com",
        tags: ["social media", "scheduling", "analytics", "free"]
    },
    {
        name: "Mailchimp",
        category: "marketing",
        subcategory: "email",
        description: "All-in-one email marketing platform with automation and landing page features",
        price: "Free Tier",
        link: "https://mailchimp.com",
        tags: ["email", "marketing", "automation", "free"]
    },
    
    // Customer Support Tools
    {
        name: "Intercom",
        category: "customer-support",
        subcategory: "chatbots",
        description: "AI-driven customer messaging platform with chatbot and support automation features",
        price: "Free Trial",
        link: "https://www.intercom.com",
        tags: ["chat", "support", "automation", "trial"]
    },
    {
        name: "Zendesk",
        category: "customer-support",
        subcategory: "helpdesk",
        description: "Complete customer service platform with ticket system and AI features",
        price: "Free Trial",
        link: "https://www.zendesk.com",
        tags: ["helpdesk", "tickets", "support", "trial"]
    },
    {
        name: "Document360",
        category: "customer-support",
        subcategory: "knowledge-base",
        description: "Knowledge base platform for creating self-service portals and documentation",
        price: "Free Trial",
        link: "https://document360.com",
        tags: ["knowledge base", "documentation", "self-service", "trial"]
    },
    
    // Website Generation Tools
    {
        name: "Framer",
        category: "website-generation",
        subcategory: "website",
        description: "AI-driven website builder for creating professional websites quickly",
        price: "Free Tier",
        link: "https://www.framer.com",
        tags: ["website", "builder", "ai", "free"]
    },
    {
        name: "Webflow",
        category: "website-generation",
        subcategory: "website",
        description: "No-code website building platform with professional design features",
        price: "Free Tier",
        link: "https://webflow.com",
        tags: ["website", "no-code", "design", "free"]
    },
    
    // Productivity Tools
    {
        name: "Raycast",
        category: "productivity",
        subcategory: "system",
        description: "Mac productivity tool for quickly accessing apps and services with shortcuts",
        price: "Free Tier",
        link: "https://www.raycast.com",
        tags: ["productivity", "mac", "launcher", "free"]
    },
    {
        name: "PixPin",
        category: "productivity",
        subcategory: "media",
        description: "Screen capture and annotation tool for improving communication efficiency",
        price: "Free",
        link: "https://pixpin.app",
        tags: ["screenshot", "annotation", "productivity", "free"]
    },
    {
        name: "Notion",
        category: "productivity",
        subcategory: "efficiency",
        description: "All-in-one workspace for notes, tasks, and knowledge management",
        price: "Free Tier",
        link: "https://www.notion.so",
        tags: ["notes", "tasks", "knowledge", "free"]
    }
];

// Search Function
function searchTools(query) {
    if (!query || query.trim() === '') {
        return allTools;
    }
    
    query = query.toLowerCase().trim();
    
    return allTools.filter(tool => {
        return tool.name.toLowerCase().includes(query) ||
               tool.description.toLowerCase().includes(query) ||
               tool.tags.some(tag => tag.toLowerCase().includes(query));
    });
}

// Filter Function
function filterTools(filters) {
    let filteredTools = [...allTools];
    
    // Filter by category
    if (filters.category && filters.category !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.category === filters.category);
    }
    
    // Filter by subcategory
    if (filters.subcategory && filters.subcategory !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.subcategory === filters.subcategory);
    }
    
    // Filter by price
    if (filters.price && filters.price !== 'all') {
        filteredTools = filteredTools.filter(tool => {
            if (filters.price === 'free') {
                return tool.price.toLowerCase().includes('free');
            } else if (filters.price === 'paid') {
                return tool.price.toLowerCase().includes('paid') || 
                       tool.price.toLowerCase().includes('subscription') ||
                       tool.price.toLowerCase().includes('trial');
            }
            return true;
        });
    }
    
    if(filters.tools){
        filteredTools = filters.tools;
    }
    
    return filteredTools;
}

// Render Tool Cards
function renderToolCards(tools, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (tools.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8">
                <p class="text-gray-500 text-lg">No matching tools found. Please try different search terms or filter conditions.</p>
            </div>
        `;
        return;
    }
    
    tools.forEach(tool => {
        // Set gradient color based on category
        let gradientClass = 'from-indigo-500 to-purple-500';
        if (tool.category === 'marketing') gradientClass = 'from-blue-500 to-cyan-500';
        if (tool.category === 'design') gradientClass = 'from-pink-500 to-rose-500';
        if (tool.category === 'development') gradientClass = 'from-amber-500 to-orange-500';
        if (tool.category === 'customer-support') gradientClass = 'from-emerald-500 to-teal-500';
        if (tool.category === 'productivity') gradientClass = 'from-violet-500 to-purple-500';
        
        // Set price tag style based on price
        let priceClass = 'bg-amber-100 text-amber-800';
        if (tool.price.toLowerCase().includes('free tier')) priceClass = 'bg-green-100 text-green-800';
        
        // Create tool card HTML
        const cardHTML = `
            <div class="tool-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div class="h-40 bg-gradient-to-r ${gradientClass} flex items-center justify-center">
                    <i class="fas fa-${tool.category === 'content-creation' ? 'pen-nib' : 
                                        tool.category === 'marketing' ? 'chart-line' : 
                                        tool.category === 'development' ? 'code' : 
                                        tool.category === 'design' ? 'image' : 
                                        tool.category === 'customer-support' ? 'headset' : 
                                        tool.category === 'website-generation' ? 'globe' : 'bolt'} text-white text-5xl"></i>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-semibold">${tool.name}</h3>
                        <span class="${priceClass} text-xs px-2 py-1 rounded-full">${tool.price}</span>
                    </div>
                    <p class="text-gray-600 mb-4">${tool.description}</p>
                    <div class="flex flex-wrap gap-2 mt-4 mb-4">
                        ${tool.tags.map(tag => `<span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                    <div class="flex justify-between items-center mt-6">
                        <span class="text-sm text-gray-500">Category: ${tool.category.replace('-', ' ')}</span>
                        <a href="${tool.link}" target="_blank" class="text-primary hover:text-indigo-700 font-medium">
                            Visit <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    });
}

// Initialize Search Page
function initSearchPage() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchButton = document.getElementById('search-button');
    const resetButton = document.getElementById('reset-button');
    const resultsContainer = document.getElementById('search-results');
    
    // Show all tools when page loads
    renderToolCards(allTools, 'search-results');
    
    // Search button click event
    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        const filters = {
            category: categoryFilter.value,
            price: priceFilter.value
        };
        
        // Search and filter tools
        let results = searchTools(query);
        results = filterTools({...filters, tools: results});
        
        renderToolCards(results, 'search-results');
    });
    
    // Reset button click event
    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = 'all';
        priceFilter.value = 'all';
        
        renderToolCards(allTools, 'search-results');
    });
    
    // Input field enter event
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Export functions for other pages
window.searchTools = searchTools;
window.filterTools = filterTools;
window.renderToolCards = renderToolCards;
window.initSearchPage = initSearchPage;
