const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

// const CustomWorld = require('../support/world');

Given('I open the login page', async function () {
  await this.page.goto(this.baseURL);
});

When('I enter valid credentials', async function () {
  await this.page.fill('input[name="username"]', this.username);
  await this.page.fill('input[name="password"]', this.password);
});

When('I enter invalid credentials', async function () {
  await this.page.fill('input[name="username"]', 'invalidUsername');
  await this.page.fill('input[name="password"]', 'invalidPassword');
});

When('I click the "Sign In" button', async function () {
  await this.page.click('button:has-text("Sign In")');
});

Then('I should be redirected to the dashboard page', async function () {
  const dashboardUrl = 'https://devgroupmanager.locumate.com.au/group-manager/dashboard';
  await this.page.waitForURL(dashboardUrl);
  const url = this.page.url();
  expect(url).toBe(dashboardUrl);
});

Then('I should see an error message', async function () {
  const errorMessage = await this.page.locator('div[role="alert"]');
  await expect(errorMessage).toBeVisible();
});

Then('the user click on the avatar button', async function () {
const avatarButton = this.page.locator('button[type="button"]').nth(3);
await avatarButton.waitFor({ state: 'visible', timeout: 5000 });
await avatarButton.click();
});

Then ('the user click on the {string} button', async function (buttonText)  {
  await this.page.click(`button:has-text("${buttonText}")`);
});