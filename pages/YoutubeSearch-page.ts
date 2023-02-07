import { expect, Locator, Page } from "@playwright/test";

export default class YoutubeSearch {
  YouTubeLink: Locator;

  YouTubeSearchBar: Locator;

  InputBar: Locator;

  SearchIcon: Locator;

  ResultVideo: Locator;

  constructor(public page: Page) {
    this.page = page;

    this.YouTubeSearchBar = page.locator("#search.ytd-searchbox");
    this.InputBar = page.locator("(//input[@id='search'])[1]");
    this.SearchIcon = page.locator(
      "(//yt-icon[@class='style-scope ytd-searchbox'])[2]"
    );
    this.ResultVideo = page.locator(".style-scope ytd-section-list-renderer");
  }

  async VisitYoTubePage() {
    await this.YouTubeLink.isVisible();
  }

  async VerifySearchBar() {
    await this.YouTubeSearchBar.isVisible();
  }

  async EnterVideoTitle() {
    await this.InputBar.isVisible();
    await this.InputBar.type("Flowers by Miley Cyrus");
  }

  async confirmVideo() {
    await this.SearchIcon.isVisible();
    await this.SearchIcon.click();
  }

  async ViewVideoResult() {
    await this.ResultVideo.isVisible();
    await expect(this.ResultVideo.isVisible());
  }
}
