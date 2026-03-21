/**
 * theme.js — DevOps Portfolio Theme Management
 * Handles dark/light mode toggle with localStorage persistence.
 */

(function () {
  // Apply saved theme immediately (prevent flash)
  var saved = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.className = saved;
  updateToggleIcon(saved);

  function updateToggleIcon(theme) {
    var icon = document.getElementById('theme-icon');
    if (!icon) return;
    icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  }

  window.toggleTheme = function () {
    var current = document.documentElement.className;
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.className = next;
    localStorage.setItem('portfolio-theme', next);
    updateToggleIcon(next);
  };

  // Run after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    updateToggleIcon(document.documentElement.className);
  });
})();
