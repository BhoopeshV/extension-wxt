export default defineBackground(() => {
  console.log('JIRA Extension background script started');
  
  // Configure sidepanel to open when extension icon is clicked
  chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
      chrome.sidePanel
        .setPanelBehavior({ openPanelOnActionClick: true })
        .catch((error) => console.error('Failed to set panel behavior:', error));
    }
  });
});