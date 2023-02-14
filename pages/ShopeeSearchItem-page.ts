import { Locator, Page } from "@playwright/test";

export default class ShopeeSearchItemPage {
  ShopeeSearchBar: Locator;

  PopUpButton: Locator;

  SearchButton: Locator;

  ItemResult: Locator;

  constructor(public page: Page) {
    this.page = page;

    this.ShopeeSearchBar = page.locator(".shopee-searchbar-input__input");
    this.PopUpButton = page.locator(".home-popup__close-button");
    this.SearchButton = page.locator("//button[@type='button']");
    this.ItemResult = page.locator(
      `(//div[@class='shopee-header-section__content']//div)[1]`
    );
  }
  async verifyShopeePage() {
    await this.ShopeeSearchBar.isVisible();
    await this.ShopeeSearchBar.fill("noise cancelling headset");
  }

  async closePopUpButton() {
    await this.PopUpButton.isVisible();
    await this.PopUpButton.click();
  }

  async checkItem() {
    await this.SearchButton.isVisible();
    await this.SearchButton.click();
  }

  async viewsSearchedItem() {
    await this.ItemResult.isVisible();
  }
}
