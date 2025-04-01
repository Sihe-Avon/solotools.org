// 表单处理脚本

// 存储提交的工具信息
let submittedTools = [];

// 存储订阅的邮箱
let subscribedEmails = [];

// 初始化表单处理
function initFormHandlers() {
    // 提交工具表单处理
    const submitToolForm = document.getElementById('submit-form');
    if (submitToolForm) {
        submitToolForm.addEventListener('submit', handleToolSubmission);
    }
    
    // 邮件订阅表单处理
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', handleEmailSubscription);
    }
    
    // 加载管理页面数据
    loadAdminData();
}

// 处理工具提交
function handleToolSubmission(e) {
    e.preventDefault();
    
    // 获取表单数据
    const toolData = {
        name: document.getElementById('tool-name').value,
        website: document.getElementById('tool-website').value,
        category: document.getElementById('tool-category').value,
        subcategory: document.getElementById('tool-subcategory').value,
        description: document.getElementById('tool-description').value,
        pricing: document.getElementById('tool-pricing').value,
        tags: document.getElementById('tool-tags').value,
        submitterName: document.getElementById('submitter-name').value,
        submitterEmail: document.getElementById('submitter-email').value,
        submitterRelationship: document.getElementById('submitter-relationship').value,
        additionalComments: document.getElementById('additional-comments').value,
        submissionDate: new Date().toISOString()
    };
    
    // 保存到本地存储
    submittedTools.push(toolData);
    localStorage.setItem('submittedTools', JSON.stringify(submittedTools));
    
    // 显示成功消息
    document.getElementById('submit-form').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');
    
    // 滚动到成功消息
    document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
    
    // 如果在管理页面，更新显示
    updateAdminToolsDisplay();
}

// 处理邮件订阅
function handleEmailSubscription(e) {
    e.preventDefault();
    
    // 获取邮箱
    const email = document.getElementById('subscribe-email').value;
    
    // 检查邮箱是否已存在
    if (subscribedEmails.includes(email)) {
        alert('This email is already subscribed!');
        return;
    }
    
    // 保存到本地存储
    subscribedEmails.push(email);
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
    
    // 重置表单
    document.getElementById('subscribe-email').value = '';
    
    // 显示成功消息
    const successMessage = document.createElement('div');
    successMessage.className = 'text-green-600 mt-2';
    successMessage.textContent = 'Thank you for subscribing!';
    
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.appendChild(successMessage);
    
    // 3秒后移除成功消息
    setTimeout(() => {
        subscribeForm.removeChild(successMessage);
    }, 3000);
    
    // 如果在管理页面，更新显示
    updateAdminEmailsDisplay();
}

// 加载管理页面数据
function loadAdminData() {
    // 从本地存储加载数据
    const storedTools = localStorage.getItem('submittedTools');
    if (storedTools) {
        submittedTools = JSON.parse(storedTools);
    }
    
    const storedEmails = localStorage.getItem('subscribedEmails');
    if (storedEmails) {
        subscribedEmails = JSON.parse(storedEmails);
    }
    
    // 更新管理页面显示
    updateAdminToolsDisplay();
    updateAdminEmailsDisplay();
}

