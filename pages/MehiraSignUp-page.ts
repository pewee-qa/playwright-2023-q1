import { Locator, Page } from "@playwright/test";
import * as data from "../tests/mehira tests/source/data.json";
import Chance from "chance";
const chance = new Chance();

export default class MehiraSignUpPage {
  MehiraLink: Locator;

  SignUpButton: Locator;

  FirstName: Locator;

  LastName: Locator;

  Email: Locator;

  SubmitButton: Locator;

  OTPMessage: Locator;

  OTPCode0: Locator;

  OTPCode1: Locator;

  OTPCode2: Locator;

  OTPCode3: Locator;

  OTPCode4: Locator;

  OTPCode5: Locator;

  WorkspaceName: Locator;

  constructor(public page: Page) {
    this.page = page;

    this.SignUpButton = page.locator('//a[contains(text(),"Sign up")]');
    this.FirstName = page.locator("#first-name");
    this.LastName = page.locator("input[name='lastName']");

    this.Email = page.locator("input[name='emailAddress']");
    this.SubmitButton = page.locator("button[type='submit']");
    this.OTPMessage = page.locator("#toast-success-description");
    this.OTPCode0 = page.locator("#emailOtp-0");
    this.OTPCode1 = page.locator("#emailOtp-1");
    this.OTPCode2 = page.locator("#emailOtp-2");
    this.OTPCode3 = page.locator("#emailOtp-3");
    this.OTPCode4 = page.locator("#emailOtp-4");
    this.OTPCode5 = page.locator("#emailOtp-5");
    this.WorkspaceName = page.locator("input[name='name']");
  }

  async clickSignUp() {
    await this.SignUpButton.isVisible();
    await this.SignUpButton.click();
  }

  async enterFirstName() {
    const FirstName = chance.first();
    await this.FirstName.isVisible();
    await this.FirstName.type(FirstName);
  }

  async enterLastName() {
    const LastName = chance.last();
    await this.LastName.isVisible();
    await this.LastName.type(LastName);
  }

  async enterEmail() {
    const email = chance.email();
    await this.Email.isVisible();
    await this.Email.type(email);
  }

  async SubmitPersonalData() {
    await this.SubmitButton.isVisible();
    await this.SubmitButton.click();
  }

  async ViewOTPMessage() {
    await this.OTPMessage.isVisible();
  }

  async enterOTP0() {
    const OTPcode = data.OTP;
    await this.OTPCode0.isVisible;
    await this.OTPCode0.type(OTPcode);
  }

  async enterOTP1() {
    const OTPcode = data.OTP;
    await this.OTPCode1.isVisible();
    await this.OTPCode1.type(OTPcode);
  }

  async enterOTP2() {
    const OTPcode = data.OTP;
    await this.OTPCode2.isVisible();
    await this.OTPCode2.type(OTPcode);
  }

  async enterOTP3() {
    const OTPcode = data.OTP;
    await this.OTPCode3.isVisible();
    await this.OTPCode3.type(OTPcode);
  }

  async enterOTP4() {
    const OTPcode = data.OTP;
    await this.OTPCode4.isVisible();
    await this.OTPCode4.type(OTPcode);
  }

  async enterOTP5() {
    const OTPcode = data.OTP;
    await this.OTPCode5.isVisible();
    await this.OTPCode5.type(OTPcode);
  }

  async SubmitOTPCode() {
    await this.SubmitButton.isVisible();
    await this.SubmitButton.click();
  }

  async InputWorkspace() {
    const workspace = chance.word({ length: 5 });
    await this.WorkspaceName.isVisible();
    await this.WorkspaceName.fill(workspace);
  }

  async SubmitWorkspace() {
    await this.SubmitButton.isVisible();
    await this.SubmitButton.click();
  }
}
