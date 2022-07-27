document.addEventListener('DOMContentLoaded', () => {
    const bodyEl = document.body;
    const modeSwitch = document.getElementById('mode-switch');
    const modeSpan = document.getElementById('mode');

    modeSwitch.addEventListener('change', e => {
        const isDarkMode = e.target.checked;
        if (isDarkMode) {
            bodyEl.classList.add('dark-mode');
            modeSpan.textContent = "light"
        } else {
            bodyEl.classList.remove('dark-mode');
            modeSpan.textContent = "dark"
        }
    });
});