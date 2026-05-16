const checkbox = document.getElementById('toggleShield');

// 1. Load the current saved state when popup opens
chrome.storage.local.get(['isEnabled'], (result) => {
  checkbox.checked = result.isEnabled || false;
});

// 2. Save the state when the user clicks the toggle
checkbox.addEventListener('change', () => {
  chrome.storage.local.set({ isEnabled: checkbox.checked });
});