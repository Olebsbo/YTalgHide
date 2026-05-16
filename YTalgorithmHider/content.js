const updateUI = () => {
  chrome.storage.local.get(['isEnabled'], (result) => {
    if (result.isEnabled) {
      document.body.classList.add('hiding-enabled');
    } else {
      document.body.classList.remove('hiding-enabled');
    }
  });
};

// 1. Run when the page first loads
// Using a small timeout ensures the <body> element exists
setTimeout(updateUI, 500);

// 2. Listen for changes made in the popup toggle
chrome.storage.onChanged.addListener((changes) => {
  if (changes.isEnabled) {
    updateUI();
  }
});

// 3. Handle YouTube's internal navigation
window.addEventListener('yt-navigate-finish', updateUI);