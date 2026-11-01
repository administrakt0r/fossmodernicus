/**
 * FossModernicus Client Theme Interactive Scripts
 */

(function () {
  'use strict';

  // 0. Ensure FOSSBilling message and UI notification bridge is globally defined
  window.FOSSBilling = window.FOSSBilling || {};

  function restoreSubmitButtons() {
    document.querySelectorAll('button[data-loading-active="true"]').forEach(function (btn) {
      delete btn.dataset.loadingActive;
      btn.disabled = false;
      if (btn.dataset.origHtml) {
        btn.innerHTML = btn.dataset.origHtml;
      }
    });
  }

  window.FOSSBilling.message = function (message, type) {
    let alertType = type || 'info';
    if (alertType === 'error') alertType = 'danger';
    if (alertType === 'notice') alertType = 'info';

    // On error or danger, restore submit buttons immediately
    if (alertType === 'danger') {
      restoreSubmitButtons();
      if (typeof window.onOrderCheckoutError === 'function') {
        window.onOrderCheckoutError();
      }
    } else {
      setTimeout(restoreSubmitButtons, 600);
    }

    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      container.style.zIndex = '1090';
      document.body.appendChild(container);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-white border-0 bg-' + alertType + ' show shadow mb-2';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    const iconSvg = alertType === 'success'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="me-2 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>'
      : (alertType === 'danger'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="me-2 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="me-2 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>');

    toastEl.innerHTML =
      '<div class="d-flex p-2 align-items-center">' +
        iconSvg +
        '<div class="toast-body fw-medium py-1 px-1 flex-grow-1">' +
          message +
        '</div>' +
        '<button type="button" class="btn-close btn-close-white ms-2 me-1" data-bs-dismiss="toast" aria-label="Close"></button>' +
      '</div>';

    const closeBtn = toastEl.querySelector('.btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        toastEl.classList.remove('show');
        setTimeout(function () { toastEl.remove(); }, 300);
      });
    }

    container.appendChild(toastEl);

    setTimeout(function () {
      if (toastEl.parentNode) {
        toastEl.classList.remove('show');
        setTimeout(function () { toastEl.remove(); }, 400);
      }
    }, 5000);
  };

  window.FOSSBilling.ui = Object.assign(window.FOSSBilling.ui || {}, {
    notify: function (message, type) {
      window.FOSSBilling.message(message, type || 'info');
    }
  });

  // Flash message handler compatible with FOSSBilling reload/redirect notifications
  globalThis.flashMessage = function (options) {
    options = options || {};
    var message = options.message || '';
    var reload = options.reload || false;
    var type = options.type || 'info';
    var key = 'flash-message';

    if (!message) {
      try {
        var stored = sessionStorage.getItem(key);
        if (stored) {
          if (window.FOSSBilling && typeof window.FOSSBilling.message === 'function') {
            window.FOSSBilling.message(stored, type);
          }
          sessionStorage.removeItem(key);
        }
      } catch (e) {}
      return;
    }

    try {
      sessionStorage.setItem(key, message);
    } catch (e) {}

    if (reload === true) {
      window.location.reload();
    } else if (typeof reload === 'string' && reload) {
      window.location.assign(reload);
    }
  };

  try {
    globalThis.flashMessage({});
  } catch (e) {}

  // 1. Color Theme Mode (Light / Dark)
  const THEME_KEY = 'fossmodernicus_theme_mode';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY) || localStorage.getItem('fossmodernicus_theme');
    if (stored) return stored;
    const current = document.documentElement.getAttribute('data-theme');
    if (current) return current;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem(THEME_KEY, mode);
    localStorage.setItem('fossmodernicus_theme', mode);
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

    // 3. Theme Toggle Button & Initial Icon Sync
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(current);
      toggleBtn.addEventListener('click', function () {
        const cur = document.documentElement.getAttribute('data-theme') || 'light';
        const next = cur === 'dark' ? 'light' : 'dark';
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

    // 8. Visual loading state on form submissions
    document.addEventListener('submit', function (e) {
      const form = e.target;
      if (!form || !form.matches) return;
      const submitBtn = form.querySelector('button[type="submit"]:not([disabled])') ||
                        (form.id ? document.querySelector('button[type="submit"][form="' + form.id + '"]:not([disabled])') : null);
      if (submitBtn) {
        submitBtn.dataset.origHtml = submitBtn.innerHTML;
        submitBtn.dataset.loadingActive = 'true';
        const text = submitBtn.innerText.trim();
        let loadingText = 'Processing...';
        if (/save/i.test(text)) loadingText = 'Saving...';
        else if (/checkout|pay|complete order/i.test(text)) loadingText = 'Placing Order...';
        else if (/update/i.test(text)) loadingText = 'Updating...';
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span><span>' + loadingText + '</span>';
      }
    }, true);

    // 9. bfcache (Back/Forward Cache) recovery
    window.addEventListener('pageshow', function (event) {
      if (event.persisted) {
        restoreSubmitButtons();
      }
    });
  });
})();
