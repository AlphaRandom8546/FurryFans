document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('#tocopy');
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toast-icon');
    const toastMessage = document.getElementById('toast-message');

    function showToast(message, isSuccess) {
        // 设置图标和消息
        toastIcon.className = isSuccess ? 'fas fa-check-circle toast-icon' : 'fas fa-times-circle toast-icon';
        toastMessage.textContent = message;
        
        // 设置样式
        toast.className = isSuccess ? 'toast-notification toast-success' : 'toast-notification toast-error';
        
        // 显示弹窗
        toast.classList.add('show');
        
        // 2秒后自动隐藏
        setTimeout(() => {
            toast.classList.remove('show');
        }, 750);
    }

    // 为每个邮箱链接添加点击事件
    emailLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const textToCopy = this.textContent;
            
            navigator.clipboard.writeText(textToCopy)
                .then(function() {
                    showToast('复制成功！', true);
                })
                .catch(function(err) {
                    showToast('复制失败！', false);
                    console.error('Failed:', err);
                });
        });
    });
});