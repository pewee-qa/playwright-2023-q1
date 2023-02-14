import { expect } from "@playwright/test";
import * as data from "../mehira tests/source/data.json";
import { test } from "../../fixtures/object_fixture";

test.describe("User sign-up", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(data.MehiraUrl);
  });

  test("User signs-up for an account", async ({ mehiraSignUpPage }) => {
    // await mehiraSignUpPage.gotoMehiraPage();
    await mehiraSignUpPage.clickSignUp();
    await mehiraSignUpPage.enterFirstName();
    await mehiraSignUpPage.enterLastName();
    await mehiraSignUpPage.enterEmail();
    await mehiraSignUpPage.SubmitPersonalData();
    await mehiraSignUpPage.ViewOTPMessage();
    await mehiraSignUpPage.enterOTP0();
    await mehiraSignUpPage.enterOTP1();
    await mehiraSignUpPage.enterOTP2();
    await mehiraSignUpPage.enterOTP3();
    await mehiraSignUpPage.enterOTP4();
    await mehiraSignUpPage.enterOTP5();
    await mehiraSignUpPage.SubmitOTPCode();
    await mehiraSignUpPage.InputWorkspace();
    await expect(mehiraSignUpPage.SubmitWorkspace());
  });
});
