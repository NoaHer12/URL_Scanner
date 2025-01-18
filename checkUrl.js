
// main function - run test on url and return issues array
export function checkUrl(urlString) {
    const url = new URL(urlString);
    let issues = [];
  
    // Example heuristic checks
    if (isIpAddress(url.hostname)) {
      issues.push("The site uses an IP address instead of a domain name /n");
    }
    if (url.hostname.split('.').length > 3) {
      issues.push("The site has too many subdomains /n");
    }
    if (/[#@\$%]/.test(url.href)) {
      issues.push("The site has suspicious characters /n");
    }
    if (url.href.length > 300) {
      issues.push("The URL is too long /n");
    }
    if (isMaliciousCountry(url.hostname)) {
      issues.push("The site is from a potentially malicious country /n");
    }
    
    if (checkUrlWithVirusTotal(url.href)) {
      issues.push("Accordint to VirusTotal the URL is probably malicious /n");
    }

    return issues;
  }
  
  
  // Function to check if the hostname is an IP address
  function isIpAddress(hostname) {
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Pattern.test(hostname);
  }
  
  // Function to check if the country is a malicious country based on TLD or domain suffix
  function isMaliciousCountry(hostname) {
    const maliciousCountries = ['.eg', '.ps', '.tr', '.iq', '.ir', '.ye', '.lb', '.sy', '.kp'];  // Added North Korea (.kp)
    for (const country of maliciousCountries) {
      if (hostname.endsWith(country)) {
        return true;
      }
    }
    return false;
  }
  
  export async function checkUrlWithVirusTotal(url) {
    const apiKey = 'ee56d4d1891d292147941ada817f71ff68c27efab64fd85fd66c04d4a23a0783';
    try {
      const submitUrl = 'https://www.virustotal.com/api/v3/urls';
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'x-apikey': apiKey,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${encodeURIComponent(url)}`,
      });
      
      const responseData = await response.json();
      if (!response.ok || !responseData.data) {
        return false;
      }
  
      // Extract the URL scan ID from the response
      const urlId = responseData.data.id;
  
      // Fetch analysis results using the URL scan ID
      const analysisUrl = `https://www.virustotal.com/api/v3/analyses/${urlId}`;
      const analysisResponse = await fetch(analysisUrl, {
        method: 'GET',
        headers: {
          'x-apikey': apiKey,
        },
      });
  
      const analysisData = await analysisResponse.json();
  
      // Check for malicious status
      const stats = analysisData.data.attributes.stats;
      if (stats.malicious > 0) {
        return true;
      }
      else{
        return false;
      }
      // } else {
      //   return ("URL appears safe");
      // }
    } catch (error) {
      return false;
    }
  }