function switchTab(tabNumber, button) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    button.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(c => {
        c.classList.add('hidden');
    });

    const selected = document.getElementById('content' + tabNumber);
    selected.classList.remove('hidden');
    selected.style.animation = 'none';
    
    requestAnimationFrame(() => {
        selected.style.animation = 'fadeSlide 0.4s ease';
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach((tab, index) => {
        if (!tab.hasAttribute('data-tab')) {
            tab.setAttribute('data-tab', index + 1);
        }
        
        tab.addEventListener('click', function() {
            const tabNumber = parseInt(this.getAttribute('data-tab'));
            switchTab(tabNumber, this);
        });
    });
    
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) {
        const firstTab = tabs[0];
        if (firstTab) {
            firstTab.classList.add('active');
            const firstContent = document.getElementById('content1');
            if (firstContent) {
                firstContent.classList.remove('hidden');
            }
        }
    }
});