const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  // Initialize browser and page before each scenario
  await this.init();
  console.log(`Logging in as: ${this.username}`);
  
  // Navigate to the login page and perform login actions
  await this.page.goto(this.baseURL);
  await this.page.fill('input[name="username"]', this.username);
  await this.page.fill('input[name="password"]', this.password);
  await this.page.click('button:has-text("Sign In")');
});

After(async function () {
  // Clean up after each scenario (close the browser)
  await this.cleanup();
});
