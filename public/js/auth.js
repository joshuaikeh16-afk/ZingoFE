/**
 * Kaidra Web - Auth JS Hook
 * Dispatches kaidra:auth-mode-changed and handles sign in / sign up state logic
 */

document.addEventListener('DOMContentLoaded', () => {
  let mode = 'signin';

  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');
  const submitBtn = document.getElementById('auth-submit-btn');
  const toggleBtn = document.getElementById('auth-toggle-mode');
  const errorMessage = document.getElementById('auth-error-message');
  const loadingIndicator = document.getElementById('auth-loading');
  const authTitle = document.getElementById('auth-title');
  const authSubtitle = document.getElementById('auth-subtitle');

  function updateModeUI(newMode) {
    mode = newMode;
    
    // Dispatch custom event as specified
    window.dispatchEvent(
      new CustomEvent('kaidra:auth-mode-changed', {
        detail: { mode },
      })
    );

    if (submitBtn) {
      submitBtn.textContent = mode === 'signin' ? 'Sign In' : 'Sign Up';
    }

    if (toggleBtn) {
      toggleBtn.textContent =
        mode === 'signin'
          ? "Don't have an account? Sign Up"
          : 'Already have an account? Sign In';
    }

    if (authTitle) {
      authTitle.textContent =
        mode === 'signin' ? 'Welcome Back' : 'Create Account';
    }

    if (authSubtitle) {
      authSubtitle.textContent =
        mode === 'signin'
          ? 'Sign in to access your feed & friends'
          : 'Join Kaidra to connect with anime & music fans';
    }

    if (errorMessage) {
      errorMessage.classList.add('hidden');
      errorMessage.textContent = '';
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextMode = mode === 'signin' ? 'signup' : 'signin';
      updateModeUI(nextMode);
    });
  }

  // Listen for externally fired kaidra:auth-mode-changed event
  window.addEventListener('kaidra:auth-mode-changed', (e) => {
    if (e.detail && e.detail.mode && e.detail.mode !== mode) {
      updateModeUI(e.detail.mode);
    }
  });

  // Demo submit handler for testing UI flows
  const form = document.querySelector('form') || submitBtn?.closest('form');
  const handleAuthSubmit = (e) => {
    if (e) e.preventDefault();

    if (errorMessage) {
      errorMessage.classList.add('hidden');
      errorMessage.textContent = '';
    }

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    if (!email || !password) {
      if (errorMessage) {
        errorMessage.textContent = 'Please provide both email and password.';
        errorMessage.classList.remove('hidden');
      }
      return;
    }

    if (password.length < 6) {
      if (errorMessage) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        errorMessage.classList.remove('hidden');
      }
      return;
    }

    // Show loading
    if (loadingIndicator) {
      loadingIndicator.classList.remove('hidden');
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
    }

    setTimeout(() => {
      if (loadingIndicator) {
        loadingIndicator.classList.add('hidden');
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }

      if (mode === 'signup') {
        window.location.href = '/onboarding.html';
      } else {
        // Redirect to onboarding or home demo
        window.location.href = '/onboarding.html';
      }
    }, 800);
  };

  if (submitBtn) {
    submitBtn.addEventListener('click', handleAuthSubmit);
  }
  if (form) {
    form.addEventListener('submit', handleAuthSubmit);
  }
});
