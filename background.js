import { checkUrl } from "./checkUrl.js";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// Listen for page load completion
chrome.webNavigation.onCompleted.addListener(async (details) => {
  const currentUrl = details.url;
  console.log("Navigation detected:", currentUrl);

  if (details.frameId === 0) {  // Only for top-level frames
    const issues = await checkUrl(currentUrl);  // Wait for issues to be fetched
    console.log("Detected Issues:", issues);  // Debugging

    if (issues.length > 0) {
      chrome.storage.local.set({ warnings: issues }, () => {
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("warningsPage.html") });
      });
    }
     else {
      showNotification("Everything looks good!", false);
    }
  }
}, { url: [{ schemes: ['http', 'https'] }] });


// Function to show a notification
function showNotification(message, isMalicious) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "/icon.png", // Ensure this path is correct and icon exists
    title: isMalicious ? "Warning: URL Issues" : "URL Check Passed",
    message: message,
    priority: 2, // Set the priority to ensure it shows prominently
  });
}
