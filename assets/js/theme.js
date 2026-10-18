/**
 * FossModernicus Client Theme Interactive Scripts
 */

(function () {
  'use strict';

  // 1. Color Theme Mode (Light / Dark)
  const THEME_KEY = 'fossmodernicus_theme_mode';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem(THEME_KEY, mode);
    const icon = document.querySelector('.theme-toggle-icon');
    if (icon) {
      icon.innerHTML = mode === 'dark' 
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  // Initialize theme on load
  const initialTheme = getPreferredTheme();
  setTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', function () {
    // 2. Initialize FOSSBilling API Form and Link Listeners
    const api = typeof API !== 'undefined' ? API : (window.FOSSBilling ? window.FOSSBilling.api : null);
    if (api) {
      if (typeof api._apiForm === 'function') {
        api._apiForm();
      }
      if (typeof api._apiLink === 'function') {
        api._apiLink();
      }
    }

    // 3. Theme Toggle Button
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }

    // 4. Mobile Sidebar Drawer & Backdrop
    const mobileToggle = document.getElementById('theme-mobile-toggle');
    const sidebar = document.getElementById('theme-sidebar');
    const backdrop = document.getElementById('theme-backdrop');

    function toggleSidebar() {
      if (!sidebar) return;
      const isOpen = sidebar.classList.contains('is-open');
      if (isOpen) {
        sidebar.classList.remove('is-open');
        if (backdrop) backdrop.classList.remove('is-open');
      } else {
        sidebar.classList.add('is-open');
        if (backdrop) backdrop.classList.add('is-open');
      }
    }

    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleSidebar);
    }
    if (backdrop) {
      backdrop.addEventListener('click', toggleSidebar);
    }

    // 5. User Dropdown Toggle
    const userBtn = document.getElementById('theme-user-dropdown-btn');
    const userMenu = document.getElementById('theme-user-dropdown-menu');

    if (userBtn && userMenu) {
      userBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        userMenu.classList.toggle('d-none');
      });

      document.addEventListener('click', function (e) {
        if (!userMenu.contains(e.target) && e.target !== userBtn) {
          userMenu.classList.add('d-none');
        }
      });
    }

    // 6. Auto-dismiss alerts after 6 seconds
    const dismissibleAlerts = document.querySelectorAll('.theme-alert-dismissible');
    dismissibleAlerts.forEach(function (alert) {
      setTimeout(function () {
        alert.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-8px)';
        setTimeout(function () {
          alert.remove();
        }, 400);
      }, 6000);
    });

    // 7. Initialize Bootstrap / Tabler tooltips
    if (typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip === 'function') {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.forEach(function (el) {
        new bootstrap.Tooltip(el);
      });
    }
  });
})();
