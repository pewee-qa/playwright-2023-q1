import { expect } from "@playwright/test";
import * as data from "../YouTube tests/source/data.json";
import { test } from "../../fixtures/object_fixture";

test.describe("User searches a specific video", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(data.YouTubeUrl);
  });

  test("User searches an item", async ({ youtubeSearch }) => {
    await youtubeSearch.VisitYouTubePage();
    await youtubeSearch.VerifySearchBar();
    await youtubeSearch.EnterVideoTitle();
    await youtubeSearch.confirmVideo();
    await expect(youtubeSearch.ViewVideoResult());
  });
});
