document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['warnings'], (result) => {
      if (result.warnings) {
        setWarnings(result.warnings);
      }
    });
  });
  
  export function setWarnings(warnings) {
    const warningsDiv = document.getElementById('warnings');
    warningsDiv.textContent = `Warnings: ${warnings.join(', ')}`;
  }
  