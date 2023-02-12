import { expect } from "@playwright/test";
import * as data from "./source/data.json";
import { test } from "../../fixtures/object_fixture";

test.describe("User login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(data.Shopee);
  });

  test("User searches an item", async ({ shopeeSearchItem }) => {
    await shopeeSearchItem.verifyShopeePage();
    await shopeeSearchItem.closePopUpButton();
    await shopeeSearchItem.checkItem();
    await expect(shopeeSearchItem.viewsSearchedItem());
  });
});
