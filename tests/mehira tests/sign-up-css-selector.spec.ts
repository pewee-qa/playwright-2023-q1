import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/authentication");
  await page
    .locator('[data-testid="switch-form-link"]', { hasText: "Sign up" })
    .click();
});

test("Scenario: Customer successfully registers his account", async ({
  page,
}) => {
  //  When User inputs his credentials

  await page.locator('[placeholder="Input your first name"]').type("Nuelle");
  await page.locator("#last-name").type("Ventanilla");
  await page.locator("#emailAddress").type("nuelle.ventanilla@gmail.com");
  await page.locator(".chakra-button", { hasText: "Sign Up" }).click();

  // Then User receives an OTP in his email

  await expect(page.locator("#toast-success")).toContainText(
    "OTP Successfully sent"
  );
});

test("Scenario: User cannot login with invalid email", async ({ page }) => {
  //  When User inputs his credentials

  await page.locator('[placeholder="Input your first name"]').type("Ella");
  await page.locator("#last-name-label").type("Ventanilla");
  await page.locator("#emailAddress").type("invalidEmail.com");
  await page.locator(".chakra-button", { hasText: "Sign Up" }).click();

  //Then error message is displayed

  await expect(page.locator("#emailAddress-feedback")).toContainText(
    "Please enter a valid email address"
  );
});

test("Scenario: User changes email address", async ({ page }) => {
  //  When User inputs his credentials

  await page.locator('[placeholder="Input your first name"]').type("Ella");
  await page.locator("#last-name-label").type("Ventanilla");
  await page.locator("#emailAddress").type("ella@gmail.com");
  await page.locator(".chakra-button", { hasText: "Sign Up" }).click();

  //And wants to change the email address

  await page
    .locator(".chakra-button", { hasText: "Change Email Address" })
    .click();

  //Then User redirects to Create Account modal
  await page
    .locator(".chakra-text", { hasText: "Create an Acocunt" })
    .isVisible();
});
