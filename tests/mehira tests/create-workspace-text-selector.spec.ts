import { test, expect } from "@playwright/test";
import Chance from "chance";
const chance = new Chance();

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/authentication");
  await page
    .locator('[data-testid="switch-form-link"]', { hasText: "Sign up" })
    .click();
});

test("Scenario: User successfully creates a workspace", async ({ page }) => {
  //  When user creates a workspace
  const FirstName = chance.first();
  const LastName = chance.last();
  const email = chance.email();

  await page.locator('[placeholder="Input your first name"]').type(FirstName);
  await page.locator("#last-name-label").fill(LastName);
  await page.locator("#emailAddress").fill(email);
  await page.locator("text=Sign Up").click();
  await expect(page.locator("#toast-success")).toContainText(
    "OTP Successfully sent"
  );

  for (let i = 0; i < 6; i++) {
    await page.locator('[id="emailOtp-' + i + '"]').fill("0");
  }
  await page.locator("text=Continue").click();

  //Then User successfully creates a workspace
  await page.locator('[name="name"]').fill("sample workspace");
  await page.locator("text=Continue").click();
});
