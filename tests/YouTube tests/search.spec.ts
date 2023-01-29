import { test, expect } from "@playwright/test";
import * as data from "./source/data.json";
import Chance from "chance";
const chance = new Chance();

test.beforeEach(async ({ page }) => {
  await page.goto(data.YouTubeUrl);
  await page.locator("#search.ytd-searchbox").isVisible();
});

test("Scenario: User searches an animal from the ocean", async ({ page }) => {
  // When User searches an animal from the ocean
  const animal = chance.animal({ type: "ocean" });

  await page.locator("(//input[@id='search'])[1]").type(animal);
  await page
    .locator("(//yt-icon[@class='style-scope ytd-searchbox'])[2]")
    .click();

  //Then User sees related videos about the animal

  await expect(page.locator(".style-scope ytd-section-list-renderer"))
    .toBeVisible;
});

test("Scenario: User fails to select a video", async ({ page }) => {
  //When User skips to input a particular video

  await page
    .locator("(//yt-icon[@class='style-scope ytd-searchbox'])[2]")
    .click();

  //Then User remains in the dashboard

  await expect(page.locator(".style-scope ytd-searchbox")).toBeVisible;
});

test("Scenario: User selects a particular video", async ({ page }) => {
  //When User enters a particular video

  const video = data.videoTitle;

  await page.locator("(//input[@id='search'])[1]").type(video);
  await page
    .locator("(//yt-icon[@class='style-scope ytd-searchbox'])[2]")
    .click();

  //Then selected video is displayed

  await expect(page.locator("#video-title", { hasText: video })).toBeVisible;
});

test("Scenario: User plays Flowers by Miley Cyrus", async ({ page }) => {
  //When User enters a particular video

  const flowers = data.videoMiley;

  await page.locator("(//input[@id='search'])[1]").type(flowers);
  await page
    .locator("(//yt-icon[@class='style-scope ytd-searchbox'])[2]")
    .click();

  //And clicks the video
  await page
    .locator(
      "(//yt-formatted-string[@class='style-scope ytd-video-renderer'])[1]"
    )
    .click();

  //Then selected video is played

  await expect(page.locator(".style-scope ytd-watch-metadata")).toBeVisible;
});
