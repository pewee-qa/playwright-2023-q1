import { expect } from "@playwright/test";
import * as data from "./source/data.json";
import { test } from "../../fixtures/object_fixture";

test.describe("User login", () => {
  test.beforeEach(async ({ page, shopeeLogin }) => {
    await page.goto(data.Shopee);
    await shopeeLogin.shopeePeweeLogin();
    await page.waitForLoadState();
  });

  test("User searches an item", async ({ page, shopeeSearchItem }) => {
    await shopeeSearchItem.verifyShopeePage();
    await shopeeSearchItem.closePopUpButton();
    await shopeeSearchItem.checkItem();
    await expect(
      page.locator(`(//div[@class='shopee-header-section__content']//div)[1]`)
    ).toBeVisible();
  });
});
