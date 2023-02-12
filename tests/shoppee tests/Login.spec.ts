import { expect } from "@playwright/test";
import * as data from "./source/data.json";
import { test } from "../../fixtures/object_fixture";

test.describe("User login", () => {
  test.beforeEach(async ({ page }) => {});

  test("User logs in to her Shopee account", async ({ shopeeLogin }) => {
    await shopeeLogin.visitShopeePage();
    await shopeeLogin.closePopUpButton();
    await shopeeLogin.clickLoginButton1();
    await shopeeLogin.inputPhoneUserEmail();
    await shopeeLogin.inputPassword();
    await shopeeLogin.clickLoginButton2();
    await expect(shopeeLogin.viewsProfile());
  });
});
