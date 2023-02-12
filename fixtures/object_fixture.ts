import { test as objectFixture } from "@playwright/test";
import ShopeeloginPage from "../pages/ShopeeLogin-page";
import ShopeeSearchItemPage from "../pages/ShopeeSearchItem-page";
import YoutubeSearchPage from "../pages/YoutubeSearch-page";

type Pages = {
  shopeeLogin: ShopeeloginPage;
  shopeeSearchItem: ShopeeSearchItemPage;
  youtubeSearch: YoutubeSearchPage;
};

const testobjects = objectFixture.extend<Pages>({
  shopeeLogin: async ({ page }, use) => {
    await use(new ShopeeloginPage(page));
  },
  shopeeSearchItem: async ({ page }, use) => {
    await use(new ShopeeSearchItemPage(page));
  },
  youtubeSearch: async ({ page }, use) => {
    await use(new YoutubeSearchPage(page));
  },
});
export const test = testobjects;
