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