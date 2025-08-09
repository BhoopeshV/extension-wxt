import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    permissions: ['sidePanel'],
    action: {
      default_title: 'Open JIRA Extension'
    },
    side_panel: {
      default_path: 'sidepanel.html'
    }
  }
});