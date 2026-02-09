const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { chromium } = require("playwright");
const { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(30 * 1000);

const CustomWorld = require("../support/world");

When(
  "the user should see the filtered results {string} {string} {string} {string}",
  async function (alias, employerName, email, subscription) {
    await expect(
      this.page
        .locator(
          'td[class="v-data-table__td v-data-table-column--align-start"]',
        )
        .nth(0),
    ).toHaveText(alias);
    await expect(
      this.page
        .locator(
          'td[class="v-data-table__td v-data-table-column--align-start"]',
        )
        .nth(1),
    ).toHaveText(employerName);
    await expect(
      this.page
        .locator(
          'td[class="v-data-table__td v-data-table-column--align-start"]',
        )
        .nth(2),
    ).toHaveText(email);
    await expect(
      this.page
        .locator(
          'td[class="v-data-table__td v-data-table-column--align-start"]',
        )
        .nth(3),
    ).toHaveText(subscription);
  },
);

Then(
  "the users enters details {string} {string} {string} {string} {string} {string} in the text box",
  async function (pharmacyName, email, phone, address, billingAddress, abn) {
    await this.page.locator('[placeholder="Pharmacy name"]').fill(pharmacyName);
    await this.page.locator('[placeholder="Email"]').fill(email);
    await this.page.locator('[placeholder="Phone"]').fill(phone);
    await this.page.locator('[placeholder="Enter address"]').fill(address);
    await this.page
      .locator('[placeholder="Billing address"]')
      .fill(billingAddress);
    await this.page.locator('[placeholder="ABN"]').fill(abn);
  },
);

Then(
  "the users selects {string} from dropdown",
  async function (averageScriptsPerDay) {
    const dropdown = this.page.locator("div.v-field__input").nth(0);
    await dropdown.click();

    const option = this.page.locator(".v-list-item-title", {
      hasText: averageScriptsPerDay,
    });
    await option.click();
  },
);

Then(
  "the users select {string} from dropdown",
  async function (dispensingSoftware) {
    const dropdown1 = this.page.locator("div.v-field__input").nth(1);
    await dropdown1.click();

    const option1 = this.page.locator(".v-list-item-title", {
      hasText: dispensingSoftware,
    });
    await option1.click();
  },
);

Then("finally user select {string} from dropdown", async function (services) {
  const dropdown2 = this.page.locator("div.v-field__input").nth(2);
  await dropdown2.click();

  const option2 = this.page.locator(".v-list-item-title", {
    hasText: services,
  });
  await option2.click();
});

Then(
  "the user should see an error messages {string} {string} {string} {string} {string} {string} {string}",
  async function (pharmacyNameError,emailError,phoneError,abnError,scriptsPerDayError,dispensingError,servicesError,) {
    await expect(this.page.locator('div.v-messages__message').nth(0)).toHaveText(pharmacyNameError);
    await expect(this.page.locator('div.v-messages__message').nth(1)).toHaveText(emailError);
    await expect(this.page.locator('div.v-messages__message').nth(2)).toHaveText(phoneError);
    await expect(this.page.locator('div.v-messages__message').nth(3)).toHaveText(abnError);
    await expect(this.page.locator('div.v-messages__message').nth(4)).toHaveText(scriptsPerDayError);
    await expect(this.page.locator('div.v-messages__message').nth(5)).toHaveText(dispensingError);
    await expect(this.page.locator('div.v-messages__message').nth(6)).toHaveText(servicesError);
  },
);
