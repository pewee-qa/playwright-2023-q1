import { expect, Locator, Page } from "@playwright/test";

export default class ShopeeloginPage {
  ShopeeLink: Locator;

  LoginButton1: Locator;

  PhoneUserEmailButton: Locator;

  PasswordButton: Locator;

  LoginButton2: Locator;

  ViewsProfile: Locator;

  constructor(public page: Page) {
    this.page = page;

    this.LoginButton1 = page.locator("text=Login");
    this.PhoneUserEmailButton = page.locator(
      '[placeholder="Phone number / Username / Email"]'
    );
    this.PasswordButton = page.locator('[placeholder="Password"]');

    this.LoginButton2 = page.locator("//button[text()='Log In']");
    this.ViewsProfile = page.locator("navbar__username");
  }
  async verifyShopeePage() {
    await this.LoginButton1.isVisible();
  }

  async gotoShopeepage() {
    await this.page.goto("https://shopee.ph/");
  }

  async clickLoginButton1() {
    await this.LoginButton1.click();
  }

  async inputPhoneUserEmail() {
    await this.PhoneUserEmailButton.isVisible();
    await this.PhoneUserEmailButton.fill("+639364667181");
  }

  async inputPassword() {
    await this.PasswordButton.isVisible();
    await this.PasswordButton.type("pEwEe102286");
  }
  async clickLoginButton2() {
    await this.LoginButton2.isVisible();
    await this.LoginButton2.click();
  }
  async viewsProfile() {
    await this.ViewsProfile.isVisible();
    await expect(this.ViewsProfile.isVisible());
  }
}
