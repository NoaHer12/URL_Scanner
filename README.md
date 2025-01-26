# URL Scanner

URL Scanner is a Chrome extension that scans the URL of websites using both the **Google Safe Browsing API** and **VirusTotal**, along with manual testing. It alerts users if there might be a problem with the website. The extension runs automatically for every website the user visits and also allows users to manually check URLs.

---

## Features
- **Automatic Scanning**: Automatically scans URLs for websites you visit and displays notifications about potential risks.
- **Manual URL Check**: Provides an option to check a URL manually through the popup interface.
- **Multiple Security Checks**: Utilizes Google Safe Browsing API, VirusTotal, and custom manual tests for comprehensive checks.

---

## How to Use the Scanner

### Automatic Scanning
1. After installing the extension (see installation instructions below), it will automatically scan the URL of any website you visit.
2. The extension will first check the URL with the **Google Safe Browsing API**.
3. Next, it runs manual tests.
4. If the URL seems suspicious, the extension will display a notification highlighting the issues.
5. If the URL is safe, a notification will confirm that everything looks good.

### Manual URL Check
1. Click the extension's icon in the browser toolbar to open the popup window.
2. Paste the URL you want to check into the input field.
3. The extension will scan the URL using VirusTotal and manual tests.
4. It will inform you if any issues are detected or if the URL is safe.

---

## Project Structure
This project uses **JavaScript**, **HTML**, and **CSS**. Below is a short explanation of the key files:

### Main JavaScript Files
- **`background.js`**: Contains the event listener that activates the tests on every URL of websites the user visits.
- **`checkUrl.js`**: Implements all manual checks for identifying potential issues in URLs.
- **`safeBrowsingCheck.js`**: Handles communication with the Google Safe Browsing API.
- **`virusTotalCheck.js`**: Handles communication with VirusTotal for additional URL scanning.
- **`popup.js`**: Manages the logic for the popup interface.

### Other Files
- **`popup.html`**: The HTML file for the popup interface.
- **`popup.css`**: Styles for the popup interface.

---

## Installation

### Step 1: Adjust Security Settings
To use the Google Safe Browsing API, you may need to adjust your security settings. Here’s how to do it:
1. Navigate to your browser settings.
2. Enable API access for Google Safe Browsing.
3. (Provide detailed steps here.)

### Step 2: Add the Extension to Your Browser
1. Visit the Chrome Web Store at [Insert URL here].
2. Search for “URL Scanner” or use the direct link.
3. Click “Add to Chrome” and follow the installation prompts.

---

## Usage Examples

### Example 1: Automatic URL Check
- Navigate to a website, and the extension will scan the URL automatically.
- A notification will appear with the results.

### Example 2: Manual URL Check
- Open the popup, paste the URL, and press the “Scan” button.
- Review the results displayed in the popup.

---

Thank you for using URL Scanner!
