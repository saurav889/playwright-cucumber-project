const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(30 * 1000);

const CustomWorld = require('../support/world');

When('the user navigate to the {string} page', async function (pageName) {
  await this.page.locator(`//div[text()="${pageName}"]`).click();
});


When('the user enter the {string} in the text box', async function (name) {
    await this.page.fill('input[placeholder="Enter Text"]', name);
});

Then('the user click on filter button', async function () {
    await this.page.click(`button:has-text("Filter")`);
});

Then('the user should see the filtered results {string} {string} {string} {string} {string}', async function (name, email, groupManager, numberOfPharmacies, pharmacyTags) {
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(0)).toHaveText(name);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(1)).toHaveText(email);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(2)).toHaveText(groupManager);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(3)).toHaveText(numberOfPharmacies);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(4)).toHaveText(pharmacyTags);
});

Then('the user click on {string} button', async function (buttonText) {
    await this.page.click(`button:has-text("${buttonText}")`);
});

Then('the user enter details {string} {string} {string} in the text box', async function (name, email, phoneNumber) {
    await this.page.fill('input[placeholder="Enter name"]', name);
    await this.page.fill('input[placeholder="Email"]', email);
    await this.page.fill('input[placeholder="Phone Number"]', phoneNumber);
});

Then('the user select {string} from dropdown', async function (pharmacyTags) {
    await this.page.click('input[placeholder="Pharmacy Tags"]');
    await this.page.click(`text=${pharmacyTags}`);
    await this.page.keyboard.press('Escape');
});

Then('the user selects {string} from dropdown', async function (sendNotification) {
    await this.page.click('div[class="v-select__selection"]');
    await this.page.click(`text=${sendNotification}`);
    await this.page.keyboard.press('Escape');
});

Then('the user select permissions {string}, {string}, {string}', async function (perm1, perm2, perm3) {
    await this.page.click(`text=${perm1}`);
    await this.page.click(`text=${perm2}`);
    await this.page.click(`text=${perm3}`);
});

Then('the user select {string} in the text box', async function (option) {
    await this.page.click(`text=${option}`);
});

Then('the user details {string} {string} {string} {string} are empty in the text box', async function (name, email, phoneNumber, sendNotification) {
    await expect(this.page.locator('input[placeholder="Enter name"]')).toBeEmpty();
    await expect(this.page.locator('input[placeholder="Email"]')).toBeEmpty();
    await expect(this.page.locator('input[placeholder="Phone Number"]')).toBeEmpty();
    await expect(this.page.locator('div[class="v-select__selection"]').nth(0)).toHaveText('Send Notification');
});

Then('the user should see error message {string}, {string}, {string}, {string}', async function (nameError, emailError, phoneError, notificationError) {
    await expect(this.page.locator('div[class="v-messages__message"]').nth(0)).toHaveText(nameError);
    await expect(this.page.locator('div[class="v-messages__message"]').nth(1)).toHaveText(emailError);
    await expect(this.page.locator('div[class="v-messages__message"]').nth(2)).toHaveText(phoneError);
    await expect(this.page.locator('div[class="v-messages__message"]').nth(3)).toHaveText(notificationError);
});

Then('the user select respective checkbox to remove for group manager', async function ()  {
    await this.page.locator('input[type="checkbox"]').nth(1).check();
});

Then('the user should see {string} message', async (successMessage) => {
});