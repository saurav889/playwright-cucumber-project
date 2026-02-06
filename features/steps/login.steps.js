const { Given, When, Then, Before, After} = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { expect } = require('@playwright/test');
const { baseURL } = require('../../package.json');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(30 * 1000); // 30 seconds


let browser;
let page;

Before(async () => {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async () => {
  await this.page.close();
});

Given('I open the {string} page', async (endpoint) => {
  await this.page.goto(`${baseURL}${endpoint}`);;
});

When('the user enter the {string} and {string}', async (username, password) => {
  await this.page.fill('input[name="username"]', username);
  await this.page.fill('input[name="password"]', password);
});

When('the user click on the {string} button', async (buttonText) => {
  await this.page.click(`button:has-text("${buttonText}")`);
});

Then('the user should be redirected to the dashboard page', async () => {
  await this.page.waitForURL('**/group-manager/dashboard', { timeout: 10000 });
  await expect(this.page).toHaveURL(/\/group-manager\/dashboard/);
});

Then('{string} message should be displayed', async (messageText) => {
  const messageLocator = this.page.locator(`text=${messageText}`);
  await expect(messageLocator).toBeVisible();
});

Then('the user click on the avatar button', async () => {
  const buttons = this.page.locator('button[type=button]');
  await buttons.nth(3).click();
});