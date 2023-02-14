import { Locator, Page } from "@playwright/test";

import * as data from "../tests/shoppee tests/source/data.json";

export default class ShopeeloginPage {
  ShopeeLink: Locator;

  PopUpButton: Locator;

  LoginButton1: Locator;

  PhoneUserEmailButton: Locator;

  PasswordButton: Locator;

  LoginButton2: Locator;

  ViewsProfile: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.PopUpButton = page.locator(".home-popup__close-button");
    this.LoginButton1 = page.locator("//a[contains(text(),'Login')]");
    this.PhoneUserEmailButton = page.locator(
      '[placeholder="Phone number / Username / Email"]'
    );
    this.PasswordButton = page.locator('[placeholder="Password"]');

    this.LoginButton2 = page.locator("//button[text()='Log In']");
    this.ViewsProfile = page.locator("navbar__username");
  }

  async visitShopeePage() {
    await this.page.goto(data.Shopee);
  }

  async closePopUpButton() {
    await this.PopUpButton.isVisible();
    await this.PopUpButton.click();
  }

  async clickLoginButton1() {
    await this.LoginButton1.isVisible();
    await this.LoginButton1.click();
  }

  async inputPhoneUserEmail() {
    const Phone = data.PhoneNumber;
    await this.PhoneUserEmailButton.isVisible();
    await this.PhoneUserEmailButton.fill(Phone);
  }

  async inputPassword() {
    const Password = data.Pword;
    await this.PasswordButton.isVisible();
    await this.PasswordButton.type(Password);
  }
  async clickLoginButton2() {
    await this.LoginButton2.isVisible();
    await this.LoginButton2.click();
  }
  async viewsProfile() {
    await this.ViewsProfile.isVisible();
  }
  async shopeePeweeLogin() {
    await this.visitShopeePage();
    await this.closePopUpButton();
    await this.clickLoginButton1();
    await this.inputPhoneUserEmail();
    await this.inputPassword();
    await this.clickLoginButton2();
    //await expect(this.viewsProfile.isVisible();
  }
}
