/**
 * Kaidra Web - Onboarding JS Hook
 * Handles username availability check, interest chip toggle, birthdate gate, avatar upload preview, and error messages.
 */

document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username-input');
  const availabilityEl = document.getElementById('username-availability');
  const birthdateInput = document.getElementById('birthdate-input');
  const avatarInput = document.getElementById('avatar-input');
  const avatarPreview = document.getElementById('avatar-preview');
  const submitBtn = document.getElementById('onboarding-submit-btn');
  const errorEl = document.getElementById('onboarding-error');
  const interestChips = document.querySelectorAll('.interest-chip');

  // Reserved or taken usernames for simulation
  const takenUsernames = ['admin', 'kaidra', 'claude', 'system', 'root', 'taken', 'mod'];

  // Username availability checking
  if (usernameInput) {
    let debounceTimer;
    usernameInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      const val = usernameInput.value.trim().toLowerCase();

      if (!val) {
        if (availabilityEl) {
          availabilityEl.textContent = '';
          availabilityEl.className = '';
        }
        return;
      }

      if (val.length < 3) {
        if (availabilityEl) {
          availabilityEl.textContent = 'Minimum 3 characters';
          availabilityEl.className = 'taken';
        }
        return;
      }

      if (availabilityEl) {
        availabilityEl.textContent = 'Checking...';
        availabilityEl.className = 'text-slate-400 text-xs animate-pulse';
      }

      debounceTimer = setTimeout(() => {
        if (!availabilityEl) return;

        if (takenUsernames.includes(val)) {
          availabilityEl.textContent = 'Already taken';
          availabilityEl.className = 'taken';
        } else {
          availabilityEl.textContent = 'Available';
          availabilityEl.className = 'available';
        }
      }, 400);
    });
  }

  // Interest Chips selection toggle
  interestChips.forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      chip.classList.toggle('selected');
    });
  });

  // Avatar file input preview
  if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (avatarPreview) {
            avatarPreview.src = event.target.result;
            avatarPreview.classList.remove('hidden');
          }
          const placeholder = document.getElementById('avatar-placeholder');
          if (placeholder) {
            placeholder.classList.add('hidden');
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Submit & Validation Handler
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (errorEl) {
        errorEl.classList.add('hidden');
        errorEl.textContent = '';
      }

      const username = usernameInput ? usernameInput.value.trim() : '';
      const birthdateStr = birthdateInput ? birthdateInput.value : '';

      // Check username
      if (!username) {
        showError('Please choose a username.');
        return;
      }

      if (availabilityEl && availabilityEl.classList.contains('taken')) {
        showError('Please select an available username.');
        return;
      }

      // Check birthdate (13+ age gate)
      if (!birthdateStr) {
        showError('Please enter your birthdate.');
        return;
      }

      const birthdate = new Date(birthdateStr);
      const today = new Date();
      let age = today.getFullYear() - birthdate.getFullYear();
      const m = today.getMonth() - birthdate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
      }

      if (isNaN(age) || age < 13) {
        showError('You must be at least 13 years old to use Kaidra.');
        return;
      }

      // Check selected interests
      const selectedChips = document.querySelectorAll('.interest-chip.selected');
      if (selectedChips.length === 0) {
        showError('Please select at least 1 interest to tailor your feed.');
        return;
      }

      // Success
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving profile...';
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        // Show success modal or redirect
        const modal = document.getElementById('onboarding-success-modal');
        if (modal) {
          modal.classList.remove('hidden');
        } else {
          alert('Onboarding complete! Welcome to Kaidra.');
        }
      }, 700);
    });
  }

  function showError(msg) {
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.remove('hidden');
    }
  }
});
