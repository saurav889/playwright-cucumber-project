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

Before(async() => {await this.page.goto(`${baseURL}`);;
await this.page.fill('input[name="username"]', 'ak@gmail.com');
await this.page.fill('input[name="password"]', 'password');
await this.page.click(`button:has-text("Sign In")`);
});

// After(async () => {
//   await this.page.close();
// });

When('the user navigate to the {string} page', async (pageName) => {
    await this.page.locator(`//div[text()="${pageName}"]`).click();
});

When('the user enter the {string} in the text box', async (name) => {
    await this.page.fill('input[placeholder="Enter Text"]', name);
});

Then('the user click on filter button', async () => {
    await this.page.click(`button:has-text("Filter")`);
});

Then('the user should see the filtered results {string} {string} {string} {string} {string}', async (name, email, groupManager, numberOfPharmacies, pharmacyTags) => {
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(0)).toHaveText(name);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(1)).toHaveText(email);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(2)).toHaveText(groupManager);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(3)).toHaveText(numberOfPharmacies);
    await expect(this.page.locator('td[class="v-data-table__td v-data-table-column--align-start"]').nth(4)).toHaveText(pharmacyTags);
});

Then('the user click on {string} button', async (buttonText) => {
    await this.page.click(`button:has-text("${buttonText}")`);
});

Then('the user enter details {string} {string} {string} in the text box', async (name, email, phoneNumber) => {
    await this.page.fill('input[placeholder="Enter name"]', name);
    await this.page.fill('input[placeholder="Email"]', email);
    await this.page.fill('input[placeholder="Phone Number"]', phoneNumber);
});

Then('the user select {string} from dropdown', async (pharmacyTags) => {
    await this.page.click('input[placeholder="Pharmacy Tags"]');
    await this.page.click(`text=${pharmacyTags}`);
    await this.page.keyboard.press('Escape');
});

Then('the user selects {string} from dropdown', async (sendNotification) => {
    await this.page.click('div[class="v-select__selection"]');
    await this.page.click(`text=${sendNotification}`);
    await this.page.keyboard.press('Escape');
});

Then('the user select permissions {string}, {string}, {string}', async (perm1, perm2, perm3) => {
    await this.page.click(`text=${perm1}`);
    await this.page.click(`text=${perm2}`);
    await this.page.click(`text=${perm3}`);
});

Then('the user select {string} in the text box', async (option) => {
    await this.page.click(`text=${option}`);
});

Then('the user details {string} {string} {string} {string} are empty in the text box', async (name, email, phoneNumber, sendNotification) => {
    await expect(this.page.locator('input[placeholder="Enter name"]')).toBeEmpty();
    await expect(this.page.locator('input[placeholder="Email"]')).toBeEmpty();
    await expect(this.page.locator('input[placeholder="Phone Number"]')).toBeEmpty();
    await expect(this.page.locator('div[class="v-select__selection"]').nth(0)).toHaveText('Send Notification');
});

Then('the user should see error message {string}, {string}, {string}, {string}', async (nameError, emailError, phoneError, notificationError) => {
    await expect(this.page.locator('div[class="v-messages__message"]').nth(0)).toHaveText(nameError);
    await expect(this.page.locator('div[class="v-messages__message"]').nth(1)).toHaveText(emailError);
    await expect(this.page.locator('div[class="v-messages__message"]').nth(2)).toHaveText(phoneError);
    await expect(this.page.locator('div[class="v-messages__message"]').nth(3)).toHaveText(notificationError);
});

Then('the user select respective checkbox to remove for group manager', async () => {
    await this.page.locator('input[type="checkbox"]').nth(1).check();
});

// Then('the user should see a success message {string}', async (successMessage) => {
//     await expect(this.page.locator('div[class="v-snack__content"]')).toHaveText(successMessage);
// });

Then('the user should see {string} message', async (successMessage) => {
});