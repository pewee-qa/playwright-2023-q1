import { test, expect } from "@playwright/test";
import * as data from "./source/data.json";
import Chance from "chance";
const chance = new Chance();

test.beforeEach(async ({ page }) => {
  await page.goto(data.Shopee);
  await page.locator(".home-popup__close-button").click();
  await page.locator("text=Login").click();

  const Phone = data.PhoneNumber;
  const Password = data.Pword;

  await page
    .locator('[placeholder="Phone number / Username / Email"]')
    .fill(Phone);
  await page.locator('[placeholder="Password"]').fill(Password);
  await page.locator("//button[text()='Log In']").click();

  await expect(page.locator("navbar__username")).toBeVisible;
});

test("Scenario: User searches an item", async ({ page }) => {
  //When  User searches an item
  const item = chance.animal({ type: "pet" });

  await page.locator(".shopee-searchbar-input__input").fill(item);
  await page.locator("//button[@type='button']").click();

  // Then list of options is displayed
  await expect(page.locator("'.shopee-search-item-result'")).toBeVisible;
});