// 更新管理页面工具显示
function updateAdminToolsDisplay() {
    const toolsContainer = document.getElementById('admin-tools-container');
    if (!toolsContainer) return;
    
    toolsContainer.innerHTML = '';
    
    if (submittedTools.length === 0) {
        toolsContainer.innerHTML = '<p class="text-gray-500">No tools submitted yet.</p>';
        return;
    }
    
    submittedTools.forEach((tool, index) => {
        const toolCard = document.createElement('div');
        toolCard.className = 'bg-white rounded-lg shadow-md p-4 mb-4';
        
        toolCard.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold">${tool.name}</h3>
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${tool.category}</span>
            </div>
            <p class="text-gray-600 mb-2">${tool.description}</p>
            <div class="text-sm text-gray-500 mb-2">
                <p><strong>Website:</strong> <a href="${tool.website}" target="_blank" class="text-primary">${tool.website}</a></p>
                <p><strong>Pricing:</strong> ${tool.pricing}</p>
                <p><strong>Submitted by:</strong> ${tool.submitterName || 'Anonymous'} (${tool.submitterEmail})</p>
                <p><strong>Submission Date:</strong> ${new Date(tool.submissionDate).toLocaleDateString()}</p>
            </div>
            <div class="flex justify-end">
                <button class="text-red-600 hover:text-red-800" onclick="deleteToolSubmission(${index})">
                    <i class="fas fa-trash-alt"></i> Delete
                </button>
            </div>
        `;
        
        toolsContainer.appendChild(toolCard);
    });
}

// 更新管理页面邮箱显示
function updateAdminEmailsDisplay() {
    const emailsContainer = document.getElementById('admin-emails-container');
    if (!emailsContainer) return;
    
    emailsContainer.innerHTML = '';
    
    if (subscribedEmails.length === 0) {
        emailsContainer.innerHTML = '<p class="text-gray-500">No email subscriptions yet.</p>';
        return;
    }
    
    const emailList = document.createElement('ul');
    emailList.className = 'divide-y divide-gray-200';
    
    subscribedEmails.forEach((email, index) => {
        const emailItem = document.createElement('li');
        emailItem.className = 'py-3 flex justify-between items-center';
        
        emailItem.innerHTML = `
            <span>${email}</span>
            <button class="text-red-600 hover:text-red-800" onclick="deleteEmailSubscription(${index})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        emailList.appendChild(emailItem);
    });
    
    emailsContainer.appendChild(emailList);
}

// 删除工具提交
function deleteToolSubmission(index) {
    if (confirm('Are you sure you want to delete this tool submission?')) {
        submittedTools.splice(index, 1);
        localStorage.setItem('submittedTools', JSON.stringify(submittedTools));
        updateAdminToolsDisplay();
    }
}

// 删除邮箱订阅
function deleteEmailSubscription(index) {
    if (confirm('Are you sure you want to delete this email subscription?')) {
        subscribedEmails.splice(index, 1);
        localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
        updateAdminEmailsDisplay();
    }
}

// 导出数据为CSV
function exportToCSV(dataType) {
    let data, filename, headers;
    
    if (dataType === 'tools') {
        data = submittedTools;
        filename = 'tool-submissions.csv';
        headers = ['Name', 'Website', 'Category', 'Description', 'Pricing', 'Submitter Email', 'Submission Date'];
    } else if (dataType === 'emails') {
        data = subscribedEmails.map(email => ({ email }));
        filename = 'email-subscriptions.csv';
        headers = ['Email'];
    } else {
        return;
    }
    
    // 创建CSV内容
    let csvContent = headers.join(',') + '\n';
    
    if (dataType === 'tools') {
        data.forEach(item => {
            const row = [
                `"${item.name.replace(/"/g, '""')}"`,
                `"${item.website.replace(/"/g, '""')}"`,
                `"${item.category.replace(/"/g, '""')}"`,
                `"${item.description.replace(/"/g, '""')}"`,
                `"${item.pricing.replace(/"/g, '""')}"`,
                `"${item.submitterEmail.replace(/"/g, '""')}"`,
                `"${item.submissionDate}"`
            ];
            csvContent += row.join(',') + '\n';
        });
    } else {
        data.forEach(item => {
            csvContent += `"${item.email.replace(/"/g, '""')}"\n`;
        });
    }
    
    // 创建下载链接
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 导出所有数据
window.exportToolsToCSV = function() {
    exportToCSV('tools');
};

window.exportEmailsToCSV = function() {
    exportToCSV('emails');
};

// 删除函数
window.deleteToolSubmission = deleteToolSubmission;
window.deleteEmailSubscription = deleteEmailSubscription;

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', initFormHandlers);
