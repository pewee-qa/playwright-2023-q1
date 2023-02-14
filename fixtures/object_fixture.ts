import { test as objectFixture } from "@playwright/test";
import ShopeeloginPage from "../pages/ShopeeLogin-page";
import ShopeeSearchItemPage from "../pages/ShopeeSearchItem-page";
import YoutubeSearchPage from "../pages/YoutubeSearch-page";
import MehiraSignUpPage from "../pages/MehiraSignUp-page";

type Pages = {
  shopeeLogin: ShopeeloginPage;
  shopeeSearchItem: ShopeeSearchItemPage;
  youtubeSearch: YoutubeSearchPage;
  mehiraSignUpPage: MehiraSignUpPage;
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
  mehiraSignUpPage: async ({ page }, use) => {
    await use(new MehiraSignUpPage(page));
  },
});
export const test = testobjects;
