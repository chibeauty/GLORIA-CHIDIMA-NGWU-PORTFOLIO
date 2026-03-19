/* Theme Toggle Functionality (moved from js/theme.js) */

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.body = document.body;
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
        this.updateThemeIcon();
    }

    getStoredTheme() { return localStorage.getItem('theme'); }

    getSystemTheme() { return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }

    setTheme(theme) { this.currentTheme = theme; this.body.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); this.updateThemeIcon(); }

    toggleTheme() { const newTheme = this.currentTheme === 'light' ? 'dark' : 'light'; this.setTheme(newTheme); this.body.style.transition = 'all 0.3s ease'; setTimeout(() => { this.body.style.transition = ''; }, 300); }

    updateThemeIcon() { if (this.themeToggle) { const icon = this.themeToggle.querySelector('i'); if (icon) { icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun'; } } }

    bindEvents() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
                this.animateToggle();
            });
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    animateToggle() { if (this.themeToggle) { this.themeToggle.style.transform = 'rotate(360deg)'; setTimeout(() => { this.themeToggle.style.transform = ''; }, 300); } }

    getCurrentTheme() { return this.currentTheme; }

    isDarkTheme() { return this.currentTheme === 'dark'; }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});
