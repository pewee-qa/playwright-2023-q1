import { expect, Locator, Page } from "@playwright/test";

export default class ShopeeSearchItemPage {
  ShopeeSearchBar: Locator;

  SearchButton: Locator;

  ItemResult: Locator;

  constructor(public page: Page) {
    this.page = page;

    this.ShopeeSearchBar = page.locator(".shopee-searchbar-input__input");
    this.SearchButton = page.locator("//button[@type='button']");
    this.ItemResult = page.locator("'.shopee-search-item-result'");
  }
  async verifyShopeePage() {
    await this.ShopeeSearchBar.isVisible();
    await this.ShopeeSearchBar.fill("noise cancelling headset");
  }

  async checkItem() {
    await this.SearchButton.isVisible();
    await this.SearchButton.click();
  }

  async viewsSearchedItem() {
    await this.ItemResult.isVisible();
    await expect(this.ItemResult.isVisible());
  }
}
