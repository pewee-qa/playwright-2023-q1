import { test, expect } from "@playwright/test";
import * as data from "./source/data.json";
import Chance from "chance";
const chance = new Chance();

test.beforeEach(async ({ page }) => {
  await page.goto(data.MehiraUrl);
  await page.locator('//a[contains(text(),"Sign up")]').click();
});

test("Scenario: User creates a group", async ({ page }) => {
  // Given User creates an account
  const FirstName = chance.first();
  const LastName = chance.last();
  const email = chance.email();
  const OTPmessage = data.OTPSent;
  const OTPcode = data.OTP;
  const workspace = chance.word({ length: 5 });

  await page.locator("#first-name").type(FirstName);
  await page.locator("input[name='lastName']").fill(LastName);
  await page.locator("input[name='emailAddress']").fill(email);
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#toast-success-description")).toContainText(
    OTPmessage
  );

  await page.locator("#emailOtp-0").fill(OTPcode);
  await page.locator("#emailOtp-1").fill(OTPcode);
  await page.locator("#emailOtp-2").fill(OTPcode);
  await page.locator("#emailOtp-3").fill(OTPcode);
  await page.locator("#emailOtp-4").fill(OTPcode);
  await page.locator("#emailOtp-5").fill(OTPcode);
  await page.locator("button[type='submit']").click();
  await page.locator("input[name='name']").type(workspace);
  await page.locator("button[type='submit']").click();

  //When user wants to create a group

  const MGroup = data.MehiraGroups;

  await page.goto(MGroup);
  await page.locator("//button[text()='Create Group']").click();

  const GroupName = chance.name();
  const Description = chance.sentence({ words: 10 });

  await page.locator("input[name='name']").type(GroupName);
  await page.locator('[name="description"]').type(Description);

  await page.locator("button[type='submit']").click();

  // Then user successfully creates a group
  const GroupMessage = data.promptMessage;

  await expect(page.locator(".chakra-alert__desc")).toContainText(GroupMessage);
});

test("Scenario: User skips group name", async ({ page }) => {
  // Given User logs in to her account
  const FirstName = chance.first();
  const LastName = chance.last();
  const email = chance.email();
  const OTPmessage = data.OTPSent;
  const OTPcode = data.OTP;
  const workspace = chance.word({ length: 5 });

  await page.locator("#first-name").type(FirstName);
  await page.locator("input[name='lastName']").fill(LastName);
  await page.locator("input[name='emailAddress']").fill(email);
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#toast-success-description")).toContainText(
    OTPmessage
  );

  await page.locator("#emailOtp-0").fill(OTPcode);
  await page.locator("#emailOtp-1").fill(OTPcode);
  await page.locator("#emailOtp-2").fill(OTPcode);
  await page.locator("#emailOtp-3").fill(OTPcode);
  await page.locator("#emailOtp-4").fill(OTPcode);
  await page.locator("#emailOtp-5").fill(OTPcode);
  await page.locator("button[type='submit']").click();
  await page.locator("input[name='name']").type(workspace);
  await page.locator("button[type='submit']").click();

  //When user skips the Group name

  const MGroup = data.MehiraGroups;

  await page.goto(MGroup);
  await page.locator("//button[text()='Create Group']").click();

  const Description = chance.sentence({ words: 10 });

  await page.locator("input[name='name']").press("Tab");
  await page.locator('[name="description"]').type(Description);

  await page.locator("button[type='submit']").click();

  // Then error message prompts
  const ErrorMessage1 = data.NameRequired;

  await expect(
    page.locator("div[data-testid='error-message-name']")
  ).toContainText(ErrorMessage1);
});

test("Scenario: User closes the Create group modal", async ({ page }) => {
  // Given User logs in to her account
  const FirstName = chance.first();
  const LastName = chance.last();
  const email = chance.email();
  const OTPmessage = data.OTPSent;
  const OTPcode = data.OTP;
  const workspace = chance.word({ length: 5 });

  await page.locator("#first-name").type(FirstName);
  await page.locator("input[name='lastName']").fill(LastName);
  await page.locator("input[name='emailAddress']").fill(email);
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#toast-success-description")).toContainText(
    OTPmessage
  );

  await page.locator("#emailOtp-0").fill(OTPcode);
  await page.locator("#emailOtp-1").fill(OTPcode);
  await page.locator("#emailOtp-2").fill(OTPcode);
  await page.locator("#emailOtp-3").fill(OTPcode);
  await page.locator("#emailOtp-4").fill(OTPcode);
  await page.locator("#emailOtp-5").fill(OTPcode);
  await page.locator("button[type='submit']").click();
  await page.locator("input[name='name']").type(workspace);
  await page.locator("button[type='submit']").click();

  //When user opens the modal
  const GroupName = chance.name();
  const MGroup = data.MehiraGroups;

  await page.goto(MGroup);
  await page.locator("//button[text()='Create Group']").click();

  //And closes the modal
  await page.locator("button[aria-label='Close']").click();

  // Then User redirects to the Groups page

  await expect(page.locator("(//p[text()='Groups'])[2]")).toBeVisible;
});
