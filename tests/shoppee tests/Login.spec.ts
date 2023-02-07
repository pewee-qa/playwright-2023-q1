import { test, expect } from "@playwright/test";
import * as data from "./source/data.json";
import Chance from "chance";

const chance = new Chance();

test.describe("User login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(data.Shopee);
  });
});

test("Scenario: User logs in to his account", async ({ page }) => {
  //When  User inputs his credentials
  const Phone = data.PhoneNumber;
  const Password = data.Pword;
  await page.locator(".home-popup__close-button").click();
  await page.locator("text=Login").click();
  await page
    .locator('[placeholder="Phone number / Username / Email"]')
    .fill(Phone);
  await page.locator('[placeholder="Password"]').fill(Password);
  await page.locator("//button[text()='Log In']").click();

  // Then user successfully logs in to her account
  await expect(page.locator("navbar__username")).toBeVisible;
});

test("Scenario: User inputs wrong password", async ({ page }) => {
  //When  User inputs his credentials
  const Phone = data.PhoneNumber;
  const WPassword = data.WrongPword;

  await page
    .locator('[placeholder="Phone number / Username / Email"]')
    .fill(Phone);
  await page.locator('[placeholder="Password"]').fill(WPassword);
  await page.locator("//button[text()='Log In']").click();

  // Then error message is displayed
  await expect(
    page.locator(
      "//div[text()='Your account and/or password is incorrect, please try again']"
    )
  ).toBeVisible;
});
