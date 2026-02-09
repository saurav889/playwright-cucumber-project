const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  constructor() {
    // Load environment variables
    this.baseURL = process.env.BASE_URL;
    this.username = process.env.APP_USERNAME;
    this.password = process.env.APP_PASSWORD;

    this.browser = null;
    this.context = null;
    this.page = null;
  }

  // Initialize browser and page
  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  // Cleanup browser after each test
  async cleanup() {
    if (this.browser) await this.browser.close();
  }
}

// Set the world constructor to make the CustomWorld class available
setWorldConstructor(CustomWorld);
