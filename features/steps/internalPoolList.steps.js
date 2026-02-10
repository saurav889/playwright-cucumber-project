const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { chromium } = require("playwright");
const { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(30 * 1000);

const CustomWorld = require("../support/world");

Then("the user click on invite new user icon button", async function () {
  await this.page.locator("(//a[contains(@aria-describedby,'v-tooltip-')])[2]").click();
});

Then("the user enter the {string} {string} {string} {string} in the respective fields", async function (firstName, lastName, email, mobileNumber) { 
  const firstNameInput = this.page.locator("input[placeholder*='Enter First name']");
  await firstNameInput.waitFor({ state: 'visible' });
  await firstNameInput.fill(firstName); 
  const lastNameInput = this.page.locator("input[placeholder*='Enter Last Name']");
  await lastNameInput.waitFor({ state: 'visible' });
  await lastNameInput.fill(lastName);
  await this.page.locator("input[placeholder='Enter Email']").fill(email);
  await this.page.locator("input[placeholder='Enter Phone']").fill(mobileNumber);
});

Then("the user select the {string} from dropdown", async function (locumType) {
  const dropdown1 = this.page.locator("div.v-field__input").nth(0);
    await dropdown1.click();
    const option1 = this.page.locator(".v-list-item-title", {
      hasText: locumType,
    });
    await option1.click();
});

Then("the user selects the {string} from dropdown", async function (employeeType) {
  const dropdown2 = this.page.locator("div.v-field__input").nth(4);
    await dropdown2.click();
    const option2 = this.page.locator(".v-list-item-title", {
      hasText: employeeType,
    });
    await option2.click();
});

Then("the user click on internal pool user icon button", async function () {
  await this.page.locator("(//a[contains(@aria-describedby,'v-tooltip-')])[1]").click();

  await this.page.waitForTimeout(10000);
});

Then("the user selected {string} from dropdown", async function (tag) {
  const dropdown3 = this.page.locator("div.v-field__input").nth(0);
    await dropdown3.click();
    const option3 = this.page.locator(".v-list-item-title", {
      hasText: tag,
    });
    await option3.click();
});

Then("the users selected {string} from dropdown", async function (type) {
  const dropdown4 = this.page.locator("div.v-field__input").nth(1);
    await dropdown4.click();
    const option4 = this.page.locator(".v-list-item-title", {
      hasText: type,
    });
    await option4.click();
});

Then("the user enter {string} in the input field", async function (searchByName) {
  await this.page.locator("input[placeholder='Enter name']").fill(searchByName);
});

Then("the user verfy {string} {string}", async function (type, searchByName) {
  const resultType = this.page.locator("td[class='v-data-table__td v-data-table-column--align-start']").nth(0);
  const resultName = this.page.locator("td[class='v-data-table__td v-data-table-column--align-start']").nth(3);
  await expect(resultType).toHaveText(type);
  await expect(resultName).toHaveText(searchByName);
});
