document.addEventListener('DOMContentLoaded', () => {
    if (typeof currentLang === 'undefined') {
      currentLang = localStorage.getItem('preferredLang') || 'zh-tw';
    }
    if (typeof currentPersonaGlobal === 'undefined') {
        currentPersonaGlobal = 'stellapaw'; // Default if not set by common.js (should be)
    }

    if (document.body.classList.contains('xueru-theme')) {
        const tabButtons = document.querySelectorAll('.xueru-tab-button');
        const tabPanes = document.querySelectorAll('.xueru-tab-pane');

        const activateTab = (targetTabButton) => {
            if (!targetTabButton) return;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            targetTabButton.classList.add('active');
            const tabId = targetTabButton.dataset.tab;
            const activePane = document.getElementById(`xueru-tab-content-${tabId}`);
            if (activePane) {
                activePane.classList.add('active');
            }
        };

        tabButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                activateTab(event.currentTarget);
            });
        });

        const initialTabButton = document.querySelector('.xueru-tab-button[data-tab="home"]');
        if (initialTabButton) {
            activateTab(initialTabButton);
        }
    }
    
    if (typeof updateContentInternal === 'function') {
         updateContentInternal(currentLang, currentPersonaGlobal);
    }
});